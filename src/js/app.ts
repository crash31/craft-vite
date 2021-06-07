import '/src/css/app.pcss';
import HelloWorld from '@/vue/HelloWorld.vue'
import {createApp} from 'vue'

const main = async() => {
  // Create vue instances
  const hello = createApp(HelloWorld).mount('#helloWorld')

  // Mount the app
  return {hello}
}

// Execute async function
main().then( ({hello}) => {
  window.onload = () => {
    const app = document.getElementById('app')
    if (app) { app.style.opacity = '1.0' }
  }
})