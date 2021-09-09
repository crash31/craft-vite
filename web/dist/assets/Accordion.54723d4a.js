import{r as e,h as t,o as n,c as s,F as o,l as a,n as i,a as l,t as r,g as c,w as d,v as u,T as p}from"./vendor.1db58565.js";const h={name:"Accordion",props:{list:{type:Array,default:()=>[]}},computed:{formattedList(){return this.list.map(((e,t)=>({headline:Object.values(e)[0],content:Object.values(e)[1]})))}},data:()=>({isOpen:null}),methods:{toggleItem(e){this.isOpen==e?this.isOpen=null:this.isOpen=e},enter(e){const t=document.querySelector(`.pseudo-block-${e}`),n=document.querySelector(`.accordion-content-${e}`).offsetHeight;t.style.height=`${n}px`},leave(e){document.querySelector(`.pseudo-block-${e}`).style.height="0px"},away(){null!=this.isOpen&&(this.isOpen=null)}}},f={class:"accordion-wrap"},v=["onClick"],m={class:"icon-wrap inline-block mr-3 flex-shrink-0 pt-1"},y=[l("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[l("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M10.75 8.75L14.25 12L10.75 15.25"})],-1)],g={class:"w-full inline-block text-lg lg:text-2xl text-left leading-none"},k={class:"accordion-content-wrap relative overflow-hidden"},w=l("div",{class:"w-6 mr-3 flex-shrink-0"},null,-1),x={class:"prose py-4 lg:py-8"},b=["innerHTML"];h.render=function(h,O,L,$,j,q){const A=e("click-away");return t((n(),s("div",f,[(n(!0),s(o,null,a(q.formattedList,((e,o)=>(n(),s("div",{class:i(["accordion-item",o!=q.formattedList.length-1?"border-b border-gray-300":""]),key:`accordion-${o}`},[l("button",{"aria-label":"Open Accordion Item",class:"accordion-trigger flex items-center justify-start focus:outline-none py-2 w-full",onClick:e=>q.toggleItem(o)},[l("span",m,[l("span",{class:i(["inline-flex w-6 h-6 items-center justify-center transform duration-200",j.isOpen==o?"rotate-90":"rotate-0"])},y,2)]),l("span",g,r(e.headline),1)],8,v),l("div",k,[l("div",{class:i([`pseudo-block-${o}`,"relative duration-200"]),style:{height:"0px"}},null,2),c(p,{name:"accordion-transition",onEnter:e=>q.enter(o),onLeave:e=>q.leave(o),"enter-from-class":"opacity-0","enter-active-class":"transition ease-out duration-200","enter-to-class":"opacity-100","leave-from-class":"opacity-100","leave-active-class":"transition ease-out duration-200","leave-to-class":"opacity-0"},{default:d((()=>[t(l("div",{class:i(["absolute top-0 inset-x-0 flex",`accordion-content-${o}`])},[w,l("div",x,[l("span",{innerHTML:e.content},null,8,b)])],2),[[u,j.isOpen==o]])])),_:2},1032,["onEnter","onLeave"])])],2)))),128))],512)),[[A,q.away]])};export{h as default};
