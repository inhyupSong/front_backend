(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11a0e780"],{"28c1":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list row"},[n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search by title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:e.searchTitle}},[e._v(" Search ")])])])]),n("div",{staticClass:"col-md-6"},[n("h4",[e._v("People List")]),n("ul",{staticClass:"list-group"},e._l(e.people,(function(t,r){return n("li",{key:r,staticClass:"list-group-item",class:{active:r==e.currentIndex},on:{click:function(n){return e.setActivePerson(t,r)}}},[e._v(" "+e._s(t.title)+" ")])})),0),n("button",{staticClass:"m-3 btn btn-sm btn-danger",on:{click:e.removeAllPeople}},[e._v(" Remove All ")])]),n("div",{staticClass:"col-md-6"},[e.currentPerson?n("div",[n("h4",[e._v("Person")]),n("div",[e._m(0),e._v(" "+e._s(e.currentPerson.title)+" ")]),n("div",[e._m(1),e._v(" "+e._s(e.currentPerson.sex)+" ")]),n("div",[e._m(2),e._v(" "+e._s(e.currentPerson.firstname)+" ")]),n("div",[e._m(3),e._v(" "+e._s(e.currentPerson.lastname)+" ")]),n("div",[e._m(4),e._v(" "+e._s(e.currentPerson.street)+" ")]),n("div",[e._m(5),e._v(" "+e._s(e.currentPerson.house_nr)+" ")]),n("div",[e._m(6),e._v(" "+e._s(e.currentPerson.region)+" ")]),n("div",[e._m(7),e._v(" "+e._s(e.currentPerson.post_nr)+" ")]),n("div",[e._m(8),e._v(" "+e._s(e.currentPerson.state)+" ")]),n("div",[e._m(9),e._v(" "+e._s(e.currentPerson.country)+" ")]),n("div",[e._m(10),e._v(" "+e._s(e.currentPerson.email)+" ")]),n("div",[e._m(11),e._v(" "+e._s(e.currentPerson.phone_nr)+" ")]),n("div",[e._m(12),e._v(" "+e._s(e.currentPerson.mobile_nr)+" ")]),n("div",[e._m(13),e._v(" "+e._s(e.currentPerson.extra_infos)+" ")]),n("div",[e._m(14),e._v(" "+e._s(e.currentPerson.published?"Published":"Pending")+" ")]),n("a",{staticClass:"badge badge-warning",attrs:{href:"/people/"+e.currentPerson.id}},[e._v(" Edit ")])]):n("div",[n("br"),n("p",[e._v("Please click on a Person...")])])])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Title:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Sex:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("First Name:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Last Name:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Street:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("House Nr.:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Region:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Post Nr.:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("State:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Country:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("email:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Phone Nr.:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Mobile Nr.:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Extra infos:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Status:")])])}],l=n("267f"),i={name:"people-list",data:function(){return{people:[],currentPerson:null,currentIndex:-1,title:""}},methods:{retrievePeople:function(){var e=this;l["a"].getAll().then((function(t){e.people=t.data,console.log(t.data)})).catch((function(e){console.log(e)}))},refreshList:function(){this.retrievePeople(),this.currentPerson=null,this.currentIndex=-1},setActivePerson:function(e,t){this.currentPerson=e,this.currentIndex=t},removeAllPeople:function(){var e=this;l["a"].deleteAll().then((function(t){console.log(t.data),e.refreshList()})).catch((function(e){console.log(e)}))},searchTitle:function(){var e=this;l["a"].findByTitle(this.title).then((function(t){e.people=t.data,console.log(t.data)})).catch((function(e){console.log(e)}))}},mounted:function(){this.retrievePeople()}},o=i,c=(n("8b2d"),n("2877")),a=Object(c["a"])(o,r,s,!1,null,null,null);t["default"]=a.exports},"8b2d":function(e,t,n){"use strict";n("9d84")},"9d84":function(e,t,n){}}]);
//# sourceMappingURL=chunk-11a0e780.8a3dd3a6.js.map