(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c8edc94"],{"889c":function(t,e,s){},"9e29":function(t,e,s){},b481:function(t,e,s){"use strict";s.r(e);var i=s("2bc5"),a=s("b0af"),r=s("99d9"),l=s("a523"),n=s("8fea"),o=s("132d"),h=s("2db4"),c=s("2fa4"),u=s("8654"),d=function(){var t=this,e=t._self._c;return e("div",[e(i["a"],{attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(o["a"],[t._v("mdi-chevron-right")])]},proxy:!0}])}),e(l["a"],[e(h["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:t.unsuccessAlert,callback:function(e){t.unsuccessAlert=e},expression:"unsuccessAlert"}},[e(o["a"],{attrs:{left:""}},[t._v("mdi-alert-outline")]),t._v(" Branch delete "),e("strong",[t._v("failed")])],1),e(h["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:t.successAlert,callback:function(e){t.successAlert=e},expression:"successAlert"}},[e(o["a"],{attrs:{left:""}},[t._v("mdi-check")]),t._v("Branch delete "),e("strong",[t._v("successful")])],1),e(h["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:t.unsuccessAlertUpdate,callback:function(e){t.unsuccessAlertUpdate=e},expression:"unsuccessAlertUpdate"}},[e(o["a"],{attrs:{left:""}},[t._v("mdi-alert-outline")]),t._v("Branch update "),e("strong",[t._v("failed")])],1),e(h["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:t.successAlertUpdate,callback:function(e){t.successAlertUpdate=e},expression:"successAlertUpdate"}},[e(o["a"],{attrs:{left:""}},[t._v("mdi-check")]),t._v("Branch update "),e("strong",[t._v("successful")])],1),[e(a["a"],{attrs:{flat:""}},[e(r["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[t._v("Branch Details")]),e(r["d"],[e(c["a"]),e(u["a"],{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),[e("div",[e(n["a"],{attrs:{headers:t.headers,items:t.branches,search:t.search},scopedSlots:t._u([{key:"item.actions",fn:function({item:s}){return[e(r["a"],[e("app-EditBranch",{attrs:{branchDetails:s},on:{success:function(e){return t.updateSuccessAlert(e)},failed:function(e){return t.updateFaileAlert(e)}}}),t._v(" "),e(c["a"]),e("app-DeleteBranch",{staticClass:"ml-5",attrs:{branchDetails:s},on:{success:function(e){return t.deleteAlert(e)},failed:function(e){return t.faileAlert(e)}}})],1)]}}],null,!0)})],1)]],2)]],2)],1)},m=[],p=s("8336"),b=s("169a"),v=s("0fd9"),f=function(){var t=this,e=t._self._c;return e(v["a"],{attrs:{justify:"end"}},[e(b["a"],{attrs:{persistent:"","max-width":"400px"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:i}){return[e(p["a"],t._g(t._b({staticClass:"error",attrs:{fab:"",dark:"","x-small":"",depressed:""}},"v-btn",i,!1),s),[e(o["a"],{attrs:{dark:""}},[t._v("mdi-delete")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(a["a"],[e(l["a"],{staticClass:"text-center"},[e(r["d"],[e(v["a"],{attrs:{justify:"center"}},[e(o["a"],{attrs:{size:"100",color:"error"}},[t._v("mdi-help-circle-outline")])],1)],1),e("span",{staticClass:"text-h6 text-center"},[t._v("Do you really want to delete "),e("br"),t._v(" "),e("strong",[t._v('"'+t._s(t.branchDetails.branchName)+'"')])])],1),e(r["a"],[e(c["a"]),e(p["a"],{attrs:{color:"grey",outlined:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),e(p["a"],{attrs:{loading:t.loading,color:"error",depressed:""},on:{click:function(e){return t.deleteBranch()}}},[t._v("Delete "),e(o["a"],{attrs:{right:""}},[t._v("mdi-delete")])],1)],1)],1)],1)],1)},g=[],k={props:["branchDetails"],data:()=>({dialog:!1,loading:!1}),methods:{deleteBranch(){this.loading=!0,this.axios.delete(this.$apiUrl+"/api/v1.0/BranchManagement/branches/"+this.branchDetails.branchID).then(t=>{1==t.data.success?(this.dialog=!1,this.successAlert(),this.loading=!1):this.failedAlert()}).catch(t=>{this.loading=!1,this.failedAlert(),console.log(t.data)})},successAlert(){this.$emit("success",!0)},failedAlert(){this.$emit("failed",!0)}}},y=k,_=s("2877"),x=Object(_["a"])(y,f,g,!1,null,null,null),C=x.exports,$=s("62ad"),S=s("ce7e"),w=s("4bd4"),A=s("ba0d"),T=function(){var t=this,e=t._self._c;return e(v["a"],{attrs:{justify:"end"}},[e(b["a"],{attrs:{scrollable:"","max-width":"700px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:i}){return[e(p["a"],t._g(t._b({staticClass:"teal",attrs:{small:"",dark:"",depressed:""},on:{click:function(e){return t.getBranch()}}},"v-btn",i,!1),s),[t._v("Edit"),e(o["a"],{attrs:{dark:"",right:""}},[t._v("mdi-pencil")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(a["a"],{attrs:{"max-width":"700",flat:""}},[e(r["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[t._v("Edit Branch")]),e(S["a"]),e(r["c"],{staticStyle:{height:"200px"}},[e(w["a"],{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(v["a"],{staticStyle:{padding:"12px"}},[e($["a"],[e(v["a"],{attrs:{dense:""}},[e($["a"],{attrs:{cols:"12",md:"6",sm:"6"}},[e(u["a"],{attrs:{rules:t.nameRules,label:"Branch Name","prepend-icon":"mdi-sitemap",required:""},model:{value:t.branchName,callback:function(e){t.branchName=e},expression:"branchName"}})],1),e($["a"],{attrs:{cols:"12",md:"6",sm:"6"}},[e(u["a"],{attrs:{placeholder:"ex: 0714332332",maxlength:"10",rules:t.tpRules,label:"Telephone No.","prepend-icon":"mdi-phone-classic",required:""},model:{value:t.tp,callback:function(e){t.tp=e},expression:"tp"}})],1),e($["a"],{attrs:{cols:"12",md:"6",sm:"6"}},[e(u["a"],{attrs:{rules:t.addressRules,label:"Address","prepend-icon":"mdi-map-marker",required:""},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),e($["a"],{attrs:{cols:"12",md:"6",sm:"6"}},[e(A["a"],{staticClass:"mt-xl-5 mt-lg-5",attrs:{rules:t.hallRules,"prepend-icon":"mdi-home-group",label:"Hall Count","thumb-label":"always",min:"1",max:"10",ticks:"always","tick-size":"4"},model:{value:t.halls,callback:function(e){t.halls=e},expression:"halls"}})],1)],1)],1)],1)],1)],1),e(S["a"]),e(r["a"],[e(c["a"]),e(p["a"],{attrs:{outlined:"",color:"grey"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),e(p["a"],{attrs:{loading:t.loading,disabled:!t.valid||!t.tp||!t.address||!t.halls,color:"primary",depressed:""},on:{click:function(e){t.updateBranch(),t.dialog=!1}}},[t._v("Save "),e(o["a"],{attrs:{left:""}},[t._v("mdi-content-save")])],1)],1)],1)],1)],1)},V=[],B={props:["branchDetails"],components:{},data(){return{dialog:!1,loading:!1,valid:!0,branchName:"",tp:"",address:"",halls:"",multiLine:!0,nameRules:[t=>!!t||"Name is required",t=>/^[a-zA-Z_ ]*$/.test(t)||"Must be text only",t=>t&&t.length>3||"Name must be greater than 3"],tpRules:[t=>!!t||"Telephone no. is required",t=>/^\d+$/.test(t)||"Must be a number",t=>t&&10==t.length||"Telephone no. must be 10"],addressRules:[t=>!!t||"Address is required",t=>t&&t.length>5||"Address must be greater than 5"],hallRules:[t=>!!t||"Hall is required",t=>/^\d+$/.test(t)||"Must be a number"]}},methods:{getBranch(){this.axios.get(this.$apiUrl+"/api/v1.0/BranchManagement/branches/"+this.branchDetails.branchID).then(t=>{this.branchName=t.data.branch.data[0].branchName,this.tp=t.data.branch.data[0].telNo,this.address=t.data.branch.data[0].address,this.halls=t.data.branch.data[0].noOfRooms})},Reset(){this.$refs.form.reset()},scrollToTop(){window.scrollTo(0,0)},updateBranch(){this.$refs.form.validate()&&(this.loading=!0,this.axios.patch(this.$apiUrl+"/api/v1.0/BranchManagement/branches/"+this.branchDetails.branchID,{branchName:this.branchName,telNo:this.tp,address:this.address,noOfRooms:this.halls}).then(t=>{1==t.data.success?(this.dialog=!1,this.successAlert(),this.loading=!1):this.failedAlert()}).catch(t=>{this.failedAlert(),console.log(t.data),this.loading=!1}))},successAlert(){this.$emit("success",!0)},failedAlert(){this.$emit("failed",!0)}}},D=B,N=(s("f33e"),Object(_["a"])(D,T,V,!1,null,"242554aa",null)),M=N.exports,F={components:{"app-DeleteBranch":C,"app-EditBranch":M},data(){return{menu:!1,search:"",headers:[{text:"BRANCH",align:"start",sortable:!1,value:"branchName"},{text:"TP",sortable:!1,value:"telNo"},{text:"ADDRESS",sortable:!0,value:"address"},{text:"HALLS",sortable:!1,value:"noOfRooms"},{value:"actions",sortable:!1,align:"start"}],branches:[],breadcrumbs:[{text:"Branches",disabled:!1,href:"/Branches"},{text:"Branch Details",disabled:!0,href:"/Attendance/BranchDetails"}],successAlert:!1,unsuccessAlert:!1,unsuccessAlertUpdate:!1,successAlertUpdate:!1}},created(){this.axios.get(this.$apiUrl+"/api/v1.0/BranchManagement/branches").then(t=>this.branches=t.data.branch.data)},methods:{recreate(){this.axios.get(this.$apiUrl+"/api/v1.0/BranchManagement/branches").then(t=>this.branches=t.data.branch.data)},deleteAlert(t){this.recreate(),this.successAlert=t},faileAlert(t){this.unsuccessAlert=t},updateSuccessAlert(t){this.recreate(),this.successAlertUpdate=t},updateFaileAlert(t){this.unsuccessAlertUpdate=t}}},L=F,E=Object(_["a"])(L,d,m,!1,null,null,null);e["default"]=E.exports},ba0d:function(t,e,s){"use strict";s("14d9"),s("9e29");var i=s("c37a"),a=s("0789"),r=s("58df"),l=s("297c"),n=s("a293"),o=s("80d2"),h=s("d9bd");e["a"]=Object(r["a"])(i["a"],l["a"]).extend({name:"v-slider",directives:{ClickOutside:n["a"]},mixins:[l["a"]],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:t=>"boolean"===typeof t||"always"===t},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:()=>[]},ticks:{type:[Boolean,String],default:!1,validator:t=>"boolean"===typeof t||"always"===t},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:()=>({app:null,oldValue:null,thumbPressed:!1,mouseTimeout:-1,isFocused:!1,isActive:!1,noClick:!1,startOffset:0}),computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel}},internalValue:{get(){return this.lazyValue},set(t){t=isNaN(t)?this.minValue:t;const e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition(){return this.thumbPressed?this.showTicks||this.stepNumeric?"0.1s cubic-bezier(0.25, 0.8, 0.5, 1)":"none":""},minValue(){return parseFloat(this.min)},maxValue(){return parseFloat(this.max)},stepNumeric(){return this.step>0?parseFloat(this.step):0},inputWidth(){const t=(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100;return isNaN(t)?0:t},trackFillStyles(){const t=this.vertical?"bottom":"left",e=this.vertical?"top":"right",s=this.vertical?"height":"width",i=this.$vuetify.rtl?"auto":"0",a=this.$vuetify.rtl?"0":"auto",r=this.isDisabled?`calc(${this.inputWidth}% - 10px)`:this.inputWidth+"%";return{transition:this.trackTransition,[t]:i,[e]:a,[s]:r}},trackStyles(){const t=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",e=this.vertical?"height":"width",s="0px",i=this.isDisabled?`calc(${100-this.inputWidth}% - 10px)`:`calc(${100-this.inputWidth}%)`;return{transition:this.trackTransition,[t]:s,[e]:i}},showTicks(){return this.tickLabels.length>0||!(this.isDisabled||!this.stepNumeric||!this.ticks)},numTicks(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel(){return!this.isDisabled&&!(!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor(){if(!this.isDisabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor(){if(!this.isDisabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min(t){const e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max(t){const e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler(t){this.internalValue=t},immediate:!0}},mounted(){this.app=document.querySelector("[data-app]")||Object(h["c"])("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot(){const t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider(){return this.$createElement("div",{class:{"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.isDisabled,"v-slider--readonly":this.isReadonly,...this.themeClasses},directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick,mousedown:this.onSliderMouseDown,touchstart:this.onSliderMouseDown}},this.genChildren())},genChildren(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onFocus,this.onBlur)]},genInput(){return this.$createElement("input",{attrs:{value:this.internalValue,id:this.computedId,disabled:!0,readonly:!0,tabindex:-1,...this.$attrs}})},genTrackContainer(){const t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps(){if(!this.step||!this.showTicks)return null;const t=parseFloat(this.tickSize),e=Object(o["i"])(this.numTicks+1),s=this.vertical?"bottom":this.$vuetify.rtl?"right":"left",i=this.vertical?this.$vuetify.rtl?"left":"right":"top";this.vertical&&e.reverse();const a=e.map(e=>{const a=[];this.tickLabels[e]&&a.push(this.$createElement("div",{staticClass:"v-slider__tick-label"},this.tickLabels[e]));const r=e*(100/this.numTicks),l=this.$vuetify.rtl?100-this.inputWidth<r:r<this.inputWidth;return this.$createElement("span",{key:e,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":l},style:{width:t+"px",height:t+"px",[s]:`calc(${r}% - ${t/2}px)`,[i]:`calc(50% - ${t/2}px)`}},a)});return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},a)},genThumbContainer(t,e,s,i,a,r,l="thumb"){const n=[this.genThumb()],o=this.genThumbLabelContent(t);return this.showThumbLabel&&n.push(this.genThumbLabel(o)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:l,key:l,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":s,"v-slider__thumb-container--focused":i,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:{role:"slider",tabindex:this.isDisabled?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.$attrs["aria-label"]||this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.isReadonly),"aria-orientation":this.vertical?"vertical":"horizontal"},on:{focus:a,blur:r,keydown:this.onKeyDown}}),n)},genThumbLabelContent(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel(t){const e=Object(o["h"])(this.thumbSize),s=this.vertical?`translateY(20%) translateY(${Number(this.thumbSize)/3-1}px) translateX(55%) rotate(135deg)`:"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(a["e"],{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e,transform:s}}),[this.$createElement("div",t)])])])},genThumb(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles(t){const e=this.vertical?"top":"left";let s=this.$vuetify.rtl?100-t:t;return s=this.vertical?100-s:s,{transition:this.trackTransition,[e]:s+"%"}},onSliderMouseDown(t){var e;if(t.preventDefault(),this.oldValue=this.internalValue,this.isActive=!0,null===(e=t.target)||void 0===e?void 0:e.matches(".v-slider__thumb-container, .v-slider__thumb-container *")){this.thumbPressed=!0;const e=t.target.getBoundingClientRect(),s="touches"in t?t.touches[0]:t;this.startOffset=this.vertical?s.clientY-(e.top+e.height/2):s.clientX-(e.left+e.width/2)}else this.startOffset=0,window.clearTimeout(this.mouseTimeout),this.mouseTimeout=window.setTimeout(()=>{this.thumbPressed=!0},300);const s=!o["B"]||{passive:!0,capture:!0},i=!!o["B"]&&{passive:!0},a="touches"in t;this.onMouseMove(t),this.app.addEventListener(a?"touchmove":"mousemove",this.onMouseMove,i),Object(o["a"])(this.app,a?"touchend":"mouseup",this.onSliderMouseUp,s),this.$emit("start",this.internalValue)},onSliderMouseUp(t){t.stopPropagation(),window.clearTimeout(this.mouseTimeout),this.thumbPressed=!1;const e=!!o["B"]&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("mouseup",t),this.$emit("end",this.internalValue),Object(o["k"])(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove(t){"mousemove"===t.type&&(this.thumbPressed=!0),this.internalValue=this.parseMouseMove(t)},onKeyDown(t){if(!this.isInteractive)return;const e=this.parseKeyDown(t,this.internalValue);null==e||e<this.minValue||e>this.maxValue||(this.internalValue=e,this.$emit("change",e))},onSliderClick(t){if(this.noClick)return void(this.noClick=!1);const e=this.$refs.thumb;e.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove(t){const e=this.vertical?"top":"left",s=this.vertical?"height":"width",i=this.vertical?"clientY":"clientX",{[e]:a,[s]:r}=this.$refs.track.getBoundingClientRect(),l="touches"in t?t.touches[0][i]:t[i];let n=Math.min(Math.max((l-a-this.startOffset)/r,0),1)||0;return this.vertical&&(n=1-n),this.$vuetify.rtl&&(n=1-n),parseFloat(this.min)+n*(this.maxValue-this.minValue)},parseKeyDown(t,e){if(!this.isInteractive)return;const{pageup:s,pagedown:i,end:a,home:r,left:l,right:n,down:h,up:c}=o["x"];if(![s,i,a,r,l,n,h,c].includes(t.keyCode))return;t.preventDefault();const u=this.stepNumeric||1,d=(this.maxValue-this.minValue)/u;if([l,n,h,c].includes(t.keyCode)){const s=this.$vuetify.rtl?[l,c]:[n,c],i=s.includes(t.keyCode)?1:-1,a=t.shiftKey?3:t.ctrlKey?2:1;e+=i*u*a}else if(t.keyCode===r)e=this.minValue;else if(t.keyCode===a)e=this.maxValue;else{const s=t.keyCode===i?1:-1;e-=s*u*(d>100?d/10:10)}return e},roundValue(t){if(!this.stepNumeric)return t;const e=this.step.toString().trim(),s=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,i=this.minValue%this.stepNumeric,a=Math.round((t-i)/this.stepNumeric)*this.stepNumeric+i;return parseFloat(Math.min(a,this.maxValue).toFixed(s))}}})},f33e:function(t,e,s){"use strict";s("889c")}}]);
//# sourceMappingURL=chunk-3c8edc94.2842edcb.js.map