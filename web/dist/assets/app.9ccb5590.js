import{o as e,c as n,a as o,b as t,d as r,p as s}from"./vendor.1db58565.js";const d={},a=function(e,n){return n&&0!==n.length?Promise.all(n.map((e=>{if((e=`/dist/${e}`)in d)return;d[e]=!0;const n=e.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const t=document.createElement("link");return t.rel=n?"stylesheet":"modulepreload",n||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),n?new Promise(((e,n)=>{t.addEventListener("load",e),t.addEventListener("error",n)})):void 0}))).then((()=>e())):e()};const l={},i=[o("p",{class:"text-red-600"},"Component failed to load.",-1)];l.render=function(o,t){return e(),n("div",null,i)};const c={},p=[o("p",{class:"text-gray-600"},"Loading...",-1)];c.render=function(o,t){return e(),n("div",null,p)};(async()=>{const e=t({name:"App",components:{HelloWorld:r({loader:()=>a((()=>import("./HelloWorld.3348bcc2.js")),["assets/HelloWorld.3348bcc2.js","assets/vendor.1db58565.js"]),delay:200,timeout:3e3,errorComponent:l,loadingComponent:c}),Test:r((()=>a((()=>import("./Test.7a0a118a.js")),["assets/Test.7a0a118a.js","assets/vendor.1db58565.js"]))),Modal:r((()=>a((()=>import("./Modal.41b75dfa.js")),["assets/Modal.41b75dfa.js","assets/Modal.c1c2cabc.css","assets/vendor.1db58565.js"]))),Accordion:r((()=>a((()=>import("./Accordion.54723d4a.js")),["assets/Accordion.54723d4a.js","assets/vendor.1db58565.js"])))}});e.use(s),e.mount("#app")})().then((e=>{window.onload=()=>{const e=document.getElementById("app");e&&(e.style.opacity="1.0")}}));