var __defProp=Object.defineProperty,__defNormalProp=(e,t,n)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,__publicField=(e,t,n)=>(__defNormalProp(e,"symbol"!=typeof t?t+"":t,n),n);!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("quasar"),require("vue"),require("shortid")):"function"==typeof define&&define.amd?define(["exports","quasar","vue","shortid"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["@herodotus/form-engine"]={},e.quasar,e.vue,e.shortid)}(this,(function(e,t,n,r){"use strict";const o=(e,t,r)=>e.map((e=>{const a=e.children?e.children:[],c=e.models?e.models:{};let i={};return c&&(i=((e,t,n)=>{let r={};return Object.keys(e).forEach((e=>{const o=((e,t,n)=>{const r=(e=>"onUpdate:"+e)(e),o=(e=>"update:"+e)(e),a={};return a[e]=t[e],a[r]=e=>{n.emit(o,e)},{...a}})(e,t,n);r=Object.assign(r,o)})),r})(c,t,r)),e.children?n.h(n.resolveComponent(e.tag),{...e.attrs,...i},(()=>o(a,t,r))):n.h(n.resolveComponent(e.tag),{...e.attrs,...i},e.text?()=>e.text:()=>{})}));const a="object"==typeof global&&global&&global.Object===Object&&global;var c="object"==typeof self&&self&&self.Object===Object&&self;const i=a||c||Function("return this")();const s=i.Symbol;var u=Object.prototype,l=u.hasOwnProperty,d=u.toString,m=s?s.toStringTag:void 0;var f=Object.prototype.toString;var p=s?s.toStringTag:void 0;function h(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":p&&p in Object(e)?function(e){var t=l.call(e,m),n=e[m];try{e[m]=void 0;var r=!0}catch(a){}var o=d.call(e);return r&&(t?e[m]=n:delete e[m]),o}(e):function(e){return f.call(e)}(e)}function b(e){return null!=e&&"object"==typeof e}const y=Array.isArray;function _(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function v(e){if(!_(e))return!1;var t=h(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}const j=i["__core-js_shared__"];var g,O=(g=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+g:"";var E=Function.prototype.toString;function S(e){if(null!=e){try{return E.call(e)}catch(t){}try{return e+""}catch(t){}}return""}var I=/^\[object .+?Constructor\]$/,A=Function.prototype,w=Object.prototype,R=A.toString,T=w.hasOwnProperty,C=RegExp("^"+R.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function P(e){return!(!_(e)||(t=e,O&&O in t))&&(v(e)?C:I).test(S(e));var t}function D(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return P(n)?n:void 0}const N=D(i,"WeakMap");var x=Object.create;const L=function(){function e(){}return function(t){if(!_(t))return{};if(x)return x(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const q=function(){try{var e=D(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();var F=/^(?:0|[1-9]\d*)$/;function z(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&F.test(e))&&e>-1&&e%1==0&&e<t}function M(e,t,n){"__proto__"==t&&q?q(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function B(e,t){return e===t||e!=e&&t!=t}var V=Object.prototype.hasOwnProperty;function k(e,t,n){var r=e[t];V.call(e,t)&&B(r,n)&&(void 0!==n||t in e)||M(e,t,n)}function H(e,t,n,r){var o=!n;n||(n={});for(var a=-1,c=t.length;++a<c;){var i=t[a],s=r?r(n[i],e[i],i,n,e):void 0;void 0===s&&(s=e[i]),o?M(n,i,s):k(n,i,s)}return n}function U(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}function K(e){return null!=e&&U(e.length)&&!v(e)}var X=Object.prototype;function G(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||X)}function W(e){return b(e)&&"[object Arguments]"==h(e)}var $=Object.prototype,Q=$.hasOwnProperty,J=$.propertyIsEnumerable,Y=W(function(){return arguments}())?W:function(e){return b(e)&&Q.call(e,"callee")&&!J.call(e,"callee")};const Z=Y;var ee="object"==typeof e&&e&&!e.nodeType&&e,te=ee&&"object"==typeof module&&module&&!module.nodeType&&module,ne=te&&te.exports===ee?i.Buffer:void 0;const re=(ne?ne.isBuffer:void 0)||function(){return!1};var oe={};function ae(e){return function(t){return e(t)}}oe["[object Float32Array]"]=oe["[object Float64Array]"]=oe["[object Int8Array]"]=oe["[object Int16Array]"]=oe["[object Int32Array]"]=oe["[object Uint8Array]"]=oe["[object Uint8ClampedArray]"]=oe["[object Uint16Array]"]=oe["[object Uint32Array]"]=!0,oe["[object Arguments]"]=oe["[object Array]"]=oe["[object ArrayBuffer]"]=oe["[object Boolean]"]=oe["[object DataView]"]=oe["[object Date]"]=oe["[object Error]"]=oe["[object Function]"]=oe["[object Map]"]=oe["[object Number]"]=oe["[object Object]"]=oe["[object RegExp]"]=oe["[object Set]"]=oe["[object String]"]=oe["[object WeakMap]"]=!1;var ce="object"==typeof e&&e&&!e.nodeType&&e,ie=ce&&"object"==typeof module&&module&&!module.nodeType&&module,se=ie&&ie.exports===ce&&a.process;const ue=function(){try{var e=ie&&ie.require&&ie.require("util").types;return e||se&&se.binding&&se.binding("util")}catch(t){}}();var le=ue&&ue.isTypedArray;const de=le?ae(le):function(e){return b(e)&&U(e.length)&&!!oe[h(e)]};var me=Object.prototype.hasOwnProperty;function fe(e,t){var n=y(e),r=!n&&Z(e),o=!n&&!r&&re(e),a=!n&&!r&&!o&&de(e),c=n||r||o||a,i=c?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],s=i.length;for(var u in e)!t&&!me.call(e,u)||c&&("length"==u||o&&("offset"==u||"parent"==u)||a&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||z(u,s))||i.push(u);return i}function pe(e,t){return function(n){return e(t(n))}}const he=pe(Object.keys,Object);var be=Object.prototype.hasOwnProperty;function ye(e){return K(e)?fe(e):function(e){if(!G(e))return he(e);var t=[];for(var n in Object(e))be.call(e,n)&&"constructor"!=n&&t.push(n);return t}(e)}var _e=Object.prototype.hasOwnProperty;function ve(e){if(!_(e))return function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}(e);var t=G(e),n=[];for(var r in e)("constructor"!=r||!t&&_e.call(e,r))&&n.push(r);return n}function je(e){return K(e)?fe(e,!0):ve(e)}const ge=D(Object,"create");var Oe=Object.prototype.hasOwnProperty;var Ee=Object.prototype.hasOwnProperty;function Se(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Ie(e,t){for(var n=e.length;n--;)if(B(e[n][0],t))return n;return-1}Se.prototype.clear=function(){this.__data__=ge?ge(null):{},this.size=0},Se.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Se.prototype.get=function(e){var t=this.__data__;if(ge){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Oe.call(t,e)?t[e]:void 0},Se.prototype.has=function(e){var t=this.__data__;return ge?void 0!==t[e]:Ee.call(t,e)},Se.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};var Ae=Array.prototype.splice;function we(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}we.prototype.clear=function(){this.__data__=[],this.size=0},we.prototype.delete=function(e){var t=this.__data__,n=Ie(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ae.call(t,n,1),--this.size,!0)},we.prototype.get=function(e){var t=this.__data__,n=Ie(t,e);return n<0?void 0:t[n][1]},we.prototype.has=function(e){return Ie(this.__data__,e)>-1},we.prototype.set=function(e,t){var n=this.__data__,r=Ie(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};const Re=D(i,"Map");function Te(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function Ce(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Pe(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}Ce.prototype.clear=function(){this.size=0,this.__data__={hash:new Se,map:new(Re||we),string:new Se}},Ce.prototype.delete=function(e){var t=Te(this,e).delete(e);return this.size-=t?1:0,t},Ce.prototype.get=function(e){return Te(this,e).get(e)},Ce.prototype.has=function(e){return Te(this,e).has(e)},Ce.prototype.set=function(e,t){var n=Te(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};const De=pe(Object.getPrototypeOf,Object);function Ne(e){var t=this.__data__=new we(e);this.size=t.size}Ne.prototype.clear=function(){this.__data__=new we,this.size=0},Ne.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Ne.prototype.get=function(e){return this.__data__.get(e)},Ne.prototype.has=function(e){return this.__data__.has(e)},Ne.prototype.set=function(e,t){var n=this.__data__;if(n instanceof we){var r=n.__data__;if(!Re||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ce(r)}return n.set(e,t),this.size=n.size,this};var xe="object"==typeof e&&e&&!e.nodeType&&e,Le=xe&&"object"==typeof module&&module&&!module.nodeType&&module,qe=Le&&Le.exports===xe?i.Buffer:void 0,Fe=qe?qe.allocUnsafe:void 0;function ze(){return[]}var Me=Object.prototype.propertyIsEnumerable,Be=Object.getOwnPropertySymbols;const Ve=Be?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var c=e[n];t(c,n,e)&&(a[o++]=c)}return a}(Be(e),(function(t){return Me.call(e,t)})))}:ze;const ke=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)Pe(t,Ve(e)),e=De(e);return t}:ze;function He(e,t,n){var r=t(e);return y(e)?r:Pe(r,n(e))}function Ue(e){return He(e,ye,Ve)}function Ke(e){return He(e,je,ke)}const Xe=D(i,"DataView");const Ge=D(i,"Promise");const We=D(i,"Set");var $e="[object Map]",Qe="[object Promise]",Je="[object Set]",Ye="[object WeakMap]",Ze="[object DataView]",et=S(Xe),tt=S(Re),nt=S(Ge),rt=S(We),ot=S(N),at=h;(Xe&&at(new Xe(new ArrayBuffer(1)))!=Ze||Re&&at(new Re)!=$e||Ge&&at(Ge.resolve())!=Qe||We&&at(new We)!=Je||N&&at(new N)!=Ye)&&(at=function(e){var t=h(e),n="[object Object]"==t?e.constructor:void 0,r=n?S(n):"";if(r)switch(r){case et:return Ze;case tt:return $e;case nt:return Qe;case rt:return Je;case ot:return Ye}return t});const ct=at;var it=Object.prototype.hasOwnProperty;const st=i.Uint8Array;function ut(e){var t=new e.constructor(e.byteLength);return new st(t).set(new st(e)),t}var lt=/\w*$/;var dt=s?s.prototype:void 0,mt=dt?dt.valueOf:void 0;function ft(e,t,n){var r,o,a,c=e.constructor;switch(t){case"[object ArrayBuffer]":return ut(e);case"[object Boolean]":case"[object Date]":return new c(+e);case"[object DataView]":return function(e,t){var n=t?ut(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(e,t){var n=t?ut(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}(e,n);case"[object Map]":case"[object Set]":return new c;case"[object Number]":case"[object String]":return new c(e);case"[object RegExp]":return(a=new(o=e).constructor(o.source,lt.exec(o))).lastIndex=o.lastIndex,a;case"[object Symbol]":return r=e,mt?Object(mt.call(r)):{}}}var pt=ue&&ue.isMap;const ht=pt?ae(pt):function(e){return b(e)&&"[object Map]"==ct(e)};var bt=ue&&ue.isSet;const yt=bt?ae(bt):function(e){return b(e)&&"[object Set]"==ct(e)};var _t="[object Arguments]",vt="[object Function]",jt="[object Object]",gt={};function Ot(e,t,n,r,o,a){var c,i=1&t,s=2&t,u=4&t;if(n&&(c=o?n(e,r,o,a):n(e)),void 0!==c)return c;if(!_(e))return e;var l=y(e);if(l){if(c=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&it.call(e,"index")&&(n.index=e.index,n.input=e.input),n}(e),!i)return function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}(e,c)}else{var d=ct(e),m=d==vt||"[object GeneratorFunction]"==d;if(re(e))return function(e,t){if(t)return e.slice();var n=e.length,r=Fe?Fe(n):new e.constructor(n);return e.copy(r),r}(e,i);if(d==jt||d==_t||m&&!o){if(c=s||m?{}:function(e){return"function"!=typeof e.constructor||G(e)?{}:L(De(e))}(e),!i)return s?function(e,t){return H(e,ke(e),t)}(e,function(e,t){return e&&H(t,je(t),e)}(c,e)):function(e,t){return H(e,Ve(e),t)}(e,function(e,t){return e&&H(t,ye(t),e)}(c,e))}else{if(!gt[d])return o?e:{};c=ft(e,d,i)}}a||(a=new Ne);var f=a.get(e);if(f)return f;a.set(e,c),yt(e)?e.forEach((function(r){c.add(Ot(r,t,n,r,e,a))})):ht(e)&&e.forEach((function(r,o){c.set(o,Ot(r,t,n,o,e,a))}));var p=l?void 0:(u?s?Ke:Ue:s?je:ye)(e);return function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););}(p||e,(function(r,o){p&&(r=e[o=r]),k(c,o,Ot(r,t,n,o,e,a))})),c}gt[_t]=gt["[object Array]"]=gt["[object ArrayBuffer]"]=gt["[object DataView]"]=gt["[object Boolean]"]=gt["[object Date]"]=gt["[object Float32Array]"]=gt["[object Float64Array]"]=gt["[object Int8Array]"]=gt["[object Int16Array]"]=gt["[object Int32Array]"]=gt["[object Map]"]=gt["[object Number]"]=gt[jt]=gt["[object RegExp]"]=gt["[object Set]"]=gt["[object String]"]=gt["[object Symbol]"]=gt["[object Uint8Array]"]=gt["[object Uint8ClampedArray]"]=gt["[object Uint16Array]"]=gt["[object Uint32Array]"]=!0,gt["[object Error]"]=gt[vt]=gt["[object WeakMap]"]=!1;const Et={TEXT_FIELD:{name:"TEXT_FIELD",schema:{title:"单行文本",tag:"q-input",attrs:{rounded:!0,filled:!0,label:"单行文本",type:"text"},models:{modelValue:{name:"",type:"String"}}}},TEXT_AREA:{name:"TEXT_AREA",schema:{title:"多行文本",tag:"q-input",attrs:{filled:!0,label:"多行文本",type:"textarea"},models:{modelValue:{name:"",type:"String"}}}},PASSWORD:{name:"PASSWORD",schema:{title:"密码输入",tag:"q-input",attrs:{filled:!0,label:"密码输入",type:"password"},models:{modelValue:{name:"",type:"String"}}}},DATE_PICKER:{name:"DATE_PICKER",schema:{title:"日期选择",tag:"q-input",attrs:{filled:!0,label:"日期选择","stack-label":!0,type:"date"},models:{modelValue:{name:"",type:"String"}}}},TIME_PICKER:{name:"TIME_PICKER",schema:{title:"时间选择",tag:"q-input",attrs:{filled:!0,label:"时间选择","stack-label":!0,type:"time"},models:{modelValue:{name:"",type:"String"}}}},SLIDER:{name:"SLIDER",schema:{title:"滑块",tag:"q-input",attrs:{rounded:!0,filled:!0,label:"Rounded filled"},models:{modelValue:{name:"",type:"String"}}}},RANGE_SLIDER:{name:"RANGE_SLIDER",schema:{title:"范围滑块",tag:"q-input",attrs:{rounded:!0,filled:!0,label:"Rounded filled"},models:{modelValue:{name:"",type:"String"}}}},CHECKBOX:{name:"CHECKBOX",schema:{title:"复选框",tag:"q-input",attrs:{rounded:!0,filled:!0,label:"Rounded filled"},models:{modelValue:{name:"",type:"String"}}}},SWITCHS:{name:"SWITCHS",schema:{title:"开关",tag:"q-input",attrs:{rounded:!0,filled:!0,label:"Rounded filled"},models:{modelValue:{name:"",type:"String"}}}},SELECT_SINGLE:{name:"SELECT_SINGLE",schema:{title:"单项下拉",tag:"q-input",attrs:{rounded:!0,filled:!0,label:"Rounded filled"},models:{}}},COMBOBOX:{name:"COMBOBOX",schema:{title:"组合框",tag:"q-input",attrs:{rounded:!0,filled:!0,label:"Rounded filled"},models:{}}},COLOR_PICKER:{name:"COLOR_PICKER",schema:{title:"颜色选择",tag:"q-input",attrs:{rounded:!0,filled:!0,label:"Rounded filled"},models:{}}},RADIO:{name:"RADIO",schema:{title:"单选框组",tag:"q-input",attrs:{rounded:!0,filled:!0,label:"Rounded filled"},models:{}}},FILE_INPUT:{name:"FILE_INPUT",schema:{title:"上传",tag:"q-input",attrs:{rounded:!0,filled:!0,label:"Rounded filled"},models:{}}},IMAGES:{name:"IMAGES",schema:{title:"图片",tag:"q-input",attrs:{rounded:!0,filled:!0,label:"Rounded filled"},models:{}}}},St=[{title:"输入型组件",list:[{title:Et.TEXT_FIELD.schema.title,icon:"mdi-form-textbox",name:"TextField",document:"https://quasar.dev/vue-components/input",schemaName:Et.TEXT_FIELD.name},{title:Et.TEXT_AREA.schema.title,icon:"mdi-form-textarea",name:"TextArea",document:"https://quasar.dev/vue-components/input",schemaName:Et.TEXT_AREA.name},{title:Et.PASSWORD.schema.title,icon:"mdi-form-textbox-password",name:"Password",document:"https://quasar.dev/vue-components/input",schemaName:Et.PASSWORD.name}]},{title:"选择型组件",list:[{title:Et.SLIDER.schema.title,icon:"mdi-tune-variant",name:"Slider",document:"https://vuetifyjs.com/zh-Hans/components/sliders/",schemaName:Et.SLIDER.name},{title:Et.RANGE_SLIDER.schema.title,icon:"mdi-valve-closed",name:"Range_Slider",document:"https://vuetifyjs.com/zh-Hans/components/sliders/",schemaName:Et.RANGE_SLIDER.name},{title:Et.CHECKBOX.schema.title,icon:"mdi-checkbox-marked",name:"Checkbox",document:"https://vuetifyjs.com/zh-Hans/components/checkboxes/",schemaName:Et.CHECKBOX.name},{title:Et.SWITCHS.schema.title,icon:"mdi-toggle-switch",name:"Switch",document:"https://vuetifyjs.com/zh-Hans/components/switches/",schemaName:Et.SWITCHS.name},{title:Et.DATE_PICKER.schema.title,icon:"mdi-calendar",name:"Date",document:"https://quasar.dev/vue-components/input",schemaName:Et.DATE_PICKER.name},{title:Et.TIME_PICKER.schema.title,icon:"mdi-clock-outline",name:"Time",document:"https://quasar.dev/vue-components/input",schemaName:Et.TIME_PICKER.name},{title:Et.SELECT_SINGLE.schema.title,icon:"mdi-form-dropdown",name:"Select",document:"https://vuetifyjs.com/zh-Hans/components/selects/",schemaName:Et.SELECT_SINGLE.name},{title:Et.COMBOBOX.schema.title,icon:"mdi-vector-difference-ab",name:"Combobox",document:"https://vuetifyjs.com/zh-Hans/components/combobox/",schemaName:Et.COMBOBOX.name},{title:Et.RADIO.schema.title,icon:"mdi-checkbox-marked-circle",name:"Select",document:"https://vuetifyjs.com/zh-Hans/components/selection-controls/",schemaName:Et.RADIO.name},{title:Et.COLOR_PICKER.schema.title,icon:"mdi-calendar",name:"Select",document:"https://vuetifyjs.com/zh-Hans/components/color-pickers/",schemaName:Et.COLOR_PICKER.name},{title:Et.FILE_INPUT.schema.title,icon:"mdi-calendar",name:"Select",document:"https://vuetifyjs.com/zh-Hans/components/file-inputs/",schemaName:Et.FILE_INPUT.name},{title:Et.IMAGES.schema.title,icon:"mdi-file-image",name:"Image",document:"https://vuetifyjs.com/zh-Hans/components/images/",schemaName:Et.IMAGES.name}]}],It=class{constructor(){}static getInstance(){return this.instance}generateShortId(){return r.generate()}getDefinition(e){return Et[e]}setDataObjectValues(e,t,n){const r={id:"",config:{},schema:{}},o=t+"_"+this.generateShortId();return r.id=o,r.config.formId=o,r.config.renderKey=+new Date,r.config.name=t,r.config.panel=n,r.schema=Ot(e,5),r}create(e){const t=this.getDefinition(e.schemaName),n=t.schema,r=t.name,o=e.name;return this.setDataObjectValues(n,o,r)}};let At=It;__publicField(At,"instance",new It);const wt=At.getInstance(),Rt=n.defineComponent({name:"HRendererEngine",props:{modelValue:{type:[String,Number,Array,Object]},schemas:{type:Array,default:()=>[]}},setup(e,t){const n=e.schemas;return()=>o(n,e,t)}});const Tt=((e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n})(n.defineComponent({name:"HRendererForm",props:{modelValue:{type:Object,default:()=>{},required:!0},dataObjects:{type:Array,required:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const r=n.computed({get:()=>e.modelValue,set:e=>{t("update:modelValue",e)}}),o=e=>e.schema.models.modelValue,a=n.reactive((()=>{const t={};return e.dataObjects&&e.dataObjects.map((e=>{const n=o(e);n.name&&(t[n.name]=(e=>{switch(e){case"Number":return 0;case"Array":return[];case"Object":return{};default:return""}})(n.type))})),t})());return n.watch(a,(e=>{r.value={...e}})),{getDefaultModel:o,modelObject:r,state:a}}}),[["render",function(e,r,o,a,c,i){const s=Rt,u=t.QCardSection,l=t.QCard;return n.openBlock(),n.createBlock(l,null,{default:n.withCtx((()=>[n.createVNode(u,{class:"q-pt-none"},{default:n.withCtx((()=>[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(e.dataObjects,(t=>(n.openBlock(),n.createBlock(s,{key:t.id,modelValue:e.state[e.getDefaultModel(t).name],"onUpdate:modelValue":n=>e.state[e.getDefaultModel(t).name]=n,schemas:[t.schema]},null,8,["modelValue","onUpdate:modelValue","schemas"])))),128))])),_:1})])),_:1})}]]);Tt.install=e=>{e.component(Tt.name,Tt)},Rt.install=e=>{e.component(Rt.name,Rt)};const Ct=[Rt,Tt],Pt={install:e=>{Ct.map((t=>e.component(t.name,t)))}};e.DataObjectUtils=wt,e.HRendererEngine=Rt,e.HRendererForm=Tt,e.SCHEMA_DEFINITIONS=Et,e.WIDGET_DEFINITIONS=St,e.default=Pt,e.renderSchema=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
