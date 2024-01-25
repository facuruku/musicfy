import{E as S,A as L,C as V,R as T,a as A,h as C,_ as v,r as d,o as i,c,n as _,t as r,p as R,d as o,e as h,b as e,g as w,F as $,I as M,D as g,q,w as F,v as P}from"./index-2a77d9da.js";const E={name:"LoginForm",emits:["login-success"],components:{ErrorMessage:S,VeeField:L,VeeForm:V,RouterLink:T},data(){return{tab:"login",loginSchema:{email:"required|email",password:"required"},togglePassword:!1,login_in_submission:!1,login_show_alert:!1,login_alert_variant:"bg-gradient-to-r from-zinc-900 from-0% to-[#5038a0] to-30%",login_alert_msg:"Please wait! Logging in."}},methods:{...A(C,["authenticate"]),async login(t){this.login_in_submission=!0,this.login_show_alert=!0,this.login_alert_variant="bg-gradient-to-r from-zinc-900 from-0% to-[#5038a0] to-30%",this.login_alert_msg="Please wait! Logging in.";try{await this.authenticate(t),this.$refs.loginForm.resetForm(),this.login_show_alert=!1,this.login_in_submission=!1,this.$emit("login-success")}catch{this.login_in_submission=!1,this.login_alert_variant="bg-red-500",this.login_alert_msg="User doesn't exist or password is incorrect."}}}},B={class:"mb-3"},U=e("label",{for:"email",class:"inline-block mb-2"},"Email",-1),D={class:"mb-3"},I={for:"password",class:"inline-block mb-2"},z={class:"flex items-center"},N=["type","placeholder"],O=["disabled"],j={key:0,class:"fa-solid fa-spinner fa-spin"},G={key:1},Y={class:"text-center underline"};function H(t,n,y,x,s,u){const a=d("VeeField"),l=d("ErrorMessage"),m=d("RouterLink"),k=d("VeeForm");return i(),c($,null,[s.login_show_alert?(i(),c("div",{key:0,class:_(["text-black text-center font-bold p-4 rounded mb-4",s.login_alert_variant])},r(s.login_alert_msg),3)):R("",!0),o(k,{class:"flex flex-col gap-2","validation-schema":s.loginSchema,onSubmit:u.login,ref:"loginForm"},{default:h(()=>[e("div",B,[U,o(a,{id:"email",name:"email",type:"email",class:"block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded-lg",placeholder:t.$t("auth.form.emailPlaceholder"),autocomplete:"email"},null,8,["placeholder"]),o(l,{class:"text-red-600 block",name:"email"})]),e("div",D,[e("label",I,r(t.$t("auth.form.passwordLabel")),1),o(a,{name:"password",bails:!1},{default:h(({field:p,errors:b})=>[e("div",z,[e("input",w(p,{type:s.togglePassword?"text":"password",class:"block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded-lg",placeholder:t.$t("auth.form.passwordLabel"),autocomplete:"current-password"}),null,16,N),e("i",{onClick:n[0]||(n[0]=f=>s.togglePassword=!s.togglePassword),class:_(["absolute -right-0 mr-12 p-3 hover:cursor-pointer hover:scale-110",{"fa-regular fa-eye-slash":s.togglePassword,"fa-regular fa-eye":!s.togglePassword}])},null,2)]),o(l,w(b,{class:"text-red-600 block",name:"password"}),null,16)]),_:1})]),e("button",{type:"submit",class:"block w-2/5 self-center bg-[#1ed760] text-black font-bold py-2 px-3 mb-3 rounded-full transition hover:scale-105",disabled:s.login_in_submission},[s.login_in_submission?(i(),c("i",j)):(i(),c("span",G,r(t.$t("auth.button.login")),1))],8,O),e("div",Y,[o(m,{to:{name:"resetPassword"}},{default:h(()=>[e("span",null,r(t.$t("auth.button.forgotPassword")),1)]),_:1})])]),_:1},8,["validation-schema","onSubmit"])],64)}const J=v(E,[["render",H]]),K={name:"RegisterForm",emits:["register-success"],components:{I18nT:M,ErrorMessage:S,VeeField:L,VeeForm:V},data(){return{tab:"login",registrationSchema:{name:"required|min:3|max:60|alpha_spaces",email:"required|email|min:3|max:100",phone:"digits:9",birthdate:"required|minAge:14",password:"required|min:8|max:12|excluded:password",confirmPassword:"passwords_missmatch:@password",country:"required|country_excluded:Antarctica",tos:"tos"},togglePassword:!1,toggleConfirmPassword:!1,userData:{country:"Spain"},reg_in_submission:!1,reg_show_alert:!1,reg_alert_variant:"",reg_alert_msg:"",reg_initial_msg:"Please wait! Your account is being created.",reg_error_msg:"Something went wrong. Please try again later.",reg_progress_variant:"bg-gradient-to-r from-zinc-900 from-0% to-[#5038a0] to-30%",reg_error_variant:"bg-red-500",reg_success_variant:"bg-[#1ed760]"}},computed:{maxBirthdate(){return new Date().toISOString().slice(0,10)}},methods:{async register(t){this.initRegisterAlert();try{await this.createUser(t)}catch{this.reg_in_submission=!1,this.reg_alert_variant=this.reg_error_variant,this.reg_alert_msg=this.reg_error_msg;return}this.$refs.registerForm.resetForm(),this.reg_show_alert=!0,this.reg_in_submission=!1,this.reg_alert_variant=this.reg_success_variant,this.reg_alert_msg="Account created successfully! Please check you email to verify your account.",this.$emit("register-success")},...A(C,{createUser:"register"}),initRegisterAlert(){this.reg_show_alert=!0,this.reg_in_submission=!0,this.reg_alert_variant=this.reg_progress_variant,this.reg_alert_msg=this.reg_initial_msg}}},Q={class:""},W={class:"select-none group"},X=e("sup",null,"*",-1),Z={class:"invisible group-hover:visible"},ee={class:""},se={class:"select-none group"},te=e("sup",null,"*",-1),oe={class:"invisible group-hover:visible"},re={class:""},ne={class:"select-none"},ae={class:""},ie={class:"select-none group"},le=e("sup",null,"*",-1),ce={class:"invisible group-hover:visible"},de={class:""},ue={class:"select-none group"},he=e("sup",null,"*",-1),me={class:"invisible group-hover:visible"},_e={class:"flex items-center"},ge=["placeholder","type"],pe={class:""},be={class:"select-none group"},fe=e("sup",null,"*",-1),we={class:"invisible group-hover:visible"},ve={class:"flex items-center"},ye=["type","placeholder"],xe={class:""},ke={class:"select-none group"},$e=e("sup",null,"*",-1),Pe={class:"invisible group-hover:visible"},Fe=e("option",{value:"Argentina"},"Argentina",-1),Se=e("option",{value:"United States"},"United States",-1),Le=e("option",{value:"Spain"},"Spain",-1),Ve=e("option",{value:"Germany"},"Germany",-1),Ae=e("option",{value:"Antarctica"},"Antarctica",-1),Ce=e("option",{value:"Other"},"Other",-1),Re={class:"mb-3 pl-6"},Te={class:"hover:underline",href:"https://www.google.es/search?q=terms+of+service",target:"_blank"},Me=["disabled"],qe={key:0,class:"fa-solid fa-spinner fa-spin"},Ee={key:1};function Be(t,n,y,x,s,u){const a=d("VeeField"),l=d("ErrorMessage"),m=d("I18nT"),k=d("VeeForm");return i(),c($,null,[s.reg_show_alert?(i(),c("div",{key:0,class:_(["text-black text-center font-bold p-4 rounded mb-4",s.reg_alert_variant])},r(s.reg_alert_msg),3)):R("",!0),o(k,{class:"flex flex-col gap-4","validation-schema":s.registrationSchema,onSubmit:u.register,"initial-values":s.userData,ref:"registerForm"},{default:h(()=>[e("div",Q,[e("label",W,[g(r(t.$t("auth.form.nameLabel"))+" ",1),X,e("sup",Z,r(t.$t("auth.form.mandatoryTooltip")),1)]),o(a,{id:"nameField",name:"name",type:"text",class:"block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded",placeholder:t.$t("auth.form.namePlaceholder")},null,8,["placeholder"]),o(l,{class:"text-red-600",name:"name"})]),e("div",ee,[e("label",se,[g("Email "),te,e("sup",oe,r(t.$t("auth.form.mandatoryTooltip")),1)]),o(a,{name:"email",type:"email",class:"block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded",placeholder:t.$t("auth.form.emailPlaceholder")},null,8,["placeholder"]),o(l,{class:"text-red-600",name:"email"})]),e("div",re,[e("label",ne,r(t.$t("auth.form.phoneLabel")),1),o(a,{name:"phone",type:"number",class:"block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded",placeholder:t.$t("auth.form.phonePlaceholder")},null,8,["placeholder"]),o(l,{class:"text-red-600",name:"phone"})]),e("div",ae,[e("label",ie,[g(r(t.$t("auth.form.birthdateLabel"))+" ",1),le,e("sup",ce,r(t.$t("auth.form.mandatoryTooltip")),1)]),o(a,{name:"birthdate",type:"date",min:"1900-01-01",max:u.maxBirthdate,class:"block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"},null,8,["max"]),o(l,{class:"text-red-600",name:"birthdate"})]),e("div",de,[e("label",ue,[g(r(t.$t("auth.form.passwordLabel"))+" ",1),he,e("sup",me,r(t.$t("auth.form.mandatoryTooltip")),1)]),o(a,{name:"password",bails:!1},{default:h(({field:p,errors:b})=>[e("div",_e,[e("input",w(p,{placeholder:t.$t("auth.form.passwordPlaceholder"),type:s.togglePassword?"text":"password",class:"block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"}),null,16,ge),e("i",{onClick:n[0]||(n[0]=f=>s.togglePassword=!s.togglePassword),class:_(["absolute -right-0 mr-12 p-3 hover:cursor-pointer hover:scale-110",{"fa-regular fa-eye-slash":!s.togglePassword,"fa-regular fa-eye":s.togglePassword}])},null,2)]),(i(!0),c($,null,q(b,f=>(i(),c("div",{class:"text-red-600",key:f},r(f),1))),128))]),_:1})]),e("div",pe,[e("label",be,[g(r(t.$t("auth.form.confirmPasswordLabel"))+" ",1),fe,e("sup",we,r(t.$t("auth.form.mandatoryTooltip")),1)]),o(a,{name:"confirmPassword",bails:!1},{default:h(({field:p})=>[e("div",ve,[e("input",w(p,{type:s.toggleConfirmPassword?"text":"password",class:"block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded",placeholder:t.$t("auth.form.confirmPasswordPlaceholder")}),null,16,ye),e("i",{onClick:n[1]||(n[1]=b=>s.toggleConfirmPassword=!s.toggleConfirmPassword),class:_(["absolute -right-0 mr-12 p-3 hover:cursor-pointer hover:scale-110",{"fa-regular fa-eye-slash":!s.toggleConfirmPassword,"fa-regular fa-eye":s.toggleConfirmPassword}])},null,2)])]),_:1}),o(l,{class:"text-red-600",name:"confirmPassword"})]),e("div",xe,[e("label",ke,[g(r(t.$t("auth.form.countryLabel"))+" ",1),$e,e("sup",Pe,r(t.$t("auth.form.mandatoryTooltip")),1)]),o(a,{label:"hola",as:"select",name:"country",class:"block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"},{default:h(()=>[Fe,Se,Le,Ve,Ae,Ce]),_:1}),o(l,{class:"text-red-600",name:"country"})]),e("div",Re,[o(a,{name:"tos",id:"tos",type:"checkbox",value:"true",class:"w-4 h-4 float-left -ml-6 mt-1 rounded"}),o(m,{keypath:"auth.form.accept",tag:"label",for:"tos"},{default:h(()=>[e("a",Te,r(t.$t("auth.form.tos")),1)]),_:1}),o(l,{class:"text-red-600 block",name:"tos"})]),e("button",{type:"submit",class:"block self-center bg-[#1ed760] text-black font-bold py-2 px-3 rounded-full transition hover:scale-105",disabled:s.reg_in_submission},[s.reg_in_submission?(i(),c("i",qe)):(i(),c("span",Ee,r(t.$t("auth.button.register")),1))],8,Me)]),_:1},8,["validation-schema","onSubmit","initial-values"])],64)}const Ue=v(K,[["render",Be]]),De={name:"AuthModal",components:{LoginForm:J,RegisterForm:Ue},data(){return{tab:"login"}},methods:{handleLoginTab(){this.tab="login"},handleRegisterTab(){this.tab="register"},handleLoginSuccess(){this.$router.push({name:"home"})},handleRegisterSuccess(){this.$router.push({name:"registerSuccess"})}}},Ie={class:"grid justify-center items-center sm:p-2 h-full bg-gradient-2",id:"modal"},ze={class:"flex flex-col justify-center bg-black sm:rounded-lg w-96 h-full sm:h-auto text-left text-white py-10 px-12 md:shadow-lg shadow-white transform transition-all"},Ne={class:"text-2xl font-bold pb-4"},Oe={class:"flex flex-wrap mb-4 gap-4"},je={class:"flex-auto text-center"},Ge={class:"flex-auto text-center"};function Ye(t,n,y,x,s,u){const a=d("LoginForm"),l=d("RegisterForm");return i(),c("main",Ie,[e("div",ze,[e("p",Ne,r(t.$t("auth.account")),1),e("ul",Oe,[e("li",je,[e("button",{class:_(["w-full rounded-full p-2 transition font-bold border",{"text-black bg-[#1ed760]":s.tab==="login","hover:scale-105 hover:text-[#1ed760]":s.tab==="register"}]),onClick:n[0]||(n[0]=F(m=>u.handleLoginTab(),["prevent"]))},r(t.$t("auth.tab.login")),3)]),e("li",Ge,[e("button",{class:_(["w-full rounded-full border border-gray-300 p-2 transition font-bold",{"text-black bg-[#1ed760]":s.tab==="register","hover:scale-105 hover:text-[#1ed760]":s.tab==="login"}]),onClick:n[1]||(n[1]=F(m=>u.handleRegisterTab(),["prevent"]))},r(t.$t("auth.tab.register")),3)])]),s.tab==="login"?(i(),P(a,{key:0,onLoginSuccess:n[2]||(n[2]=m=>u.handleLoginSuccess())})):(i(),P(l,{key:1,onRegisterSuccess:n[3]||(n[3]=m=>u.handleRegisterSuccess())}))])])}const He=v(De,[["render",Ye]]),Je={name:"AuthView",components:{AuthModal:He}};function Ke(t,n,y,x,s,u){const a=d("AuthModal");return i(),P(a)}const We=v(Je,[["render",Ke]]);export{We as default};