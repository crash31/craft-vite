import '/src/css/app.pcss';
import * as Turbo from '@hotwired/turbo';
import gsap from 'gsap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import { defineAsyncComponent } from 'vue';
import VueClickAway from 'vue3-click-away';
import SkeletonError from '../vue/SkeletonError.vue';
import SkeletonLoading from '../vue/SkeletonLoading.vue';

Turbo.start();

const main = async () => {
  // Create vue instances
  const app = createApp({
    name: 'App',
    components: {
      HelloWorld: defineAsyncComponent({
        loader: () => import('../vue/HelloWorld.vue'),
        delay: 200,
        timeout: 3000,
        errorComponent: SkeletonError,
        loadingComponent: SkeletonLoading,
      }),
      Test: defineAsyncComponent(() => import('../vue/Test.vue')),
      Modal: defineAsyncComponent(() => import('../vue/Modal.vue')),
      Accordion: defineAsyncComponent(() => import('../vue/Accordion.vue')),
      Tooltip: defineAsyncComponent(() => import('../vue/Tooltip.vue')),
    },
    beforeMount() {
      const app = document.getElementById('app')
      // console.log('beforeMount');
      if (app.parentNode) {
        document.addEventListener('turbo:visit', () => this.$.appContext.app.unmount(), { once: true });
        this.$originalEl = app.outerHTML;
      }
    },
    mounted() {
      const app = document.getElementById('app')
      // Correct for history issue
      if (app.children.length === 0) {
        Turbo.visit(window.location.href);
      }
      gsap.fromTo(app, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: 'power2.out' });
    },
    destroyed() {
      const app = document.getElementById('app')
      console.log('destroyed');
      app.outerHTML = this.$originalEl;
    },
  })

  app.use(VueClickAway)

  // Mount the app
  app.mount('#app')
}

document.addEventListener('turbo:load', () => {
  // Execute async function
  main().then((value) => {
    window.onload = () => {
      if (app) { app.style.opacity = '1.0' }
    }
  })
})