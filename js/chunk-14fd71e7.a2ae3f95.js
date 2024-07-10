(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14fd71e7"],{3353:function(e,s,a){"use strict";a("9ce7")},"9ce7":function(e,s,a){},a5e1:function(e,s,a){"use strict";a.r(s);var t=a("2bc5"),r=a("8336"),c=a("b0af"),d=a("99d9"),n=a("a523"),i=a("ce7e"),o=a("132d"),l=a("0fd9"),v=a("2db4"),h=function(){var e=this,s=e._self._c;return s("div",[s(t["a"],{attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[s(o["a"],[e._v("mdi-chevron-right")])]},proxy:!0}])}),s(n["a"],[s(v["a"],{attrs:{timeout:3e3,color:"red",bottom:""},model:{value:e.unsuccessAlert,callback:function(s){e.unsuccessAlert=s},expression:"unsuccessAlert"}},[s(o["a"],{attrs:{left:""}},[e._v("mdi-alert-outline")]),e._v("Process end "),s("strong",[e._v("failed")])],1),s(v["a"],{attrs:{timeout:3e3,color:"green",bottom:""},model:{value:e.successAlert,callback:function(s){e.successAlert=s},expression:"successAlert"}},[s(o["a"],{attrs:{left:""}},[e._v("mdi-check")]),e._v("Process end "),s("strong",[e._v("successful")])],1),s(c["a"],{staticStyle:{margin:"auto"},attrs:{flat:"","max-width":"750px"}},[s(d["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[e._v("Ordinary Level End Process")]),s(l["a"],{staticStyle:{padding:"12px"},attrs:{justify:"center"}},[s(d["c"],[e._v(" End process. ")]),s("div",{staticClass:"px-2 mb-5"},[s(r["a"],{staticClass:"primary",attrs:{loading:e.loading1,disabled:e.showOrdinaryLevel,block:"",depressed:"","x-large":""},on:{click:function(s){return e.endProcessOrdinaryLevel()}}},[e._v("End Batch "),s(o["a"],{attrs:{right:""}},[e._v("mdi-archive-cog")])],1)],1)],1),s(i["a"],{directives:[{name:"show",rawName:"v-show",value:e.showOrdinaryLevel,expression:"showOrdinaryLevel"}]}),s(l["a"],{staticStyle:{padding:"12px"},attrs:{justify:"center"}},[s(d["c"],{directives:[{name:"show",rawName:"v-show",value:e.showOrdinaryLevel,expression:"showOrdinaryLevel"}]},[e._v(" Updated_at: "),s("strong",[e._v(e._s(e.processOrdinaryLevel.updated_at))]),s("br"),e._v(" Staff member: "),s("strong",[e._v(e._s(e.processOrdinaryLevel.handledBy.staffName))]),s("br")])],1)],1),s(c["a"],{staticClass:"mt-10",staticStyle:{margin:"auto"},attrs:{flat:"","max-width":"750px"}},[s(d["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[e._v("Advanced Level End Process")]),s(l["a"],{staticStyle:{padding:"12px"},attrs:{justify:"center"}},[s(d["c"],[e._v(" End process. ")]),s("div",{staticClass:"px-2 mb-5"},[s(r["a"],{staticClass:"primary",attrs:{loading:e.loading2,disabled:e.showAdvancedLevel,block:"",depressed:"","x-large":""},on:{click:function(s){return e.endProcessAdvancedLevel()}}},[e._v("End Batch "),s(o["a"],{attrs:{right:""}},[e._v("mdi-archive-cog")])],1)],1)],1),s(i["a"],{directives:[{name:"show",rawName:"v-show",value:e.showAdvancedLevel,expression:"showAdvancedLevel"}]}),s(l["a"],{staticStyle:{padding:"12px"},attrs:{justify:"center"}},[s(d["c"],{directives:[{name:"show",rawName:"v-show",value:e.showAdvancedLevel,expression:"showAdvancedLevel"}]},[e._v(" Updated_at: "),s("strong",[e._v(e._s(e.processAdvancedLevel.updated_at))]),s("br"),e._v(" Staff member: "),s("strong",[e._v(e._s(e.processAdvancedLevel.handledBy.staffName))]),s("br")])],1)],1)],1)],1)},p=[],u={components:{},data(){return{loading1:!1,loading2:!1,showOrdinaryLevel:!1,showAdvancedLevel:!1,processOrdinaryLevel:{updated_at:"",handledBy:{staffName:""}},processAdvancedLevel:{updated_at:"",handledBy:{staffName:""}},breadcrumbs:[{text:"Processes",disabled:!1,href:"/Processes"},{text:"Batch End Process",disabled:!0,href:"/Processes/BatchEndProcess"}],successAlert:!1,unsuccessAlert:!1}},created(){this.getAdvancedLevelProcess(),this.getOrdinaryLevelProcess()},methods:{getAdvancedLevelProcess(){this.axios.get(this.$apiUrl+"/api/v1.0/ProcessManagement/processes/showAdvancedLevelEnd").then(e=>(this.setDataAdvancedLevel(e),this.checkResponseAdvancedLevel(e.data.success)))},getOrdinaryLevelProcess(){this.axios.get(this.$apiUrl+"/api/v1.0/ProcessManagement/processes/showOrdinaryLevelEnd").then(e=>(this.setDataOrdinaryLevel(e),this.checkResponseOrdinaryLevel(e.data.success)))},setDataAdvancedLevel(e){e.data.process&&(this.processAdvancedLevel=e.data.process)},setDataOrdinaryLevel(e){e.data.process&&(this.processOrdinaryLevel=e.data.process)},checkResponseAdvancedLevel(e){this.showAdvancedLevel=1==e},checkResponseOrdinaryLevel(e){this.showOrdinaryLevel=1==e},endProcessAdvancedLevel(){const e=JSON.parse(localStorage.getItem("user"));this.loading2=!0,this.axios.post(this.$apiUrl+"/api/v1.0/ProcessManagement/processes/advancedLevelEnd",{handlerStaffID:e.employee.employeeID,branchID:e.employee.branch.branchID}).then(e=>{1==e.data.success?(this.loading2=!1,this.getAdvancedLevelProcess(),this.successAlert=!0):this.unsuccessAlert=!0}).catch(e=>{this.loading2=!1,this.unsuccessAlert=!0,console.log(e.data)})},endProcessOrdinaryLevel(){const e=JSON.parse(localStorage.getItem("user"));this.loading1=!0,this.axios.post(this.$apiUrl+"/api/v1.0/ProcessManagement/processes/ordinaryLevelEnd",{handlerStaffID:e.employee.employeeID,branchID:e.employee.branch.branchID}).then(e=>{1==e.data.success?(this.loading1=!1,this.getOrdinaryLevelProcess(),this.successAlert=!0):this.unsuccessAlert=!0}).catch(e=>{this.loading1=!1,this.unsuccessAlert=!0,console.log(e.data)})}}},g=u,m=(a("3353"),a("2877")),y=Object(m["a"])(g,h,p,!1,null,"dcef69da",null);s["default"]=y.exports}}]);
//# sourceMappingURL=chunk-14fd71e7.a2ae3f95.js.map