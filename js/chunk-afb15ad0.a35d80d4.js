(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-afb15ad0"],{"1a36":function(t,e,a){"use strict";a.r(e);var s=a("2bc5"),n=a("b0af"),i=a("99d9"),l=a("a523"),r=a("8fea"),d=a("132d"),u=a("2fa4"),c=a("8654"),o=function(){var t=this,e=t._self._c;return e("div",[e(s["a"],{attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(d["a"],[t._v("mdi-chevron-right")])]},proxy:!0}])}),e(l["a"],[[e(n["a"],{attrs:{flat:""}},[e(i["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[t._v("Exam Marks")]),e(i["d"],[e(u["a"]),e(c["a"],{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),[e("div",[e(r["a"],{attrs:{headers:t.headers,items:t.exams,search:t.search},scopedSlots:t._u([{key:"item.actions",fn:function({item:a}){return[e(i["a"],[e("app-ExamMarks",{attrs:{examDetails:a},on:{success:function(e){return t.reCreate(e)}}})],1)]}}],null,!0)})],1)]],2)]],2)],1)},h=[],m=(a("14d9"),a("8336")),f=a("cc20"),g=a("62ad"),b=a("169a"),k=a("ce7e"),x=a("0fd9"),v=a("b974"),p=a("2db4"),_=function(){var t=this,e=t._self._c;return e(x["a"],{attrs:{justify:"start"}},[e(b["a"],{attrs:{scrollable:"","max-width":"700px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(m["a"],t._g(t._b({staticClass:"primary",attrs:{small:"",dark:"",depressed:""},on:{click:function(e){t.getAllStudent(),t.getAttendance()}}},"v-btn",s,!1),a),[t._v("Marks sheet"),e(d["a"],{attrs:{dark:"",right:""}},[t._v("mdi-file-document-edit")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(n["a"],{attrs:{"max-width":"700",flat:""}},[e(i["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[t._v("Marks sheet "),e(u["a"]),t.isEditing?t._e():e("app-AddOneStudentToMarkList",{staticClass:"mr-2",attrs:{examDetails:t.examDetails},on:{success:function(e){return t.StudentAddSuccessAlert(e)},failed:function(e){return t.StudentAddFaileAlert(e)}}}),t.isEditing?t._e():e(m["a"],{attrs:{depressed:"",color:"blue-grey",dark:""},on:{click:function(e){t.isEditing=!t.isEditing}}},[t._v(" Edit "),e(d["a"],{attrs:{right:""}},[t._v("mdi-account-edit")])],1)],1),e(k["a"]),e(i["c"],{staticStyle:{height:"800px"}},[e("div",[e(i["c"],[t._v("This is marks sheet of "),e("strong",[t._v(t._s(t.examDetails.exam))]),t._v(" exam. These marks are out of "),e(f["a"],{attrs:{small:""}},[e("strong",[t._v(t._s(t.totalMark))])]),t._v(". If the student is absent, please mark it as "),e("strong",[t._v("Ab")])],1),t.isEditing?t._e():e(n["a"],{attrs:{flat:"",color:"grey lighten-3"}},[e(x["a"],[e(g["a"],[e(i["c"],[t._v("Present student count : "),e(f["a"],{attrs:{outlined:"",small:"",color:"blue"}},[t._v(t._s(t.presentCount))])],1),e(i["c"],[t._v("Absent student count : "),e(f["a"],{attrs:{color:"red",small:"",outlined:""}},[t._v(t._s(t.absentCount))])],1)],1),e(k["a"],{attrs:{vertical:""}}),e(g["a"],[e(i["c"],[e(v["a"],{attrs:{items:t.selection,label:"Filter students"},on:{change:function(e){return t.filterStudents()}},model:{value:t.filtering,callback:function(e){t.filtering=e},expression:"filtering"}}),e(c["a"],{directives:[{name:"show",rawName:"v-show",value:t.showHighMark,expression:"showHighMark"}],attrs:{clearable:"",label:"Marks onward from:",rules:t.numberRules&&[t.markLimit],maxlength:"3",dense:""},on:{change:function(e){return t.getHighMarksStudent()}},model:{value:t.highMark,callback:function(e){t.highMark=e},expression:"highMark"}})],1)],1)],1)],1),e(i["d"],[e(u["a"]),e(c["a"],{attrs:{"persistent-hint":"",hint:"*Use Name OR ID to search for a student","append-icon":"mdi-magnify",label:"Search","single-line":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),[e(r["a"],{attrs:{headers:t.headers,items:t.students,search:t.search,"item-key":"studentID"},scopedSlots:t._u([{key:"item.actions",fn:function({item:a}){return[e(i["a"],[e(c["a"],{staticClass:"centered-input",staticStyle:{width:"70px"},attrs:{readonly:!t.isEditing,rules:[t.markLimit],maxlength:"3",dense:""},on:{change:function(e){return t.markStudentMarks(a.studentID,a.mark)}},model:{value:a.mark,callback:function(e){t.$set(a,"mark",e)},expression:"item.mark"}})],1)]}}],null,!0)})]],2)]),e(k["a"]),e(i["a"],[e(u["a"]),t.isEditing?e(m["a"],{attrs:{outlined:"",color:"grey",disabled:t.btnDisabled},on:{click:function(e){t.cancelEdit(),t.getAllStudent(),t.getAttendance()}}},[t._v("Cancel")]):t._e(),t.isEditing?e(m["a"],{attrs:{color:"primary",depressed:"",disabled:t.btnDisabled},on:{click:function(e){t.cancelEdit(),t.getAllStudent(),t.getAttendance()}}},[t._v("Ok")]):t._e(),t.isEditing?t._e():e(m["a"],{attrs:{color:"primary",depressed:"",disabled:t.btnDisabled},on:{click:function(e){t.dialog=!1}}},[t._v("Ok")])],1),e(p["a"],{attrs:{timeout:2e3,absolute:"",bottom:"",left:"",color:"green"},model:{value:t.successfulAlert,callback:function(e){t.successfulAlert=e},expression:"successfulAlert"}},[t._v("Marks has been updated")]),e(p["a"],{attrs:{timeout:3e3,color:"red",absolute:"",bottom:"",left:""},model:{value:t.unSuccessfulAlert,callback:function(e){t.unSuccessfulAlert=e},expression:"unSuccessfulAlert"}},[e(d["a"],{attrs:{left:""}},[t._v("mdi-alert-outline")]),t._v("Update failed ")],1),e(p["a"],{attrs:{timeout:3e3,absolute:"",bottom:"",color:"green"},model:{value:t.addStudentSuccessful,callback:function(e){t.addStudentSuccessful=e},expression:"addStudentSuccessful"}},[e(d["a"],{attrs:{left:""}},[t._v("mdi-check")]),t._v("Add student "),e("strong",[t._v("successfully")])],1),e(p["a"],{attrs:{timeout:3e3,absolute:"",bottom:"",color:"red"},model:{value:t.addStudentUnsuccessful,callback:function(e){t.addStudentUnsuccessful=e},expression:"addStudentUnsuccessful"}},[e(d["a"],{attrs:{left:""}},[t._v("mdi-alert-outline")]),t._v("Add student "),e("strong",[t._v("failed")]),t._v(". Please check STUDENT ID")],1)],1)],1)],1)},S=[],A=a("4bd4"),D=function(){var t=this,e=t._self._c;return e(x["a"],{attrs:{justify:"end"}},[e(b["a"],{attrs:{scrollable:"","max-width":"500px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(m["a"],t._g(t._b({staticClass:"blue-grey",attrs:{dark:"",depressed:""}},"v-btn",s,!1),a),[t._v("Add student"),e(d["a"],{attrs:{dark:"",right:""}},[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(n["a"],{attrs:{"max-width":"500",flat:""}},[e(i["d"],{staticClass:"heading-1 blue-grey lighten-4 blue-grey--text text--darken-2"},[t._v("Add student")]),e(k["a"]),e(i["c"],{staticClass:"mt-2"},[t._v(" Add individual student to the "),e("strong",[t._v(t._s(t.examDetails.exam))]),t._v(" marks list. ")]),e(i["c"],[e(A["a"],{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(x["a"],{attrs:{justify:"center",dense:"",align:"center"}},[e(g["a"],{attrs:{cols:"12",md:"12",sm:"12"}},[e(c["a"],{attrs:{label:"Student ID",placeholder:"ICTAxxxxxxx",rules:t.studentIdRule,maxlength:"11",clearable:""},model:{value:t.studentID,callback:function(e){t.studentID=e},expression:"studentID"}})],1)],1)],1)],1),e(k["a"]),e(i["a"],[e(u["a"]),e(m["a"],{attrs:{outlined:"",color:"grey"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),e(m["a"],{attrs:{loading:t.loading,color:"primary",disabled:!t.valid||""==t.studentID,depressed:""},on:{click:function(e){return t.addToList()}}},[t._v("Add to Attendance")])],1)],1),e(p["a"],{attrs:{timeout:3e3,absolute:"",bottom:"",color:"red"},model:{value:t.addStudentUnsuccessful,callback:function(e){t.addStudentUnsuccessful=e},expression:"addStudentUnsuccessful"}},[e(d["a"],{attrs:{left:""}},[t._v("mdi-alert-outline")]),t._v("Add student "),e("strong",[t._v("failed")]),t._v(". Please check STUDENT ID")],1)],1)],1)},M=[],I={props:["examDetails"],data(){return{dialog:!1,studentID:"",loading:!1,valid:!0,studentIdRule:[t=>!!t||"Student ID is required",t=>/ICTA+\d\d\d\d\d\d\d/.test(t)||"Invalid student ID",t=>t&&11==t.length||"Invalid student ID"],addStudentUnsuccessful:!1}},methods:{addToList(){this.$refs.form.validate()&&(this.loading=!0,this.axios.post(this.$apiUrl+"/api/v1.0/MarkManagement/students",{studentID:this.studentID,examID:this.examDetails.examID}).then(t=>{1==t.data.success?(this.dialog=!1,this.successAlert(),this.loading=!1,this.Reset()):this.addStudentUnsuccessful=!0}).catch(t=>{this.loading=!1,this.addStudentUnsuccessful=!0,console.log(t.data)}))},Reset(){this.$refs.form.reset()},successAlert(){this.$emit("success",!0)},failedAlert(){this.$emit("failed",!0)}}},y=I,E=(a("517f"),a("2877")),w=Object(E["a"])(y,D,M,!1,null,"30e31ff1",null),C=w.exports,U={components:{"app-AddOneStudentToMarkList":C},props:["examDetails"],data(){return{dialog:!1,valid:!0,isEditing:null,btnDisabled:!1,filtering:"",presentCount:"",absentCount:"",totalMark:"",markValid:!1,highMark:"",showHighMark:!1,search:"",headers:[{text:"STUDENT",align:"start",sortable:!1,value:"studentName"},{text:"ID",align:"start",sortable:!1,value:"studentID"},{text:"MARK",sortable:!0,value:"actions",align:"center"}],students:[],marks:[],successfulAlert:!1,unSuccessfulAlert:!1,addStudentUnsuccessful:!1,addStudentSuccessful:!1,numberRules:[t=>/^\d+$/.test(t)||"Must be numbers only"],textRules:[t=>/^[Ab]{2}$/.test(t)||"If Absent enter <strong>Ab</strong>"],selection:["All students","Absent students"]}},methods:{filterStudents(){"Absent students"==this.filtering?(this.showHighMark=!1,this.getAbsentStudent()):"All students"==this.filtering?(this.showHighMark=!1,this.getAllStudent()):"High marks"==this.filtering&&(this.showHighMark=!0)},getAbsentStudent(){this.axios.get(this.$apiUrl+"/api/v1.0/MarkManagement/exams/"+this.examDetails.examID+"/absent").then(t=>this.students=t.data.mark.students)},getHighMarksStudent(){1==this.markValid&&(console.log(this.highMark),this.axios.get(this.$apiUrl+"/api/v1.0/MarkManagement/exams/"+this.examDetails.examID+"/marksAbove",{params:{mark:this.highMark}}).then(t=>(console.log(t.data.mark.students),this.students=t.data.mark.students)))},getAttendance(){this.axios.get(this.$apiUrl+"/api/v1.0/MarkManagement/exams/"+this.examDetails.examID+"/attendCount").then(t=>(this.presentCount=t.data.present_count,this.absentCount=t.data.absent_count))},markLimit(t){return"Ab"!=t?t<=this.totalMark?(this.markValid=!0,!0):(this.markValid=!1,"Invalid mark"):(this.markValid=!0,!0)},getAllStudent(){this.axios.get(this.$apiUrl+"/api/v1.0/MarkManagement/exams/"+this.examDetails.examID).then(t=>(this.students=t.data.mark.students,this.students.forEach(t=>{t.showEdit=!1}),this.totalMark=t.data.mark.totalMark))},markStudentMarks(t,e){1==this.markValid&&(this.btnDisabled=!0,this.axios.patch(this.$apiUrl+"/api/v1.0/MarkManagement/students/"+t+"/exams/"+this.examDetails.examID,{mark:e}).then(t=>{1==t.data.success?(this.successfulAlert=!0,this.btnDisabled=!1):(this.unSuccessfulAlert=!0,this.btnDisabled=!1)}).catch(t=>{this.btnDisabled=!1,this.unSuccessfulAlert=!0,console.log(t)}))},cancelEdit(){this.isEditing=!this.isEditing},StudentAddSuccessAlert(t){this.getAllStudent(),this.getAttendance(),this.addStudentSuccessful=t},StudentAddFaileAlert(t){this.addStudentUnsuccessful=t}}},T=U,$=(a("ef88"),Object(E["a"])(T,_,S,!1,null,"c96eaf08",null)),R=$.exports,H={components:{"app-ExamMarks":R},data(){return{menu:!1,search:"",headers:[{text:"EXAM",align:"start",sortable:!1,value:"exam"},{text:"CLASS",sortable:!1,value:"class.className"},{text:"GRADE",sortable:!0,value:"class.grade",width:"8%"},{text:"BRANCH",sortable:!1,value:"branchID.branchName"},{text:"",sortable:!1,value:"actions",align:"end"}],exams:[],examsForClass:[],classes:[],breadcrumbs:[{text:"Exams",disabled:!1,href:"/Exams"},{text:"Exam Marks",disabled:!0,href:"/Exams/ExamDetails"}]}},created(){this.getAllExams()},methods:{getAllExams(){const t=JSON.parse(localStorage.getItem("user"));this.axios.get(this.$apiUrl+"/api/v1.0/TeacherManagement/teachers/"+t.employee.employeeID+"/classes").then(t=>(this.classes=t.data.teacher.classes,this.classes.forEach(t=>{t.exams.length>0&&t.exams.forEach(t=>{this.exams.push(t)})})))}}},N=H,O=Object(E["a"])(N,o,h,!1,null,null,null);e["default"]=O.exports},"517f":function(t,e,a){"use strict";a("8af6")},"8af6":function(t,e,a){},b4ff:function(t,e,a){},ef88:function(t,e,a){"use strict";a("b4ff")}}]);
//# sourceMappingURL=chunk-afb15ad0.a35d80d4.js.map