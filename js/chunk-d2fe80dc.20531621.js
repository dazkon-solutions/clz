(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2fe80dc"],{"3a94":function(e,t,a){"use strict";var s=a("8336"),n=a("b0af"),l=a("99d9"),r=a("a523"),o=a("169a"),c=a("132d"),i=a("0fd9"),d=a("2fa4"),u=function(){var e=this,t=e._self._c;return t(i["a"],{attrs:{justify:"start"}},[t(o["a"],{attrs:{persistent:"","max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:n}){return[t(s["a"],e._g(e._b({staticClass:"error",attrs:{fab:"",dark:"","x-small":"",depressed:""}},"v-btn",n,!1),a),[t(c["a"],{attrs:{dark:""}},[e._v("mdi-delete")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(n["a"],[t(r["a"],{staticClass:"text-center"},[t(l["d"],[t(i["a"],{attrs:{justify:"center"}},[t(c["a"],{attrs:{size:"100",color:"error"}},[e._v("mdi-help-circle-outline")])],1)],1),t("span",{staticClass:"text-h6 text-center"},[e._v("Do you really want to delete "),t("br"),e._v(" "),t("strong",[e._v('Advance ID:"'+e._s(e.payment.advanceID)+'"')])])],1),t(l["a"],[t(d["a"]),t(s["a"],{attrs:{color:"grey",outlined:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),t(s["a"],{attrs:{loading:e.loading,color:"error",depressed:""},on:{click:function(t){return e.deletePaymentDetails()}}},[e._v("Delete "),t(c["a"],{attrs:{right:""}},[e._v("mdi-delete")])],1)],1)],1)],1)],1)},h=[],m={props:["payment"],data:()=>({dialog:!1,loading:!1}),methods:{deletePaymentDetails(){this.loading=!0,this.axios.delete(this.$apiUrl+"/api/v1.0/AdvanceManagement/advances/"+this.payment.advanceID+"/trashed").then(e=>{1==e.data.success?(this.dialog=!1,this.successAlert(),this.loading=!1):this.failedAlert()}).catch(e=>{this.loading=!1,this.failedAlert(),console.log(e.data)})},successAlert(){this.$emit("success",!0)},failedAlert(){this.$emit("failed",!0)}}},p=m,f=a("2877"),v=Object(f["a"])(p,u,h,!1,null,null,null);t["a"]=v.exports},"3e06":function(e,t,a){"use strict";a.r(t);var s=a("2bc5"),n=a("b0af"),l=a("62ad"),r=a("a523"),o=a("132d"),c=a("0fd9"),i=a("71a3"),d=a("c671"),u=a("fe57"),h=a("9a96"),m=function(){var e=this,t=e._self._c;return t("div",[t(s["a"],{attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t(o["a"],[e._v("mdi-chevron-right")])]},proxy:!0}])}),t(r["a"],[t(c["a"],[t(l["a"],[t(n["a"],{attrs:{flat:""}},[t(u["a"],{attrs:{vertical:"","center-active":"","show-arrows":"","active-class":"white--text grey","background-color":"blue-grey lighten-4 "}},[t(h["a"],{attrs:{color:"blue-grey"}}),t(i["a"],{attrs:{href:"#1"}},[e._v("All Expences")]),t(i["a"],{attrs:{href:"#2"}},[e._v("Expences For Branches")]),t(d["a"],{staticClass:"mt-5",attrs:{value:"1"}},[t("app-AllExpenceReport")],1),t(d["a"],{staticClass:"mt-5",attrs:{value:"2"}},[t("app-TrashTeacherAdvance")],1)],1)],1)],1)],1)],1)],1)},p=[],f=a("861a"),v=a("ce08"),g={components:{"app-AllExpenceReport":f["a"],"app-TrashTeacherAdvance":v["a"]},data(){return{breadcrumbs:[{text:"Reports",disabled:!1,href:"/Reports"},{text:"Exam Marks Reports",disabled:!0,href:"/Reports/FinancialTrash"}]}}},y=g,b=a("2877"),A=Object(b["a"])(y,m,p,!1,null,null,null);t["default"]=A.exports},"4e93":function(e,t,a){"use strict";var s=a("8336"),n=a("b0af"),l=a("99d9"),r=a("a523"),o=a("169a"),c=a("132d"),i=a("0fd9"),d=a("2fa4"),u=function(){var e=this,t=e._self._c;return t(i["a"],{attrs:{justify:"start"}},[t(o["a"],{attrs:{persistent:"","max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:n}){return[t(s["a"],e._g(e._b({staticClass:"warning",attrs:{fab:"",dark:"","x-small":"",depressed:""}},"v-btn",n,!1),a),[t(c["a"],{attrs:{dark:""}},[e._v("mdi-undo")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(n["a"],[t(r["a"],{staticClass:"text-center"},[t(l["d"],[t(i["a"],{attrs:{justify:"center"}},[t(c["a"],{attrs:{size:"100",color:"warning"}},[e._v("mdi-help-circle-outline")])],1)],1),t("span",{staticClass:"text-h6 text-center"},[e._v("Do you really want to restore "),t("br"),e._v(" "),t("strong",[e._v('Advance ID:"'+e._s(e.payment.advanceID)+'"')])])],1),t(l["a"],[t(d["a"]),t(s["a"],{attrs:{color:"grey",outlined:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),t(s["a"],{attrs:{loading:e.loading,color:"warning",depressed:""},on:{click:function(t){return e.restorePaymentDetails()}}},[e._v("Restore "),t(c["a"],{attrs:{right:""}},[e._v("mdi-undo")])],1)],1)],1)],1)],1)},h=[],m={props:["payment"],data:()=>({dialog:!1,loading:!1,logedUser:JSON.parse(localStorage.getItem("user"))}),methods:{restorePaymentDetails(){this.loading=!0,this.axios.post(this.$apiUrl+"/api/v1.0/AdvanceManagement/advances/"+this.payment.advanceID+"/restore",{handlerStaffID:this.logedUser.employee.employeeID}).then(e=>{1==e.data.success?(this.dialog=!1,this.successAlert(),this.loading=!1):this.failedAlert()}).catch(e=>{this.loading=!1,this.failedAlert(),console.log(e.data)})},successAlert(){this.$emit("success",!0)},failedAlert(){this.$emit("failed",!0)}}},p=m,f=a("2877"),v=Object(f["a"])(p,u,h,!1,null,null,null);t["a"]=v.exports},"861a":function(e,t,a){"use strict";var s=a("8336"),n=a("b0af"),l=a("99d9"),r=a("62ad"),o=a("a523"),c=a("8fea"),i=a("2e4b"),d=a("ce7e"),u=a("132d"),h=a("e449"),m=a("0fd9"),p=a("2db4"),f=a("2fa4"),v=a("8654"),g=function(){var e=this,t=e._self._c;return t("div",[t(o["a"],[t(p["a"],{attrs:{timeout:3e3,absolute:"",bottom:"",color:"green"},model:{value:e.paymentSuccessAlert,callback:function(t){e.paymentSuccessAlert=t},expression:"paymentSuccessAlert"}},[t(u["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Payment has been "),t("strong",[e._v("successfully")])],1),t(p["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:e.unsuccessAlert,callback:function(t){e.unsuccessAlert=t},expression:"unsuccessAlert"}},[t(u["a"],{attrs:{left:""}},[e._v("mdi-alert-outline")]),e._v("Item delete "),t("strong",[e._v("failed")])],1),t(p["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:e.successAlert,callback:function(t){e.successAlert=t},expression:"successAlert"}},[t(u["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Item delete "),t("strong",[e._v("successful")])],1),t(p["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:e.unsuccessAlertUpdate,callback:function(t){e.unsuccessAlertUpdate=t},expression:"unsuccessAlertUpdate"}},[t(u["a"],{attrs:{left:""}},[e._v("mdi-alert-outline")]),e._v("Payment restore "),t("strong",[e._v("failed")])],1),t(p["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:e.successAlertUpdate,callback:function(t){e.successAlertUpdate=t},expression:"successAlertUpdate"}},[t(u["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Payment restore "),t("strong",[e._v("successful")])],1),[t(m["a"],[t(r["a"],[t(n["a"],{attrs:{flat:""}},[t(l["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[e._v("All Expences Report "),t(f["a"]),t(h["a"],{ref:"menud",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(v["a"],e._g(e._b({attrs:{label:"Date",readonly:"",hint:"*Select Month to search for a previous month's Details","persistent-hint":"","single-line":""},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}},"v-text-field",s,!1),a))]}}]),model:{value:e.monthMenu,callback:function(t){e.monthMenu=t},expression:"monthMenu"}},[t(i["a"],{attrs:{type:"month",max:(new Date).getFullYear()+"-"+String((new Date).getMonth()+1).padStart(2,"0")},on:{input:function(t){e.monthMenu=!1,e.getReports()}},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1)],1),t(l["d"],[t(f["a"]),t(s["a"],{attrs:{depressed:"",color:"primary"},on:{click:function(t){return e.generatePDF()}}},[e._v("PRINT "),t(u["a"],{attrs:{right:""}},[e._v("mdi-printer")])],1)],1),[t("div",{staticClass:"mt-5"},[t(c["a"],{attrs:{id:"my-table",headers:e.headers,items:e.reportDetails,"sort-desc":!0,"items-per-page":10}})],1)],t(d["a"]),t(m["a"],[t(r["a"],{staticClass:"text-right",attrs:{lg:"12",md:"12",sm:"12",cols:"12"}},[t(l["c"],[e._v(" Total: "),t("strong",[e._v("Rs."+e._s(e.meta.total))]),e._v(" "),t("br"),e._v(" Date: "),t("strong",[e._v(e._s(e.meta.date))]),e._v(" "),t("br")])],1)],1)],2)],1)],1)]],2)],1)},y=[],b=a("8baf"),A=a("0da4"),_=a.n(A),x={data(){return{monthActivePicker:null,month:(new Date).getFullYear()+"-"+String((new Date).getMonth()+1).padStart(2,"0"),monthMenu:!1,headers:[{text:"NO.",align:"start",sortable:!1,value:"no"},{text:"DESCRIPTION",sortable:!1,value:"expense"},{text:"AMOUNT(Rs.)",sortable:!1,value:"expenseAmount"},{text:"DATE",sortable:!1,value:"date"},{text:"BRANCH",sortable:!1,align:"end",value:"branchName"}],reportDetails:[],meta:[],paymentSuccessAlert:!1,successAlert:!1,unsuccessAlert:!1,unsuccessAlertUpdate:!1,successAlertUpdate:!1}},created(){this.getReports()},methods:{generatePDF(){const e=new b["jsPDF"];_()(e,{body:[[{content:"ICT ACADEMY",styles:{halign:"left",fontSize:20,textColor:"#ffffff"}},{content:"Report",styles:{halign:"right",fontSize:20,textColor:"#ffffff"}}]],theme:"plain",styles:{fillColor:"#3366ff"}}),_()(e,{body:[[{content:"Date: "+this.meta.date+"\nPrinted by: "+this.meta.printedBy+"\nPrinted date: "+this.meta.printedDate,styles:{halign:"left"}},{content:"ICT Academy,\nHakmana - Sri Lanka,\n076 9198533",styles:{halign:"right"}}]],theme:"plain"}),_()(e,{body:[[{content:"Expences Details Report",styles:{halign:"left",fontSize:14}}]],theme:"plain"}),_()(e,{columns:[{header:"NO.",dataKey:"no"},{header:"DESCRIPTION",dataKey:"expense"},{header:"AMOUNT(Rs.)",dataKey:"expenseAmount"},{header:"DATE",dataKey:"date"},{header:"BRANCH",dataKey:"branchName"}],body:this.reportDetails,theme:"striped",headStyles:{fillColor:"#343a40"}}),_()(e,{body:[[{content:"Total:",styles:{halign:"right",fontSize:14}}],[{content:"Rs."+this.meta.total,styles:{halign:"right",fontSize:20,textColor:"#3366ff"}}],[{content:"Date: "+this.meta.date,styles:{halign:"right"}}]],theme:"plain"}),_()(e,{body:[[{content:"--------xx--------",styles:{halign:"center"}}]],theme:"plain"}),e.autoPrint(),window.open(e.output("bloburl"),"_blank")},getReports(){var e=1;this.axios.get(this.$apiUrl+"/api/v1.0/ExpenseReporting/expenses",{params:{date:this.month}}).then(t=>{this.reportDetails=t.data.advances,this.meta=t.data.meta,this.reportDetails.forEach(t=>{t.branchName=t.branch.branchName,t.no=e++})})},deleteAlert(e){this.getPaymentDetails(),this.successAlert=e},faileAlert(e){this.unsuccessAlert=e},paymentAlertSuccess(e){this.todayCollection(),this.getPaymentDetails(),this.paymentSuccessAlert=e},updateSuccessAlert(e){this.successAlertUpdate=e,this.getPaymentDetails()},updateFaileAlert(e){this.unsuccessAlertUpdate=e}}},D=x,k=a("2877"),S=Object(k["a"])(D,g,y,!1,null,null,null);t["a"]=S.exports},ce08:function(e,t,a){"use strict";var s=a("b0af"),n=a("99d9"),l=a("62ad"),r=a("a523"),o=a("8fea"),c=a("2e4b"),i=a("132d"),d=a("e449"),u=a("0fd9"),h=a("2db4"),m=a("2fa4"),p=a("8654"),f=function(){var e=this,t=e._self._c;return t("div",[t(r["a"],[t(h["a"],{attrs:{timeout:3e3,absolute:"",bottom:"",color:"green"},model:{value:e.paymentSuccessAlert,callback:function(t){e.paymentSuccessAlert=t},expression:"paymentSuccessAlert"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Payment has been "),t("strong",[e._v("successfully")])],1),t(h["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:e.unsuccessAlert,callback:function(t){e.unsuccessAlert=t},expression:"unsuccessAlert"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-alert-outline")]),e._v("Item delete "),t("strong",[e._v("failed")])],1),t(h["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:e.successAlert,callback:function(t){e.successAlert=t},expression:"successAlert"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Item delete "),t("strong",[e._v("successful")])],1),t(h["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:e.unsuccessAlertUpdate,callback:function(t){e.unsuccessAlertUpdate=t},expression:"unsuccessAlertUpdate"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-alert-outline")]),e._v("Payment restore "),t("strong",[e._v("failed")])],1),t(h["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:e.successAlertUpdate,callback:function(t){e.successAlertUpdate=t},expression:"successAlertUpdate"}},[t(i["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Payment restore "),t("strong",[e._v("successful")])],1),[t(u["a"],[t(l["a"],[t(s["a"],{attrs:{flat:""}},[t(n["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[e._v("Trashed Teacher Advance "),t(m["a"]),t(d["a"],{ref:"menud",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(p["a"],e._g(e._b({attrs:{label:"Date",readonly:"",hint:"*Select Month to search for a previous month's Details","persistent-hint":"","single-line":""},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}},"v-text-field",s,!1),a))]}}]),model:{value:e.monthMenu,callback:function(t){e.monthMenu=t},expression:"monthMenu"}},[t(c["a"],{attrs:{type:"month",max:(new Date).getFullYear()+"-"+String((new Date).getMonth()+1).padStart(2,"0")},on:{input:function(t){e.monthMenu=!1,e.getPaymentDetails()}},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1)],1),t(n["d"],[t(m["a"]),t(p["a"],{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),[t("div",[t(o["a"],{attrs:{headers:e.headers,items:e.paymentDetails,search:e.search,"sort-by":["feeID"],"sort-desc":!0},scopedSlots:e._u([{key:"item.actions",fn:function({item:a}){return[t(n["a"],[t("app-RestoreAdvanceTrashed",{attrs:{payment:a},on:{success:function(t){return e.updateSuccessAlert(t)},failed:function(t){return e.updateFaileAlert(t)}}}),t(m["a"]),t("app-DeleteAdvanceTrashed",{staticClass:"ml-5",attrs:{payment:a},on:{success:function(t){return e.deleteAlert(t)},failed:function(t){return e.faileAlert(t)}}})],1)]}}],null,!0)})],1)]],2)],1)],1)]],2)],1)},v=[],g=a("3a94"),y=a("4e93"),b={components:{"app-DeleteAdvanceTrashed":g["a"],"app-RestoreAdvanceTrashed":y["a"]},data(){return{monthActivePicker:null,month:(new Date).getFullYear()+"-"+String((new Date).getMonth()+1).padStart(2,"0"),monthMenu:!1,search:"",headers:[{text:"ID",align:"start",sortable:!1,value:"advanceID"},{text:"TEACHER",sortable:!1,value:"teacher.teacherName"},{text:"DESCRIPTION",sortable:!1,value:"description"},{text:"AMOUNT(Rs.)",sortable:!0,value:"advanceAmount"},{text:"DELETED AT",sortable:!0,value:"deleted_at"},{text:"STAFF",sortable:!0,value:"handledBy.staffName"},{value:"actions",sortable:!1,align:"start"}],paymentDetails:[],paymentSuccessAlert:!1,successAlert:!1,unsuccessAlert:!1,unsuccessAlertUpdate:!1,successAlertUpdate:!1}},created(){this.getPaymentDetails()},methods:{getPaymentDetails(){this.axios.get(this.$apiUrl+"/api/v1.0/AdvanceManagement/advances/trashed",{params:{employeeType:"teacher",date:this.month}}).then(e=>this.paymentDetails=e.data.advance.data)},deleteAlert(e){this.getPaymentDetails(),this.successAlert=e},faileAlert(e){this.unsuccessAlert=e},paymentAlertSuccess(e){this.todayCollection(),this.getPaymentDetails(),this.paymentSuccessAlert=e},updateSuccessAlert(e){this.successAlertUpdate=e,this.getPaymentDetails()},updateFaileAlert(e){this.unsuccessAlertUpdate=e}}},A=b,_=a("2877"),x=Object(_["a"])(A,f,v,!1,null,null,null);t["a"]=x.exports}}]);
//# sourceMappingURL=chunk-d2fe80dc.20531621.js.map