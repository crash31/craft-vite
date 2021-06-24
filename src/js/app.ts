import '/src/css/app.pcss';
import HelloWorld from '@/vue/HelloWorld.vue'
import Test from '@/vue/Test.vue'
import {createApp} from 'vue'

const main = async() => {
  // Create vue instances
  const hello = createApp(HelloWorld).mount('#helloWorld')
  const test = createApp(Test).mount('#test')
  // Mount the app
  return {hello, test}
}

// Execute async function
main().then( ({hello, test}) => {
  window.onload = () => {
    const app = document.getElementById('app')
    if (app) { app.style.opacity = '1.0' }
  }
})