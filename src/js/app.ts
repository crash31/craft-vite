import '/src/css/app.pcss';

console.log("Hello, world!");
console.log('HMR works!');

window.onload = () => {
  const app = document.getElementById('app')
  if (app) {
    app.style.opacity = '1.0'
  }
}