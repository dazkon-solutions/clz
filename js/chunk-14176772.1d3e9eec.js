(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14176772"],{"3a94":function(e,t,a){"use strict";var s=a("8336"),l=a("b0af"),n=a("99d9"),r=a("a523"),i=a("169a"),c=a("132d"),o=a("0fd9"),u=a("2fa4"),d=function(){var e=this,t=e._self._c;return t(o["a"],{attrs:{justify:"start"}},[t(i["a"],{attrs:{persistent:"","max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:l}){return[t(s["a"],e._g(e._b({staticClass:"error",attrs:{fab:"",dark:"","x-small":"",depressed:""}},"v-btn",l,!1),a),[t(c["a"],{attrs:{dark:""}},[e._v("mdi-delete")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l["a"],[t(r["a"],{staticClass:"text-center"},[t(n["d"],[t(o["a"],{attrs:{justify:"center"}},[t(c["a"],{attrs:{size:"100",color:"error"}},[e._v("mdi-help-circle-outline")])],1)],1),t("span",{staticClass:"text-h6 text-center"},[e._v("Do you really want to delete "),t("br"),e._v(" "),t("strong",[e._v('Advance ID:"'+e._s(e.payment.advanceID)+'"')])])],1),t(n["a"],[t(u["a"]),t(s["a"],{attrs:{color:"grey",outlined:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),t(s["a"],{attrs:{loading:e.loading,color:"error",depressed:""},on:{click:function(t){return e.deletePaymentDetails()}}},[e._v("Delete "),t(c["a"],{attrs:{right:""}},[e._v("mdi-delete")])],1)],1)],1)],1)],1)},m=[],h={props:["payment"],data:()=>({dialog:!1,loading:!1}),methods:{deletePaymentDetails(){this.loading=!0,this.axios.delete(this.$apiUrl+"/api/v1.0/AdvanceManagement/advances/"+this.payment.advanceID+"/trashed").then(e=>{1==e.data.success?(this.dialog=!1,this.successAlert(),this.loading=!1):this.failedAlert()}).catch(e=>{this.loading=!1,this.failedAlert(),console.log(e.data)})},successAlert(){this.$emit("success",!0)},failedAlert(){this.$emit("failed",!0)}}},p=h,f=a("2877"),v=Object(f["a"])(p,d,m,!1,null,null,null);t["a"]=v.exports},"4e93":function(e,t,a){"use strict";var s=a("8336"),l=a("b0af"),n=a("99d9"),r=a("a523"),i=a("169a"),c=a("132d"),o=a("0fd9"),u=a("2fa4"),d=function(){var e=this,t=e._self._c;return t(o["a"],{attrs:{justify:"start"}},[t(i["a"],{attrs:{persistent:"","max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:l}){return[t(s["a"],e._g(e._b({staticClass:"warning",attrs:{fab:"",dark:"","x-small":"",depressed:""}},"v-btn",l,!1),a),[t(c["a"],{attrs:{dark:""}},[e._v("mdi-undo")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l["a"],[t(r["a"],{staticClass:"text-center"},[t(n["d"],[t(o["a"],{attrs:{justify:"center"}},[t(c["a"],{attrs:{size:"100",color:"warning"}},[e._v("mdi-help-circle-outline")])],1)],1),t("span",{staticClass:"text-h6 text-center"},[e._v("Do you really want to restore "),t("br"),e._v(" "),t("strong",[e._v('Advance ID:"'+e._s(e.payment.advanceID)+'"')])])],1),t(n["a"],[t(u["a"]),t(s["a"],{attrs:{color:"grey",outlined:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),t(s["a"],{attrs:{loading:e.loading,color:"warning",depressed:""},on:{click:function(t){return e.restorePaymentDetails()}}},[e._v("Restore "),t(c["a"],{attrs:{right:""}},[e._v("mdi-undo")])],1)],1)],1)],1)],1)},m=[],h={props:["payment"],data:()=>({dialog:!1,loading:!1,logedUser:JSON.parse(localStorage.getItem("user"))}),methods:{restorePaymentDetails(){this.loading=!0,this.axios.post(this.$apiUrl+"/api/v1.0/AdvanceManagement/advances/"+this.payment.advanceID+"/restore",{handlerStaffID:this.logedUser.employee.employeeID}).then(e=>{1==e.data.success?(this.dialog=!1,this.successAlert(),this.loading=!1):this.failedAlert()}).catch(e=>{this.loading=!1,this.failedAlert(),console.log(e.data)})},successAlert(){this.$emit("success",!0)},failedAlert(){this.$emit("failed",!0)}}},p=h,f=a("2877"),v=Object(f["a"])(p,d,m,!1,null,null,null);t["a"]=v.exports},b6cb:function(e,t,a){"use strict";a.r(t);var s=a("2bc5"),l=a("b0af"),n=a("62ad"),r=a("a523"),i=a("132d"),c=a("0fd9"),o=a("71a3"),u=a("c671"),d=a("fe57"),m=a("9a96"),h=function(){var e=this,t=e._self._c;return t("div",[t(s["a"],{attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t(i["a"],[e._v("mdi-chevron-right")])]},proxy:!0}])}),t(r["a"],[t(c["a"],[t(n["a"],[t(l["a"],{attrs:{flat:""}},[t(d["a"],{attrs:{"align-with-title":"","show-arrows":"","fixed-tabs":"","active-class":"white--text grey","background-color":"blue-grey lighten-4 "}},[t(m["a"],{attrs:{color:"grey"}}),t(o["a"],{attrs:{href:"#1"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-cash-check")]),e._v(" Fees Payment")],1),t(o["a"],{attrs:{href:"#2"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-account-cash")]),e._v(" Teacher Advance")],1),t(o["a"],{attrs:{href:"#3"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-account-cash")]),e._v(" Staff Advance")],1),t(o["a"],{attrs:{href:"#4"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-chart-donut")]),e._v(" Expenditures")],1),t(u["a"],{staticClass:"mt-5",attrs:{value:"1"}},[t("app-TrashFeesPayment")],1),t(u["a"],{staticClass:"mt-5",attrs:{value:"2"}},[t("app-TrashTeacherAdvance")],1),t(u["a"],{staticClass:"mt-5",attrs:{value:"3"}},[t("app-TrashStaffAdvance")],1),t(u["a"],{staticClass:"mt-5",attrs:{value:"4"}},[t("app-TrashExpenditures")],1)],1)],1)],1)],1)],1)],1)},p=[],f=a("99d9"),v=a("8fea"),g=a("2e4b"),y=a("e449"),A=a("2db4"),_=a("2fa4"),b=a("8654"),x=function(){var e=this,t=e._self._c;return t("div",[t(r["a"],[t(A["a"],{attrs:{timeout:3e3,absolute:"",bottom:"",color:"green"},model:{value:e.paymentSuccessAlert,callback:function(t){e.paymentSuccessAlert=t},expression:"paymentSuccessAlert"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Payment has been "),t("strong",[e._v("successfully")])],1),t(A["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:e.unsuccessAlert,callback:function(t){e.unsuccessAlert=t},expression:"unsuccessAlert"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-alert-outline")]),e._v("Item delete "),t("strong",[e._v("failed")])],1),t(A["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:e.successAlert,callback:function(t){e.successAlert=t},expression:"successAlert"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Item delete "),t("strong",[e._v("successful")])],1),t(A["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:e.unsuccessAlertUpdate,callback:function(t){e.unsuccessAlertUpdate=t},expression:"unsuccessAlertUpdate"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-alert-outline")]),e._v("Payment restore "),t("strong",[e._v("failed")])],1),t(A["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:e.successAlertUpdate,callback:function(t){e.successAlertUpdate=t},expression:"successAlertUpdate"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Payment restore "),t("strong",[e._v("successful")])],1),[t(c["a"],[t(n["a"],[t(l["a"],{attrs:{flat:""}},[t(f["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[e._v("Trashed Fees Payments "),t(_["a"]),t(y["a"],{ref:"menud",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(b["a"],e._g(e._b({attrs:{label:"Date",readonly:"",hint:"*Select Month to search for a previous month's Details","persistent-hint":"","single-line":""},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}},"v-text-field",s,!1),a))]}}]),model:{value:e.monthMenu,callback:function(t){e.monthMenu=t},expression:"monthMenu"}},[t(g["a"],{attrs:{type:"month",max:(new Date).getFullYear()+"-"+String((new Date).getMonth()+1).padStart(2,"0")},on:{input:function(t){e.monthMenu=!1,e.getPaymentDetails()}},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1)],1),t(f["d"],[t(_["a"]),t(b["a"],{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),[t("div",[t(v["a"],{attrs:{headers:e.headers,items:e.paymentDetails,search:e.search,"sort-by":["feeID"],"sort-desc":!0},scopedSlots:e._u([{key:"item.actions",fn:function({item:a}){return[t(f["a"],[t("app-RestorePaymentDetailsTrashed",{attrs:{payment:a},on:{success:function(t){return e.updateSuccessAlert(t)},failed:function(t){return e.updateFaileAlert(t)}}}),t(_["a"]),t("app-DeletePaymentDetailsTrashed",{staticClass:"ml-5",attrs:{payment:a},on:{success:function(t){return e.deleteAlert(t)},failed:function(t){return e.faileAlert(t)}}})],1)]}}],null,!0)})],1)]],2)],1)],1)]],2)],1)},D=[],k=a("8336"),S=a("169a"),P=function(){var e=this,t=e._self._c;return t(c["a"],{attrs:{justify:"start"}},[t(S["a"],{attrs:{persistent:"","max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(k["a"],e._g(e._b({staticClass:"error",attrs:{fab:"",dark:"","x-small":"",depressed:""}},"v-btn",s,!1),a),[t(i["a"],{attrs:{dark:""}},[e._v("mdi-delete")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l["a"],[t(r["a"],{staticClass:"text-center"},[t(f["d"],[t(c["a"],{attrs:{justify:"center"}},[t(i["a"],{attrs:{size:"100",color:"error"}},[e._v("mdi-help-circle-outline")])],1)],1),t("span",{staticClass:"text-h6 text-center"},[e._v("Do you really want to delete "),t("br"),e._v(" "),t("strong",[e._v('Payment ID:"'+e._s(e.payment.feeID)+'"')])])],1),t(f["a"],[t(_["a"]),t(k["a"],{attrs:{color:"grey",outlined:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),t(k["a"],{attrs:{loading:e.loading,color:"error",depressed:""},on:{click:function(t){return e.deletePaymentDetails()}}},[e._v("Delete "),t(i["a"],{attrs:{right:""}},[e._v("mdi-delete")])],1)],1)],1)],1)],1)},U=[],T={props:["payment"],data:()=>({dialog:!1,loading:!1}),methods:{deletePaymentDetails(){this.loading=!0,this.axios.delete(this.$apiUrl+"/api/v1.0/FeeManagement/fees/"+this.payment.feeID+"/trashed").then(e=>{1==e.data.success?(this.dialog=!1,this.successAlert(),this.loading=!1):this.failedAlert()}).catch(e=>{this.loading=!1,this.failedAlert(),console.log(e.data)})},successAlert(){this.$emit("success",!0)},failedAlert(){this.$emit("failed",!0)}}},I=T,w=a("2877"),C=Object(w["a"])(I,P,U,!1,null,null,null),M=C.exports,F=function(){var e=this,t=e._self._c;return t(c["a"],{attrs:{justify:"start"}},[t(S["a"],{attrs:{persistent:"","max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(k["a"],e._g(e._b({staticClass:"warning",attrs:{fab:"",dark:"","x-small":"",depressed:""}},"v-btn",s,!1),a),[t(i["a"],{attrs:{dark:""}},[e._v("mdi-undo")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l["a"],[t(r["a"],{staticClass:"text-center"},[t(f["d"],[t(c["a"],{attrs:{justify:"center"}},[t(i["a"],{attrs:{size:"100",color:"warning"}},[e._v("mdi-help-circle-outline")])],1)],1),t("span",{staticClass:"text-h6 text-center"},[e._v("Do you really want to restore "),t("br"),e._v(" "),t("strong",[e._v('Payment ID:"'+e._s(e.payment.feeID)+'"')])])],1),t(f["a"],[t(_["a"]),t(k["a"],{attrs:{color:"grey",outlined:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),t(k["a"],{attrs:{loading:e.loading,color:"warning",depressed:""},on:{click:function(t){return e.restorePaymentDetails()}}},[e._v("Restore "),t(i["a"],{attrs:{right:""}},[e._v("mdi-undo")])],1)],1)],1)],1)],1)},E=[],j={props:["payment"],data:()=>({dialog:!1,loading:!1,logedUser:JSON.parse(localStorage.getItem("user"))}),methods:{restorePaymentDetails(){this.loading=!0,this.axios.post(this.$apiUrl+"/api/v1.0/FeeManagement/fees/"+this.payment.feeID+"/restore",{handlerStaffID:this.logedUser.employee.employeeID}).then(e=>{1==e.data.success?(this.dialog=!1,this.successAlert(),this.loading=!1):this.failedAlert()}).catch(e=>{this.loading=!1,this.failedAlert(),console.log(e.data)})},successAlert(){this.$emit("success",!0)},failedAlert(){this.$emit("failed",!0)}}},$=j,O=Object(w["a"])($,F,E,!1,null,null,null),R=O.exports,N={components:{"app-DeletePaymentDetailsTrashed":M,"app-RestorePaymentDetailsTrashed":R},data(){return{monthActivePicker:null,month:(new Date).getFullYear()+"-"+String((new Date).getMonth()+1).padStart(2,"0"),monthMenu:!1,search:"",headers:[{text:"ID",align:"start",sortable:!1,value:"feeID"},{text:"STUDENT",sortable:!1,value:"studentName"},{text:"CLASS",sortable:!1,value:"className"},{text:"AMOUNT(Rs.)",sortable:!0,value:"paidAmount"},{text:"DELETED AT",sortable:!0,value:"deleted_at"},{text:"STAFF",sortable:!0,value:"handledBy.staffName"},{value:"actions",sortable:!1,align:"start"}],paymentDetails:[],paymentSuccessAlert:!1,successAlert:!1,unsuccessAlert:!1,unsuccessAlertUpdate:!1,successAlertUpdate:!1}},created(){this.getPaymentDetails()},methods:{getPaymentDetails(){this.axios.get(this.$apiUrl+"/api/v1.0/FeeManagement/fees/trashed",{params:{date:this.month}}).then(e=>this.paymentDetails=e.data.fee.data)},deleteAlert(e){this.getPaymentDetails(),this.successAlert=e},faileAlert(e){this.unsuccessAlert=e},paymentAlertSuccess(e){this.todayCollection(),this.getPaymentDetails(),this.paymentSuccessAlert=e},updateSuccessAlert(e){this.successAlertUpdate=e,this.getPaymentDetails()},updateFaileAlert(e){this.unsuccessAlertUpdate=e}}},Y=N,z=Object(w["a"])(Y,x,D,!1,null,null,null),J=z.exports,L=a("ce08"),B=function(){var e=this,t=e._self._c;return t("div",[t(r["a"],[t(A["a"],{attrs:{timeout:3e3,absolute:"",bottom:"",color:"green"},model:{value:e.paymentSuccessAlert,callback:function(t){e.paymentSuccessAlert=t},expression:"paymentSuccessAlert"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Payment has been "),t("strong",[e._v("successfully")])],1),t(A["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:e.unsuccessAlert,callback:function(t){e.unsuccessAlert=t},expression:"unsuccessAlert"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-alert-outline")]),e._v("Item delete "),t("strong",[e._v("failed")])],1),t(A["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:e.successAlert,callback:function(t){e.successAlert=t},expression:"successAlert"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Item delete "),t("strong",[e._v("successful")])],1),t(A["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:e.unsuccessAlertUpdate,callback:function(t){e.unsuccessAlertUpdate=t},expression:"unsuccessAlertUpdate"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-alert-outline")]),e._v("Payment restore "),t("strong",[e._v("failed")])],1),t(A["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:e.successAlertUpdate,callback:function(t){e.successAlertUpdate=t},expression:"successAlertUpdate"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Payment restore "),t("strong",[e._v("successful")])],1),[t(c["a"],[t(n["a"],[t(l["a"],{attrs:{flat:""}},[t(f["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[e._v("Trashed Staff Advance "),t(_["a"]),t(y["a"],{ref:"menud",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(b["a"],e._g(e._b({attrs:{label:"Date",readonly:"",hint:"*Select Month to search for a previous month's Details","persistent-hint":"","single-line":""},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}},"v-text-field",s,!1),a))]}}]),model:{value:e.monthMenu,callback:function(t){e.monthMenu=t},expression:"monthMenu"}},[t(g["a"],{attrs:{type:"month",max:(new Date).getFullYear()+"-"+String((new Date).getMonth()+1).padStart(2,"0")},on:{input:function(t){e.monthMenu=!1,e.getPaymentDetails()}},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1)],1),t(f["d"],[t(_["a"]),t(b["a"],{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),[t("div",[t(v["a"],{attrs:{headers:e.headers,items:e.paymentDetails,search:e.search,"sort-by":["feeID"],"sort-desc":!0},scopedSlots:e._u([{key:"item.actions",fn:function({item:a}){return[t(f["a"],[t("app-RestoreAdvanceTrashed",{attrs:{payment:a},on:{success:function(t){return e.updateSuccessAlert(t)},failed:function(t){return e.updateFaileAlert(t)}}}),t(_["a"]),t("app-DeleteAdvanceTrashed",{staticClass:"ml-5",attrs:{payment:a},on:{success:function(t){return e.deleteAlert(t)},failed:function(t){return e.faileAlert(t)}}})],1)]}}],null,!0)})],1)]],2)],1)],1)]],2)],1)},H=[],q=a("3a94"),G=a("4e93"),K={components:{"app-DeleteAdvanceTrashed":q["a"],"app-RestoreAdvanceTrashed":G["a"]},data(){return{monthActivePicker:null,month:(new Date).getFullYear()+"-"+String((new Date).getMonth()+1).padStart(2,"0"),monthMenu:!1,search:"",headers:[{text:"ID",align:"start",sortable:!1,value:"advanceID"},{text:"TEACHER",sortable:!1,value:"staff.staffName"},{text:"DESCRIPTION",sortable:!1,value:"description"},{text:"AMOUNT(Rs.)",sortable:!0,value:"advanceAmount"},{text:"DELETED AT",sortable:!0,value:"deleted_at"},{text:"STAFF",sortable:!0,value:"handledBy.staffName"},{value:"actions",sortable:!1,align:"start"}],paymentDetails:[],paymentSuccessAlert:!1,successAlert:!1,unsuccessAlert:!1,unsuccessAlertUpdate:!1,successAlertUpdate:!1}},created(){this.getPaymentDetails()},methods:{getPaymentDetails(){this.axios.get(this.$apiUrl+"/api/v1.0/AdvanceManagement/advances/trashed",{params:{employeeType:"staff",date:this.month}}).then(e=>this.paymentDetails=e.data.advance.data)},deleteAlert(e){this.getPaymentDetails(),this.successAlert=e},faileAlert(e){this.unsuccessAlert=e},paymentAlertSuccess(e){this.todayCollection(),this.getPaymentDetails(),this.paymentSuccessAlert=e},updateSuccessAlert(e){this.successAlertUpdate=e,this.getPaymentDetails()},updateFaileAlert(e){this.unsuccessAlertUpdate=e}}},Q=K,V=Object(w["a"])(Q,B,H,!1,null,null,null),W=V.exports,X=function(){var e=this,t=e._self._c;return t("div",[t(r["a"],[t(A["a"],{attrs:{timeout:3e3,absolute:"",bottom:"",color:"green"},model:{value:e.paymentSuccessAlert,callback:function(t){e.paymentSuccessAlert=t},expression:"paymentSuccessAlert"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Payment has been "),t("strong",[e._v("successfully")])],1),t(A["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:e.unsuccessAlert,callback:function(t){e.unsuccessAlert=t},expression:"unsuccessAlert"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-alert-outline")]),e._v("Item delete "),t("strong",[e._v("failed")])],1),t(A["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:e.successAlert,callback:function(t){e.successAlert=t},expression:"successAlert"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Item delete "),t("strong",[e._v("successful")])],1),t(A["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:e.unsuccessAlertUpdate,callback:function(t){e.unsuccessAlertUpdate=t},expression:"unsuccessAlertUpdate"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-alert-outline")]),e._v("Payment restore "),t("strong",[e._v("failed")])],1),t(A["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:e.successAlertUpdate,callback:function(t){e.successAlertUpdate=t},expression:"successAlertUpdate"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Payment restore "),t("strong",[e._v("successful")])],1),[t(c["a"],[t(n["a"],[t(l["a"],{attrs:{flat:""}},[t(f["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[e._v("Trashed Expenditures "),t(_["a"]),t(y["a"],{ref:"menud",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(b["a"],e._g(e._b({attrs:{label:"Date",readonly:"",hint:"*Select Month to search for a previous month's Details","persistent-hint":"","single-line":""},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}},"v-text-field",s,!1),a))]}}]),model:{value:e.monthMenu,callback:function(t){e.monthMenu=t},expression:"monthMenu"}},[t(g["a"],{attrs:{type:"month",max:(new Date).getFullYear()+"-"+String((new Date).getMonth()+1).padStart(2,"0")},on:{input:function(t){e.monthMenu=!1,e.getPaymentDetails()}},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1)],1),t(f["d"],[t(_["a"]),t(b["a"],{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),[t("div",[t(v["a"],{attrs:{headers:e.headers,items:e.paymentDetails,search:e.search,"sort-by":["feeID"],"sort-desc":!0},scopedSlots:e._u([{key:"item.actions",fn:function({item:a}){return[t(f["a"],[t("app-RestoreExpenditureTrashed",{attrs:{payment:a},on:{success:function(t){return e.updateSuccessAlert(t)},failed:function(t){return e.updateFaileAlert(t)}}}),t(_["a"]),t("app-DeleteExpenditureTrashed",{staticClass:"ml-5",attrs:{payment:a},on:{success:function(t){return e.deleteAlert(t)},failed:function(t){return e.faileAlert(t)}}})],1)]}}],null,!0)})],1)]],2)],1)],1)]],2)],1)},Z=[],ee=function(){var e=this,t=e._self._c;return t(c["a"],{attrs:{justify:"start"}},[t(S["a"],{attrs:{persistent:"","max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(k["a"],e._g(e._b({staticClass:"error",attrs:{fab:"",dark:"","x-small":"",depressed:""}},"v-btn",s,!1),a),[t(i["a"],{attrs:{dark:""}},[e._v("mdi-delete")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l["a"],[t(r["a"],{staticClass:"text-center"},[t(f["d"],[t(c["a"],{attrs:{justify:"center"}},[t(i["a"],{attrs:{size:"100",color:"error"}},[e._v("mdi-help-circle-outline")])],1)],1),t("span",{staticClass:"text-h6 text-center"},[e._v("Do you really want to delete "),t("br"),e._v(" "),t("strong",[e._v('Expenditure ID:"'+e._s(e.payment.expenseID)+'"')])])],1),t(f["a"],[t(_["a"]),t(k["a"],{attrs:{color:"grey",outlined:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),t(k["a"],{attrs:{loading:e.loading,color:"error",depressed:""},on:{click:function(t){return e.deletePaymentDetails()}}},[e._v("Delete "),t(i["a"],{attrs:{right:""}},[e._v("mdi-delete")])],1)],1)],1)],1)],1)},te=[],ae={props:["payment"],data:()=>({dialog:!1,loading:!1}),methods:{deletePaymentDetails(){this.loading=!0,this.axios.delete(this.$apiUrl+"/api/v1.0/ExpenditureManagement/expenditures/"+this.payment.expenseID+"/trashed").then(e=>{1==e.data.success?(this.dialog=!1,this.successAlert(),this.loading=!1):this.failedAlert()}).catch(e=>{this.loading=!1,this.failedAlert(),console.log(e.data)})},successAlert(){this.$emit("success",!0)},failedAlert(){this.$emit("failed",!0)}}},se=ae,le=Object(w["a"])(se,ee,te,!1,null,null,null),ne=le.exports,re=function(){var e=this,t=e._self._c;return t(c["a"],{attrs:{justify:"start"}},[t(S["a"],{attrs:{persistent:"","max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(k["a"],e._g(e._b({staticClass:"warning",attrs:{fab:"",dark:"","x-small":"",depressed:""}},"v-btn",s,!1),a),[t(i["a"],{attrs:{dark:""}},[e._v("mdi-undo")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l["a"],[t(r["a"],{staticClass:"text-center"},[t(f["d"],[t(c["a"],{attrs:{justify:"center"}},[t(i["a"],{attrs:{size:"100",color:"warning"}},[e._v("mdi-help-circle-outline")])],1)],1),t("span",{staticClass:"text-h6 text-center"},[e._v("Do you really want to restore "),t("br"),e._v(" "),t("strong",[e._v('Expenditure ID:"'+e._s(e.payment.expenseID)+'"')])])],1),t(f["a"],[t(_["a"]),t(k["a"],{attrs:{color:"grey",outlined:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),t(k["a"],{attrs:{loading:e.loading,color:"warning",depressed:""},on:{click:function(t){return e.restorePaymentDetails()}}},[e._v("Restore "),t(i["a"],{attrs:{right:""}},[e._v("mdi-undo")])],1)],1)],1)],1)],1)},ie=[],ce={props:["payment"],data:()=>({dialog:!1,loading:!1,logedUser:JSON.parse(localStorage.getItem("user"))}),methods:{restorePaymentDetails(){this.loading=!0,this.axios.post(this.$apiUrl+"/api/v1.0/ExpenditureManagement/expenditures/"+this.payment.expenseID+"/restore",{handlerStaffID:this.logedUser.employee.employeeID}).then(e=>{1==e.data.success?(this.dialog=!1,this.successAlert(),this.loading=!1):this.failedAlert()}).catch(e=>{this.loading=!1,this.failedAlert(),console.log(e.data)})},successAlert(){this.$emit("success",!0)},failedAlert(){this.$emit("failed",!0)}}},oe=ce,ue=Object(w["a"])(oe,re,ie,!1,null,null,null),de=ue.exports,me={components:{"app-DeleteExpenditureTrashed":ne,"app-RestoreExpenditureTrashed":de},data(){return{monthActivePicker:null,month:(new Date).getFullYear()+"-"+String((new Date).getMonth()+1).padStart(2,"0"),monthMenu:!1,search:"",headers:[{text:"ID",align:"start",sortable:!1,value:"expenseID"},{text:"DESCRIPTION",sortable:!1,value:"expense"},{text:"AMOUNT(Rs.)",sortable:!0,value:"expenseAmount"},{text:"DELETED AT",sortable:!0,value:"deleted_at"},{text:"STAFF",sortable:!0,value:"handledBy.staffName"},{value:"actions",sortable:!1,align:"start"}],paymentDetails:[],paymentSuccessAlert:!1,successAlert:!1,unsuccessAlert:!1,unsuccessAlertUpdate:!1,successAlertUpdate:!1}},created(){this.getPaymentDetails()},methods:{getPaymentDetails(){this.axios.get(this.$apiUrl+"/api/v1.0/ExpenditureManagement/expenditures/trashed",{params:{date:this.month}}).then(e=>this.paymentDetails=e.data.expense.data)},deleteAlert(e){this.getPaymentDetails(),this.successAlert=e},faileAlert(e){this.unsuccessAlert=e},paymentAlertSuccess(e){this.todayCollection(),this.getPaymentDetails(),this.paymentSuccessAlert=e},updateSuccessAlert(e){this.successAlertUpdate=e,this.getPaymentDetails()},updateFaileAlert(e){this.unsuccessAlertUpdate=e}}},he=me,pe=Object(w["a"])(he,X,Z,!1,null,null,null),fe=pe.exports,ve={components:{"app-TrashFeesPayment":J,"app-TrashTeacherAdvance":L["a"],"app-TrashStaffAdvance":W,"app-TrashExpenditures":fe},data(){return{breadcrumbs:[{text:"Financial",disabled:!1,href:"/Financial"},{text:"Trash",disabled:!0,href:"/Financial/FinancialTrash"}]}}},ge=ve,ye=Object(w["a"])(ge,h,p,!1,null,null,null);t["default"]=ye.exports},ce08:function(e,t,a){"use strict";var s=a("b0af"),l=a("99d9"),n=a("62ad"),r=a("a523"),i=a("8fea"),c=a("2e4b"),o=a("132d"),u=a("e449"),d=a("0fd9"),m=a("2db4"),h=a("2fa4"),p=a("8654"),f=function(){var e=this,t=e._self._c;return t("div",[t(r["a"],[t(m["a"],{attrs:{timeout:3e3,absolute:"",bottom:"",color:"green"},model:{value:e.paymentSuccessAlert,callback:function(t){e.paymentSuccessAlert=t},expression:"paymentSuccessAlert"}},[t(o["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Payment has been "),t("strong",[e._v("successfully")])],1),t(m["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:e.unsuccessAlert,callback:function(t){e.unsuccessAlert=t},expression:"unsuccessAlert"}},[t(o["a"],{attrs:{left:""}},[e._v("mdi-alert-outline")]),e._v("Item delete "),t("strong",[e._v("failed")])],1),t(m["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:e.successAlert,callback:function(t){e.successAlert=t},expression:"successAlert"}},[t(o["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Item delete "),t("strong",[e._v("successful")])],1),t(m["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:e.unsuccessAlertUpdate,callback:function(t){e.unsuccessAlertUpdate=t},expression:"unsuccessAlertUpdate"}},[t(o["a"],{attrs:{left:""}},[e._v("mdi-alert-outline")]),e._v("Payment restore "),t("strong",[e._v("failed")])],1),t(m["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:e.successAlertUpdate,callback:function(t){e.successAlertUpdate=t},expression:"successAlertUpdate"}},[t(o["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Payment restore "),t("strong",[e._v("successful")])],1),[t(d["a"],[t(n["a"],[t(s["a"],{attrs:{flat:""}},[t(l["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[e._v("Trashed Teacher Advance "),t(h["a"]),t(u["a"],{ref:"menud",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(p["a"],e._g(e._b({attrs:{label:"Date",readonly:"",hint:"*Select Month to search for a previous month's Details","persistent-hint":"","single-line":""},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}},"v-text-field",s,!1),a))]}}]),model:{value:e.monthMenu,callback:function(t){e.monthMenu=t},expression:"monthMenu"}},[t(c["a"],{attrs:{type:"month",max:(new Date).getFullYear()+"-"+String((new Date).getMonth()+1).padStart(2,"0")},on:{input:function(t){e.monthMenu=!1,e.getPaymentDetails()}},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1)],1),t(l["d"],[t(h["a"]),t(p["a"],{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),[t("div",[t(i["a"],{attrs:{headers:e.headers,items:e.paymentDetails,search:e.search,"sort-by":["feeID"],"sort-desc":!0},scopedSlots:e._u([{key:"item.actions",fn:function({item:a}){return[t(l["a"],[t("app-RestoreAdvanceTrashed",{attrs:{payment:a},on:{success:function(t){return e.updateSuccessAlert(t)},failed:function(t){return e.updateFaileAlert(t)}}}),t(h["a"]),t("app-DeleteAdvanceTrashed",{staticClass:"ml-5",attrs:{payment:a},on:{success:function(t){return e.deleteAlert(t)},failed:function(t){return e.faileAlert(t)}}})],1)]}}],null,!0)})],1)]],2)],1)],1)]],2)],1)},v=[],g=a("3a94"),y=a("4e93"),A={components:{"app-DeleteAdvanceTrashed":g["a"],"app-RestoreAdvanceTrashed":y["a"]},data(){return{monthActivePicker:null,month:(new Date).getFullYear()+"-"+String((new Date).getMonth()+1).padStart(2,"0"),monthMenu:!1,search:"",headers:[{text:"ID",align:"start",sortable:!1,value:"advanceID"},{text:"TEACHER",sortable:!1,value:"teacher.teacherName"},{text:"DESCRIPTION",sortable:!1,value:"description"},{text:"AMOUNT(Rs.)",sortable:!0,value:"advanceAmount"},{text:"DELETED AT",sortable:!0,value:"deleted_at"},{text:"STAFF",sortable:!0,value:"handledBy.staffName"},{value:"actions",sortable:!1,align:"start"}],paymentDetails:[],paymentSuccessAlert:!1,successAlert:!1,unsuccessAlert:!1,unsuccessAlertUpdate:!1,successAlertUpdate:!1}},created(){this.getPaymentDetails()},methods:{getPaymentDetails(){this.axios.get(this.$apiUrl+"/api/v1.0/AdvanceManagement/advances/trashed",{params:{employeeType:"teacher",date:this.month}}).then(e=>this.paymentDetails=e.data.advance.data)},deleteAlert(e){this.getPaymentDetails(),this.successAlert=e},faileAlert(e){this.unsuccessAlert=e},paymentAlertSuccess(e){this.todayCollection(),this.getPaymentDetails(),this.paymentSuccessAlert=e},updateSuccessAlert(e){this.successAlertUpdate=e,this.getPaymentDetails()},updateFaileAlert(e){this.unsuccessAlertUpdate=e}}},_=A,b=a("2877"),x=Object(b["a"])(_,f,v,!1,null,null,null);t["a"]=x.exports}}]);
//# sourceMappingURL=chunk-14176772.1d3e9eec.js.map