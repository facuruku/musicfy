import{m as b,u as y,a as O,f as $,R,_ as P,r as w,o as c,c as h,b as n,n as g,t as l,w as S,d as f,e as v,B as H,s as F,g as p,h as B,i as N,j as U,k as z,l as C,F as T,p as M,q as V,v as k,x,y as W}from"./index-6fa766f3.js";const K="/musicfy/assets/img/equaliser-animated-green.gif",G={name:"SongItem",props:{song:{type:Object,required:!0},index:{type:Number,required:!0},isSelected:{type:Boolean,required:!0}},emits:["double-click"],computed:{...b(y,["getCurrentSong","isPlaying"]),isSongInPlayer(){return this.getCurrentSong.docID===this.song.docID},isSongPlaying(){return this.isSongInPlayer&&this.isPlaying}},methods:{...O(y,["play","toggleAudio"]),getDuration(){return $(this.song.duration??0)},handleDblClick(e){this.$emit("double-click"),this.play(e)}},components:{RouterLink:R}},J={class:"flex justify-center items-center"},Q={key:0,class:"group-hover:hidden"},X={key:1,src:K,alt:"Sound wave",class:"group-hover:hidden w-3.5"},Y={class:"overflow-x-clip text-ellipsis"},Z=["onClick"],ee={class:"flex justify-end items-center gap-4"},te=n("i",{class:"!hidden sm:!block fa-solid fa-heart text-green-500"},null,-1),se={class:"hidden sm:block w-9"};function ne(e,t,s,i,a,o){const r=w("RouterLink");return c(),h("tr",{class:g(["group hover:cursor-pointer",{"bg-white bg-opacity-30 ":s.isSelected,"sm:hover:bg-white sm:hover:bg-opacity-10 sm:hover:text-white secondary-text":!s.isSelected}])},[n("td",{id:"index",class:g(["hidden sm:table-cell rounded-l-md",{"text-green-500":o.isSongInPlayer,"text-secondary":!o.isSongInPlayer}]),onClick:t[0]||(t[0]=S(d=>o.isSongInPlayer?e.toggleAudio():e.play(s.song),["prevent"]))},[n("div",J,[n("i",{class:g(["!hidden group-hover:!block fa-solid text-white text-sm",{"fa-pause ":o.isSongPlaying,"fa-play":!o.isSongPlaying}])},null,2),o.isSongPlaying?(c(),h("img",X)):(c(),h("p",Q,l(s.index+1),1))])],2),n("td",{id:"title",onDblclick:t[1]||(t[1]=d=>o.handleDblClick(s.song)),class:"rounded-l-md sm:rounded-none px-2"},[f(r,{to:{name:"song",params:{id:s.song.docID}},class:"text-white w-max border-b border-b-transparent hover:border-b-white"},{default:v(()=>[n("span",{class:g(["overflow-x-clip text-ellipsis",{"text-white":!o.isSongInPlayer,"text-green-500":o.isSongInPlayer}])},l(s.song.modified_name),3)]),_:1},8,["to"]),f(r,{to:{name:"song",params:{id:s.song.docID}},class:"block w-max border-b border-b-transparent hover:border-b-white text-sm"},{default:v(()=>[n("span",Y,l(s.song.artist||e.$t("home.unknown")),1)]),_:1},8,["to"])],32),n("td",{id:"genre",onDblclick:t[2]||(t[2]=d=>o.handleDblClick(s.song)),class:"hidden sm:table-cell"},l(s.song.genre||e.$t("home.unknown")),33),n("td",{id:"comments",onDblclick:t[3]||(t[3]=d=>o.handleDblClick(s.song)),class:"hidden sm:table-cell"},[f(r,{custom:"",to:{name:"song",params:{id:s.song.docID},hash:"#comments"}},{default:v(({navigate:d})=>[n("span",{onClick:d,class:"hover:underline"},l(s.song.comment_count),9,Z)]),_:1},8,["to"])],32),n("td",{id:"duration",onDblclick:t[5]||(t[5]=d=>o.handleDblClick(s.song)),class:"rounded-r-md px-2"},[n("div",ee,[te,n("i",{class:g(["sm:!hidden fa-solid text-white text-xl",{"fa-pause":o.isSongPlaying,"fa-play":!o.isSongPlaying}]),onClick:t[4]||(t[4]=S(d=>o.isSongInPlayer?e.toggleAudio():e.play(s.song),["prevent"]))},null,2),n("p",se,l(o.getDuration()),1)])],32)],2)}const oe=P(G,[["render",ne]]);var ie=`
@layer primevue {
    .p-inputswitch {
        display: inline-block;
    }

    .p-inputswitch-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid transparent;
    }

    .p-inputswitch-slider:before {
        position: absolute;
        content: '';
        top: 50%;
    }
}
`,le={root:{position:"relative"}},re={root:function(t){var s=t.instance,i=t.props;return["p-inputswitch p-component",{"p-inputswitch-checked":s.checked,"p-disabled":i.disabled,"p-focus":s.focused}]},slider:"p-inputswitch-slider"},ae=H.extend({name:"inputswitch",css:ie,classes:re,inlineStyles:le}),ce={name:"BaseInputSwitch",extends:F,props:{modelValue:{type:null,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:ae,provide:function(){return{$parentInstance:this}}},A={name:"InputSwitch",extends:ce,emits:["click","update:modelValue","change","input","focus","blur"],data:function(){return{focused:!1}},methods:{onClick:function(t){if(!this.disabled){var s=this.checked?this.falseValue:this.trueValue;this.$emit("click",t),this.$emit("update:modelValue",s),this.$emit("change",t),this.$emit("input",s),this.$refs.input.focus()}},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)}},computed:{checked:function(){return this.modelValue===this.trueValue}}};function m(e){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(e)}function I(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),s.push.apply(s,i)}return s}function D(e){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?I(Object(s),!0).forEach(function(i){de(e,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):I(Object(s)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(s,i))})}return e}function de(e,t,s){return t=ue(t),t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function ue(e){var t=he(e,"string");return m(t)==="symbol"?t:String(t)}function he(e,t){if(m(e)!=="object"||e===null)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var i=s.call(e,t||"default");if(m(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ge=["id","checked","disabled","aria-checked","aria-labelledby","aria-label"];function me(e,t,s,i,a,o){return c(),h("div",p({class:e.cx("root"),style:e.sx("root"),onClick:t[2]||(t[2]=function(r){return o.onClick(r)})},e.ptm("root"),{"data-pc-name":"inputswitch"}),[n("div",p({class:"p-hidden-accessible"},e.ptm("hiddenInputWrapper"),{"data-p-hidden-accessible":!0}),[n("input",p({ref:"input",id:e.inputId,type:"checkbox",role:"switch",class:e.inputClass,style:e.inputStyle,checked:o.checked,disabled:e.disabled,"aria-checked":o.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onFocus:t[0]||(t[0]=function(r){return o.onFocus(r)}),onBlur:t[1]||(t[1]=function(r){return o.onBlur(r)})},D(D({},e.inputProps),e.ptm("hiddenInput"))),null,16,ge)],16),n("span",p({class:e.cx("slider")},e.ptm("slider")),null,16)],16)}A.render=me;const _="/musicfy/assets/img/liked-songs-300.webp",j="/musicfy/assets/img/liked-songs-640.webp",pe={name:"AppPlaylist",components:{SongItem:oe,InputSwitch:A},props:{songs:{type:Array,required:!0},songsCount:{type:Number,required:!0}},data(){return{selectedSong:"",downloadSongs:!1}},computed:{...b(y,["playing","playerHasSong"]),...b(B,["username"])},watch:{downloadSongs(e){e?this.cacheSongs():this.clearSongsCache()}},methods:{...O(y,["play","toggleAudio"]),greeting(){return N(this.username)},isSongSelected(e){return this.selectedSong===e},selectSong(e){this.selectedSong=this.selectedSong===e?null:e},handleDblClick(e){this.selectSong(e.docID),this.play(e)},async cacheSongs(){const e=await caches.open("audio-cache");for(const t of this.songs)if(!await e.match(t.url)){const s=await fetch(t.url);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);await e.put(t.url,s)}},async clearSongsCache(){await caches.delete("audio-cache")}}},fe=_+" 150w, "+_+" 300w, "+j+" 320w, "+j+" 640w",be={class:"flex flex-col"},ye={class:"px-4 pb-5 text-white font-circular-thin bg-gradient-1"},we={class:"pt-10 pb-10 font-circular-black text-xl sm:text-2xl lg:text-4xl"},Se={class:"container flex justify-between items-end sm:gap-6"},ve=n("img",{"aria-hidden":"false",draggable:"false",loading:"eager",src:_,alt:"Liked songs",class:"shadow-3xl order-2 sm:order-1 w-28 h-28 sm:w-max sm:h-max",srcset:fe,sizes:"(min-width: 1280px) 232px, 192px"},null,-1),ke={class:"text-white main-header-content flex flex-col sm:grow gap-1 sm:gap-4 justify-center items-start order-1"},xe={class:"text-xs sm:text-base"},_e={class:"text-xl sm:text-4xl lg:text-7xl font-circular-black text-left"},Pe={class:"text-xs sm:text-base"},Ce={class:"font-circular-regular"},Ie={class:"flex-1 py-5 bg-zinc-900 bg-opacity-30 font-circular-thin bg-gradient-2"},De={class:"flex justify-between mx-4 sm:mx-8"},je={type:"button",class:"md:hover:scale-105"},Oe={key:0,class:"flex items-center gap-2 text-gray-300 hover:text-white"},Be={class:"mx-4 sm:mx-8 mt-4"},Ve={id:"playlist",class:"w-full text-left"},Ae={class:"border-b border-zinc-400 border-opacity-10 secondary-text"},Le=n("th",{class:"hidden sm:table-cell px-4 sm:w-8 font-light"},"#",-1),qe={class:"sm:w-2/5 p-1 font-light"},Ee={class:"hidden sm:table-cell w-1/3 font-light"},$e={class:"hidden sm:table-cell w-1/5 font-light"},Re=n("th",{class:"hidden sm:table-cell w-2/12 font-light"},[n("div",{class:"flex justify-end mr-2 font-light"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 secondary-text","aria-label":"duration"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})])])],-1),He={class:"text-white"},Fe=n("tr",{class:"h-2"},null,-1),Ne={colspan:"5"},Ue={key:0};function ze(e,t,s,i,a,o){const r=w("InputSwitch"),d=w("SongItem"),L=U("icon");return c(),h("main",be,[n("section",ye,[n("h1",we,l(o.greeting()),1),n("div",Se,[ve,n("div",ke,[n("h4",xe,l(e.$t("home.playlist")),1),n("h1",_e,l(e.$t("home.liked")),1),n("p",Pe,[n("span",Ce,l(e.username)+" º "+l(s.songsCount)+" "+l(e.$t("home.songs")),1)])])])]),n("section",Ie,[n("div",De,[n("button",je,[z(n("i",{class:"text-[#1ed760] text-5xl bg-black rounded-full",onClick:t[0]||(t[0]=S(u=>e.playerHasSong?e.toggleAudio():e.play(this.songs[0]),["prevent"]))},null,512),[[L,e.playing?"pause-circle":"play-circle",void 0,{button:!0}]])]),s.songs.length>0?(c(),h("div",Oe,[n("span",{class:"font-circular-black hover:cursor-pointer",onClick:t[1]||(t[1]=S(u=>a.downloadSongs=!a.downloadSongs,["prevent"]))},l(e.$t("home.offlineMode")),1),f(r,{modelValue:a.downloadSongs,"onUpdate:modelValue":t[2]||(t[2]=u=>a.downloadSongs=u),id:"offlineSwitch"},null,8,["modelValue"])])):C("",!0)]),n("div",Be,[n("table",Ve,[n("thead",Ae,[n("tr",null,[Le,n("th",qe,l(e.$t("home.title")),1),n("th",Ee,l(e.$t("home.genre")),1),n("th",$e,l(e.$t("home.comments")),1),Re])]),n("tbody",He,[Fe,(c(!0),h(T,null,M(s.songs,(u,q)=>(c(),V(d,{key:u.docID,song:u,index:q,"is-selected":o.isSongSelected(u.docID),onClick:E=>o.selectSong(u.docID),onDoubleClick:E=>o.handleDblClick(u)},null,8,["song","index","is-selected","onClick","onDoubleClick"]))),128))]),n("tfoot",null,[n("tr",null,[n("td",Ne,[s.songs.length===0?(c(),h("span",Ue,l(e.$t("home.emptyPlaylist")),1)):C("",!0)])])])])])])])}const Te=P(pe,[["render",ze]]),Me={name:"Home",components:{AppPlaylist:Te},data(){return{songs:[],maxPerPage:10,pendingReq:!1,songsCount:0}},computed:{...b(B,["userLoggedIn"])},async created(){await this.getSongs(),await this.getSongsCount(),window.addEventListener("scroll",this.handleScroll)},methods:{async getSongs(){if(this.pendingReq||!this.userLoggedIn)return;this.pendingReq=!0;let e;if(this.songs.length){const t=await k.doc(this.songs[this.songs.length-1].docID).get();e=await k.where("uid","==",x.currentUser.uid).orderBy("modified_name").startAfter(t).limit(this.maxPerPage).get(),e.forEach(s=>{this.songs.push({docID:s.id,...s.data()})})}else e=await k.where("uid","==",x.currentUser.uid).orderBy("modified_name").limit(this.maxPerPage).get(),e.forEach(t=>{this.songs.push({docID:t.id,...t.data()})});this.pendingReq=!1},async getSongsCount(){this.userLoggedIn&&await W.doc(x.currentUser.uid).get().then(e=>{this.songsCount=e.data().songsCount??0}).catch(()=>{this.songsCount=0,console.error("Error getting user's songs count ")})},handleScroll(){const{scrollTop:e,offsetHeight:t}=document.documentElement,{innerHeight:s}=window;Math.ceil(e)+s>=t&&this.getSongs()}},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}};function We(e,t,s,i,a,o){const r=w("AppPlaylist");return c(),V(r,{songs:a.songs,songsCount:a.songsCount},null,8,["songs","songsCount"])}const Ge=P(Me,[["render",We]]);export{Ge as default};
