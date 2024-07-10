(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-158a854d"],{"4c31":function(t,s,e){"use strict";var a=e("8336"),i=e("b0af"),r=e("99d9"),o=e("62ad"),l=e("169a"),n=e("ce7e"),c=e("132d"),u=e("0fd9"),d=e("b974"),h=e("2db4"),p=e("2fa4"),g=e("b73d"),v=function(){var t=this,s=t._self._c;return s(u["a"],{attrs:{justify:"end"}},[s(l["a"],{attrs:{scrollable:"","max-width":"700px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:i}){return[s(a["a"],t._g(t._b({staticClass:"teal",attrs:{small:"",block:"",dark:"",depressed:""},on:{click:function(s){return t.getUsers()}}},"v-btn",i,!1),e),[t._v("Edit"),s(c["a"],{attrs:{dark:"",right:""}},[t._v("mdi-pencil")])],1)]}}]),model:{value:t.dialog,callback:function(s){t.dialog=s},expression:"dialog"}},[s(i["a"],{attrs:{"max-width":"700",flat:""}},[s(r["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[t._v("Edit system user")]),s(n["a"]),s(r["c"],[s(u["a"],{attrs:{justify:"center",dense:"",align:"center"}},[s(o["a"],{attrs:{cols:"12"}},[s("fieldset",{staticClass:"px-5 pb-3"},[s("legend",[s(r["c"],{staticClass:"grey--text"},[t._v("Account Password")])],1),s(u["a"],[s(o["a"],{attrs:{cols:"12",md:"12",sm:"12"}},[s(a["a"],{attrs:{color:"primary",loading:t.loading,outlined:""},on:{click:function(s){return t.resetPassword()}}},[t._v("Reset Password")])],1)],1)],1)]),s(o["a"],{attrs:{cols:"12"}},[s("fieldset",{staticClass:"px-5 pb-3"},[s("legend",[s(r["c"],{staticClass:"grey--text"},[t._v("Account Status")])],1),s(u["a"],[s(o["a"],{attrs:{cols:"12",md:"6",sm:"6"}},[s(d["a"],{attrs:{items:t.role,rules:t.roleRules,label:"Role","prepend-icon":"mdi-shield-account"},model:{value:t.getRole,callback:function(s){t.getRole=s},expression:"getRole"}})],1),s(o["a"],{attrs:{cols:"12",md:"6",sm:"6"}},[s(g["a"],{attrs:{color:"red",inset:"",label:"Mark as a Deactivated User"},on:{change:function(s){return t.deactivateUser()}},model:{value:t.status,callback:function(s){t.status=s},expression:"status"}})],1)],1)],1)])],1)],1),s(n["a"]),s(r["a"],[s(p["a"]),s(a["a"],{attrs:{outlined:"",color:"grey"},on:{click:function(s){t.dialog=!1}}},[t._v("Cancel")]),s(a["a"],{attrs:{loading:t.loading,disabled:!t.getRole||!t.showStatus,color:"primary",depressed:""},on:{click:function(s){return t.updateUser()}}},[t._v("Save "),s(c["a"],{attrs:{left:""}},[t._v("mdi-content-save")])],1)],1),s(h["a"],{attrs:{timeout:3e3,absolute:"",bottom:"",left:"",color:"red"},model:{value:t.statusUpdateUnsuccessAlert,callback:function(s){t.statusUpdateUnsuccessAlert=s},expression:"statusUpdateUnsuccessAlert"}},[t._v("Account update failed")]),s(h["a"],{attrs:{timeout:3e3,absolute:"",bottom:"",left:"",color:"red"},model:{value:t.passwordResetUnsuccessAlert,callback:function(s){t.passwordResetUnsuccessAlert=s},expression:"passwordResetUnsuccessAlert"}},[t._v("Password reset Unsuccessful")]),s(h["a"],{attrs:{timeout:3e3,absolute:"",bottom:"",left:"",color:"green"},model:{value:t.passwordResetSuccessAlert,callback:function(s){t.passwordResetSuccessAlert=s},expression:"passwordResetSuccessAlert"}},[t._v("Password reset Successful")])],1)],1)],1)},m=[],f=e("67b0"),b={props:["users"],data(){return{loading:!1,dialog:!1,getRole:"",status:null,showStatus:"",userPassword:"",roleRules:[t=>!!t||"Role is required"],role:["Standard","Administrator","Guess"],passwordResetSuccessAlert:!1,statusUpdateUnsuccessAlert:!1,passwordResetUnsuccessAlert:!1}},methods:{getUsers(){this.axios.patch(this.$apiUrl+"/api/v1.0/UserManagement/users/"+this.users.userID).then(t=>{"Active"==t.data.user.status?(this.status=!1,this.showStatus="Active"):(this.status=!0,this.showStatus="Deactivate"),this.getRole=t.data.user.privilege})},updateUser(){this.loading=!0,this.axios.patch(this.$apiUrl+"/api/v1.0/UserManagement/users/"+this.users.userID,{privilege:this.getRole,status:this.showStatus}).then(t=>{1==t.data.success?(this.loading=!1,this.successAlert(),this.dialog=!1):(this.loading=!1,this.statusUpdateUnsuccessAlert=!0)}).catch(t=>{this.loading=!1,this.statusUpdateUnsuccessAlert=!0,console.log(t.data)})},deactivateUser(){0==this.status?this.showStatus="Active":1==this.status&&(this.showStatus="Deactivate")},resetPassword(){this.loading=!0,this.userPassword=this.genPassword(),this.axios.patch(this.$apiUrl+"/api/v1.0/UserManagement/users/"+this.users.userID+"/restPassword",{password:this.userPassword,password_confirmation:this.userPassword}).then(t=>{1==t.data.success?(this.loading=!1,this.passwordResetSuccessAlert=!0,this.dialog=!1,this.sendPassword(this.users.employee.email,this.userPassword),console.log(this.userPassword)):(this.loading=!1,this.passwordResetUnsuccessAlert=!0)}).catch(t=>{this.loading=!1,this.passwordResetUnsuccessAlert=!0,console.log(t.data)})},genPassword(){for(var t="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=12,e="",a=0;a<=s;a++){var i=Math.floor(Math.random()*t.length);e+=t.substring(i,i+1)}return e},sendPassword(t,s){Object(f["a"])("https://smtpjs.com/v3/smtp.js").then(()=>{window.Email&&window.Email.send({Host:"smtp.gmail.com",Username:this.$emailAddress,Password:this.$emailPassword,To:t,From:this.$emailAddress,Subject:"Password Reset",Body:`Hello!,<br>You got a new message from <b>ICT Academy</b>.<br><br>Your account password reset successfully. Please use the given password to log into the system. <br><br><b>User name:</b> ${t}<br><b>Password:</b> ${s}<br><br><i>Please change the password as soon as you log in to the system.</i><br><br>Best wishes,<br>ICT Academy - Hakmana<br>${this.$tpNo}`}).then(t=>console.log(t))}).catch(()=>{})},changeStatus(){this.statusUpdateSuccessAlert=!0},successAlert(){this.$emit("success",!0)}}},w=b,A=(e("fb59"),e("2877")),y=Object(A["a"])(w,v,m,!1,null,"91717578",null);s["a"]=y.exports},5311:function(t,s,e){"use strict";e("14d9");var a=e("5607"),i=e("2b0e");s["a"]=i["a"].extend({name:"rippleable",directives:{ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"9d01":function(t,s,e){},a0e1:function(t,s,e){},b73d:function(t,s,e){"use strict";e("ec29"),e("9d01");var a=e("fe09"),i=e("c37a"),r=e("c3f0"),o=e("0789"),l=e("490a"),n=e("80d2");s["a"]=a["a"].extend({name:"v-switch",directives:{Touch:r["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:t,...s}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...s}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(o["c"],{},[!1===this.loading?null:Object(n["s"])(this,"progress")||this.$createElement(l["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===n["x"].left&&this.isActive||t.keyCode===n["x"].right&&!this.isActive)&&this.onChange()}}})},d77c:function(t,s,e){"use strict";var a=e("8336"),i=e("b0af"),r=e("99d9"),o=e("a523"),l=e("169a"),n=e("132d"),c=e("0fd9"),u=e("2fa4"),d=function(){var t=this,s=t._self._c;return s(c["a"],{attrs:{justify:"start"}},[s(l["a"],{attrs:{persistent:"","max-width":"400px"},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:i}){return[s(a["a"],t._g(t._b({staticClass:"error",attrs:{fab:"",dark:"","x-small":"",depressed:""}},"v-btn",i,!1),e),[s(n["a"],{attrs:{dark:""}},[t._v("mdi-close")])],1)]}}]),model:{value:t.dialog,callback:function(s){t.dialog=s},expression:"dialog"}},[s(i["a"],[s(o["a"],{staticClass:"text-center"},[s(r["d"],[s(c["a"],{attrs:{justify:"center"}},[s(n["a"],{attrs:{size:"100",color:"error"}},[t._v("mdi-help-circle-outline")])],1)],1),s("span",{staticClass:"text-h6 text-center"},[t._v("Do you really want to remove "),s("br"),t._v(" "),s("strong",[t._v('"'+t._s(t.users.employee.name)+'"')])])],1),s(r["a"],[s(u["a"]),s(a["a"],{attrs:{color:"grey",outlined:""},on:{click:function(s){t.dialog=!1}}},[t._v("Cancel")]),s(a["a"],{attrs:{loading:t.loading,color:"error",depressed:""},on:{click:function(s){return t.removeUser()}}},[t._v("Remove")])],1)],1)],1)],1)},h=[],p={props:["users"],data:()=>({dialog:!1,loading:!1}),methods:{removeUser(){this.loading=!0,this.axios.delete(this.$apiUrl+"/api/v1.0/UserManagement/users/"+this.users.userID).then(t=>{1==t.data.success?(this.successAlert(),this.loading=!1,this.dialog=!1):this.failedAlert()}).catch(t=>{this.loading=!1,this.failedAlert(),console.log(t.data)})},successAlert(){this.$emit("success",!0)},failedAlert(){this.$emit("failed",!0)}}},g=p,v=e("2877"),m=Object(v["a"])(g,d,h,!1,null,null,null);s["a"]=m.exports},ec29:function(t,s,e){},fb59:function(t,s,e){"use strict";e("a0e1")},fe09:function(t,s,e){"use strict";e.d(s,"b",(function(){return l}));e("14d9");var a=e("c37a"),i=e("5311"),r=e("8547"),o=e("58df");function l(t){t.preventDefault()}s["a"]=Object(o["a"])(a["a"],i["a"],r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,s=this.internalValue;return this.isMultiple?!!Array.isArray(s)&&s.some(s=>this.valueComparator(s,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,s):Boolean(s):this.valueComparator(s,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=a["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:l},t):t},genInput(t,s){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},s),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:l},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let s=this.internalValue;if(this.isMultiple){Array.isArray(s)||(s=[]);const e=s.length;s=s.filter(s=>!this.valueComparator(s,t)),s.length===e&&s.push(t)}else s=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(s,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(s,t)?null:t:!s;this.validate(!0,s),this.internalValue=s,this.hasColor=s},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})}}]);
//# sourceMappingURL=chunk-158a854d.3fe61992.js.map