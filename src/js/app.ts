import '/src/css/app.pcss';
import 'lazysizes';
import { createApp } from 'vue/dist/vue.esm-bundler';
import { defineAsyncComponent } from 'vue';
import VueClickAway from 'vue3-click-away';
import SkeletonError from '../vue/SkeletonError.vue';
import SkeletonLoading from '../vue/SkeletonLoading.vue';

const main = async() => {
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
    }
  })

  app.use(VueClickAway)

  // Mount the app
  app.mount('#app')
}

// Execute async function
main().then( (value) => {
  window.onload = () => {
    const app = document.getElementById('app')
    if (app) { app.style.opacity = '1.0' }
  }
})