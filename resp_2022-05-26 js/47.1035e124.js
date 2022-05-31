"use strict";(self["webpackChunkhispanocash"]=self["webpackChunkhispanocash"]||[]).push([[47],{5047:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid",attrs:{id:"hc_home"}},[s("section",{staticClass:"row d-flex p-0",attrs:{id:"section1"}},[s("img",{staticClass:"img-fluid",attrs:{src:t.img_bg_green}}),s("div",{staticClass:"container-fluid position-absolute w-100",attrs:{id:"s1_target"}},[s("div",{staticClass:"row h-100"},[s("div",{staticClass:"col-12 d-flex justify-content-center align-items-end h-100 p-3 p-lg-4 p-xl-5"},[s("div",{staticClass:"text-center pb-0 pb-xl-5"},[s("div",{staticClass:"row py-0 py-md-4 d-none d-sm-flex"},[s("div",{staticClass:"col-12 d-flex justify-content-center align-items-end"},[s("div",{staticStyle:{"max-width":"120px"}},[s("img",{staticClass:"img-fluid",attrs:{src:t.gif_simb_white}})])])]),t._m(0)])])])])]),s("section",{staticClass:"row bg-light d-flex justify-content-center py-5",attrs:{id:"section2"}},[t._m(1),t._m(2),s("div",{staticClass:"col-11 col-md-7 col-lg-8 text-center mb-5"},[s("div",{staticClass:"d-inline-block position-absolute h-100 cursor-pointer",staticStyle:{padding:"0px 10px",right:"20px"},on:{click:function(e){return t.changeType()}}},[s("div",{staticClass:"d-flex justify-content-end align-items-center w-100 h-100"},[s("span",{staticClass:"hc--description-sm"},[s("b-icon-eye",{directives:[{name:"show",rawName:"v-show",value:"password"==t.type,expression:"type == 'password'"}],staticStyle:{color:"#28a745"},attrs:{"font-scale":"1.2"}}),s("b-icon-eye-slash",{directives:[{name:"show",rawName:"v-show",value:"text"==t.type,expression:"type == 'text'"}],staticStyle:{color:"#28a745"},attrs:{"font-scale":"1.2"}})],1)])]),"checkbox"===t.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input full-width",staticStyle:{"padding-right":"30px"},attrs:{name:"password",type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{change:function(e){var s=t.password,a=e.target,i=!!a.checked;if(Array.isArray(s)){var n=null,r=t._i(s,n);a.checked?r<0&&(t.password=s.concat([n])):r>-1&&(t.password=s.slice(0,r).concat(s.slice(r+1)))}else t.password=i}}}):"radio"===t.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input full-width",staticStyle:{"padding-right":"30px"},attrs:{name:"password",type:"radio"},domProps:{checked:t._q(t.password,null)},on:{change:function(e){t.password=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input full-width",staticStyle:{"padding-right":"30px"},attrs:{name:"password",type:t.type},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"col-12 d-flex justify-content-center py-3"},[s("button",{staticClass:"btn btn-success",attrs:{id:"btn_verify"},on:{click:function(e){return t.verifyToken()}}},[t._v(" ENVIAR ")])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row d-flex justify-content-center align-items-end mb-1 mb-sm-1 mb-md-3"},[s("div",{staticClass:"col-12"},[s("span",{staticClass:"hc--title poppins-regular text-white"},[t._v(" Pago de "),s("span",{staticClass:"poppins-bold"},[t._v("servicios")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 text-center mb-4"},[s("span",{staticClass:"hc--description poppins-bold"},[t._v(" Recupera tu contraseña ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 text-center mb-4"},[s("span",{staticClass:"hc--description-sm"},[t._v(" Introduce a continuación una nueva contraseña. ")])])}],n=s(615),r=s(7746),o=s(5496),c=s(579),l=s(4029),d=s.n(l),p=s(5651),u={name:"hc_home",data(){return{img_bg_green:r,gif_simb_white:c,s2_img1:o,password:null,type:"password"}},computed:{current_route_name(){return this.$route.name},current_path(){return this.$route.fullPath}},methods:{changeType(){this.type="text"==this.type?"password":"text"},redirect(t){this.current_route_name!==t&&(window.scrollTo(0,0),this.$router.push({name:t}))},verifyToken(){n.Z.commit("setLoad",{show:!0,title:"Cargando",subtitle:"Verificando Token"});let t={token:this.token,password:this.password};fetch(`${p.server[p.env].api}/auth/reset-password`,{method:"POST",headers:{Accept:"application/json, text/plain, /","Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).catch((t=>{console.error("Error:",t)})).then((async t=>{let e=null,s="success";null===t?e="La contraseña ha sido cambiada":void 0!==t["detail"]&&(s="danger",void 0!==t["detail"]&&"field required"===t["detail"]["0"].msg&&(e="Error en la peticion"),void 0!==t["detail"]&&"value is not a valid email address"===t["detail"]["0"].msg&&(e="Error en la peticion")),n.Z.commit("setLoad",{show:!1}),n.Z.commit("setAlert",{open:!0,message:e,variant:s})}))}},created(){d()(window).resize((function(){let t=d()("#section1").height();d()("#s1_target").css("height",t)})),this.token=this.$route.params.token},mounted(){for(let t=0;t<2e3;t+=100)setTimeout((function(){d()(window).trigger("resize")}),t)}},m=u,h=s(1001),w=(0,h.Z)(m,a,i,!1,null,"1a6b79de",null),v=w.exports},5496:function(t,e,s){t.exports=s.p+"img/logo-pabs.288e40ed.png"}}]);
//# sourceMappingURL=47.1035e124.js.map