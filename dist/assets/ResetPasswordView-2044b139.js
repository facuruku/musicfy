import{_ as f,E as p,A as h,C as w,a as _,h as b,r as l,o as r,c as a,b as s,t,v as x,e as P,d as n,D as y,p as c}from"./index-4c8252de.js";const g={name:"ResetPwdView",components:{ErrorMessage:p,VeeField:h,VeeForm:w},data(){return{resetPwdSchema:{email:"required|email"},emailSent:!1,error:!1}},methods:{..._(b,["resetPassword"]),async resetPwd(e){try{await this.resetPassword(e.email),this.emailSent=!0}catch{this.error=!0}}}},V={class:"grid place-content-center font-circular-black"},k={class:"flex flex-col gap-6 items-center justify-center text-center w-full"},S={class:"text-5xl"},F={key:0,class:"w-[90dvw] sm:w-[30rem] secondary-text font-circular-thin"},v={key:1,class:"w-full sm:w-[30rem] secondary-text font-circular-thin"},$={class:"flex flex-col gap-2 items-start"},E={for:"emailField"},B={key:0,class:"text-red-500"},C=s("i",{class:"fa-solid fa-circle-exclamation"},null,-1),M={type:"submit",class:"block w-2/5 self-center bg-[#1ed760] text-black font-bold py-2 px-3 mb-3 rounded-full transition hover:scale-105"};function N(e,A,D,R,o,i){const d=l("VeeField"),m=l("ErrorMessage"),u=l("VeeForm");return r(),a("main",V,[s("div",k,[s("h1",S,t(e.$t("resetPassword.title")),1),o.emailSent?(r(),a("p",v,t(e.$t("resetPassword.emailSentMsg")),1)):(r(),a("p",F,t(e.$t("resetPassword.description")),1)),o.emailSent?c("",!0):(r(),x(u,{key:2,class:"flex flex-col items-center gap-6","validation-schema":o.resetPwdSchema,onSubmit:i.resetPwd},{default:P(()=>[s("div",$,[s("label",E,t(e.$t("resetPassword.form.emailLabel")),1),n(d,{id:"emailField",name:"email",type:"email",class:"w-[90dvw] sm:w-[30rem] py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded-lg",placeholder:e.$t("auth.form.emailPlaceholder"),autocomplete:"email"},null,8,["placeholder"]),n(m,{class:"text-red-600 block",name:"email"})]),o.error?(r(),a("p",B,[C,y(t(e.$t("resetPassword.form.error")),1)])):c("",!0),s("button",M,t(e.$t("resetPassword.form.button")),1)]),_:1},8,["validation-schema","onSubmit"]))])])}const q=f(g,[["render",N]]);export{q as default};