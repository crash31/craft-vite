import '/src/css/app.pcss';
import './utils/lazysizes-wrapper';
import { createApp } from 'vue/dist/vue.esm-bundler';
import { defineAsyncComponent } from 'vue';
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
    }
  })
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