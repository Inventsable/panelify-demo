(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["c4c8d234"],{8180:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"},on:{click:function(e){return t.$emit("change")}}},[n("q-item-section",{attrs:{side:"",top:""}},[n("q-checkbox",{attrs:{value:t.val}})],1),n("q-item-section",{staticStyle:{"user-select":"none"}},[n("q-item-label",[t._v(t._s(t.name))]),n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.caption))])],1)],1)},r=[],i={props:{val:Boolean,name:String,caption:String}},c=i,s=n("2877"),o=n("eebe"),l=n.n(o),u=n("66e5"),p=n("4074"),f=n("8f8e"),d=n("0170"),m=n("714f"),b=Object(s["a"])(c,a,r,!1,null,null,null);e["default"]=b.exports;l()(b,"components",{QItem:u["a"],QItemSection:p["a"],QCheckbox:f["a"],QItemLabel:d["a"]}),l()(b,"directives",{Ripple:m["a"]})},"820d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticStyle:{height:"56px","padding-top":"6px"},attrs:{tag:"label",dense:""}},[n("q-item-section",{staticStyle:{"margin-left":"56px","padding-bottom":"16px"},attrs:{avatar:""}},[n("span",{staticStyle:{"user-select":"none"}},[t._v(t._s(t.name))])]),n("q-item-section",[n("q-item-label",[n("q-input",{staticStyle:{width:"60px"},attrs:{debounce:"500",suffix:"px",dense:"",type:"number",rules:[function(t){return!!t||"What? "},function(t){return t>=1||"Must be greater than 0"}]},model:{value:t.fakeText,callback:function(e){t.fakeText=t._n(e)},expression:"fakeText"}})],1)],1)],1)},r=[],i=(n("c5f6"),{props:{text:Number,name:String},computed:{fakeText:{get:function(){return this.text},set:function(t){(0==t||t<0)&&(t=1),this.$emit("change",t||1)}}}}),c=i,s=(n("ddab"),n("2877")),o=n("eebe"),l=n.n(o),u=n("66e5"),p=n("4074"),f=n("0170"),d=n("27f9"),m=n("8572"),b=n("714f"),g=Object(s["a"])(c,a,r,!1,null,null,null);e["default"]=g.exports;l()(g,"components",{QItem:u["a"],QItemSection:p["a"],QItemLabel:f["a"],QInput:d["a"],QField:m["a"]}),l()(g,"directives",{Ripple:b["a"]})},"97df":function(t,e,n){},b41f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",[n("q-list",[n("q-item-label",{attrs:{header:""}},[t._v("General")]),n("settings-item-checkbox",{attrs:{val:t.autoUpdate,name:"Auto Update",caption:"Allow the panel to update automatically"},on:{change:function(e){t.autoUpdate=!t.autoUpdate}}})],1),n("div",{staticClass:"q-pa-md row"},[n("q-btn",{staticClass:"col",attrs:{flat:"",color:"red-8"},on:{click:t.reset}},[t._v("Reset all settings and memory")])],1)],1)},r=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("967e")),c=n.n(i),s=(n("96cf"),n("c47a")),o=n.n(s),l=n("2f62");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={components:{"settings-item-checkbox":n("8180").default,"settings-item-input":n("820d").default},data:function(){return{text:""}},computed:p({},Object(l["c"])("settings",["settings"]),{app:function(){return this.$root.$children[0]},autoUpdate:{get:function(){return this.settings.autoUpdate},set:function(t){this.setAutoUpdate(t)}}}),mounted:function(){return c.a.async((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}))},methods:p({},Object(l["b"])("settings",["setAutoUpdate"]),{reset:function(){console.log("Hello?"),this.app.reset()}})},d=f,m=n("2877"),b=n("eebe"),g=n.n(b),h=n("9989"),v=n("1c1c"),x=n("0170"),O=n("9c40"),y=Object(m["a"])(d,a,r,!1,null,null,null);e["default"]=y.exports;g()(y,"components",{QPage:h["a"],QList:v["a"],QItemLabel:x["a"],QBtn:O["a"]})},ddab:function(t,e,n){"use strict";var a=n("97df"),r=n.n(a);r.a}}]);