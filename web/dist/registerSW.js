if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/distsw.js', { scope: '/dist' })})}