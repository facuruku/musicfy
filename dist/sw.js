if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const u=e=>i(e,n),t={module:{uri:n},exports:o,require:u};s[n]=Promise.all(l.map((e=>t[e]||u(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Circular-Regular-d114ea43.woff2",revision:null},{url:"assets/CircularSp-Book-9b7413f9.woff2",revision:null},{url:"assets/CircularSpTitle-Black-0c60fd01.woff2",revision:null},{url:"assets/img/en.webp",revision:null},{url:"assets/img/equaliser-animated-green.gif",revision:null},{url:"assets/img/es.webp",revision:null},{url:"assets/img/liked-songs-300.webp",revision:null},{url:"assets/img/liked-songs-640.webp",revision:null},{url:"assets/img/noise.svg",revision:null},{url:"assets/img/profile-pic.webp",revision:null},{url:"assets/img/screenshot-iphone14promax.webp",revision:null},{url:"assets/img/screenshot-pc-fullhd.webp",revision:null},{url:"assets/index-4b095d01.js",revision:null},{url:"assets/index-dd56d7ef.css",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"e219101c1026494a4f6a7360731ab806"},{url:"assets/img/pwa-192.webp",revision:"8581ae2d1f09688eb6dbb01b1e548273"},{url:"assets/img/pwa-512.webp",revision:"728a0001238e0a103e06c7efeebb6015"},{url:"manifest.webmanifest",revision:"b4b0676f2cb38e93240aa611fc6c27d3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));