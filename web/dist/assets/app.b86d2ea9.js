import{o as e,c as o,a as n,b as t,d as r,p as s}from"./vendor.1db58565.js";const a={},d=function(e,o){return o&&0!==o.length?Promise.all(o.map((e=>{if((e=`/dist/${e}`)in a)return;a[e]=!0;const o=e.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const t=document.createElement("link");return t.rel=o?"stylesheet":"modulepreload",o||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),o?new Promise(((e,o)=>{t.addEventListener("load",e),t.addEventListener("error",o)})):void 0}))).then((()=>e())):e()};const i={},l=[n("p",{class:"text-red-600"},"Component failed to load.",-1)];i.render=function(n,t){return e(),o("div",null,l)};const c={},p=[n("p",{class:"text-gray-600"},"Loading...",-1)];c.render=function(n,t){return e(),o("div",null,p)},"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/dist/sw.js").catch((e=>{console.log("SW registration failed: ",e)}))}));(async()=>{const e=t({name:"App",components:{HelloWorld:r({loader:()=>d((()=>import("./HelloWorld.3348bcc2.js")),["assets/HelloWorld.3348bcc2.js","assets/vendor.1db58565.js"]),delay:200,timeout:3e3,errorComponent:i,loadingComponent:c}),Test:r((()=>d((()=>import("./Test.7a0a118a.js")),["assets/Test.7a0a118a.js","assets/vendor.1db58565.js"]))),Modal:r((()=>d((()=>import("./Modal.41b75dfa.js")),["assets/Modal.41b75dfa.js","assets/Modal.c1c2cabc.css","assets/vendor.1db58565.js"]))),Accordion:r((()=>d((()=>import("./Accordion.54723d4a.js")),["assets/Accordion.54723d4a.js","assets/vendor.1db58565.js"])))}});e.use(s),e.mount("#app")})().then((e=>{window.onload=()=>{const e=document.getElementById("app");e&&(e.style.opacity="1.0")}}));