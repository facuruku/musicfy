if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const u=s=>i(s,n),t={module:{uri:n},exports:o,require:u};e[n]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(r(...s),o)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutView-7e822790.js",revision:null},{url:"assets/AuthView-cffb411e.js",revision:null},{url:"assets/Circular-Regular-d114ea43.woff2",revision:null},{url:"assets/CircularSp-Book-9b7413f9.woff2",revision:null},{url:"assets/CircularSpTitle-Black-0c60fd01.woff2",revision:null},{url:"assets/ErrorView-b9624ac0.css",revision:null},{url:"assets/ErrorView-fd9eb9a8.js",revision:null},{url:"assets/HomeView-44506121.js",revision:null},{url:"assets/img/en.webp",revision:null},{url:"assets/img/equaliser-animated-green.gif",revision:null},{url:"assets/img/es.webp",revision:null},{url:"assets/img/liked-songs-300.webp",revision:null},{url:"assets/img/liked-songs-640.webp",revision:null},{url:"assets/img/noise.svg",revision:null},{url:"assets/img/profile-pic.webp",revision:null},{url:"assets/img/screenshot-iphone14promax.webp",revision:null},{url:"assets/img/screenshot-pc-fullhd.webp",revision:null},{url:"assets/index-19e6b87f.js",revision:null},{url:"assets/index-c8fef63b.css",revision:null},{url:"assets/ManageView-ebb7b080.js",revision:null},{url:"assets/ResetPasswordView-d41d4d2f.js",revision:null},{url:"assets/SongView-14044c03.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"acfaa4dd19c14b994e329d7ba49074ff"},{url:"assets/img/pwa-192.webp",revision:"8581ae2d1f09688eb6dbb01b1e548273"},{url:"assets/img/pwa-512.webp",revision:"728a0001238e0a103e06c7efeebb6015"},{url:"manifest.webmanifest",revision:"b4b0676f2cb38e93240aa611fc6c27d3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
