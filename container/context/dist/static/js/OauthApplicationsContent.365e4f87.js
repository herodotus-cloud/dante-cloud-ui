(window.webpackJsonp=window.webpackJsonp||[]).push([["OauthApplicationsContent"],{bd46:function(e,t,a){"use strict";a.r(t);var l,i=a("50da"),d=a("2e90"),o=a("e719"),n=a("3617"),r=a("600f"),c=a("402f");let p=class extends c.e{get title(){return this.operation===c.i.CREATE?"添加终端信息":"编辑终端信息"}created(){super.created()}getBaseService(){return this.oauthApplicationsService}};Object(i.a)([o.Inject,Object(i.b)("design:type","function"==typeof(l=void 0!==r.d&&r.d)?l:Object)],p.prototype,"oauthApplicationsService",void 0),p=Object(i.a)([Object(d.a)({components:{HContentPanel:n.d,HTableItemEditor:n.p,HDictionarySelect:n.g}})],p);var s=p,u=a("ba34"),m=a("eb4c"),b=a.n(m),f=a("81fa"),v=Object(u.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h-content-panel",{attrs:{title:e.title,overlay:e.overlay}},[a("validation-observer",{ref:"observer"},[a("h-table-item-editor",{attrs:{column:""},on:{submit:function(t){return e.saveOrUpdate()}},scopedSlots:e._u([{key:"primary",fn:function(){return[a("validation-provider",{attrs:{name:"应用名称",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[a("v-text-field",{attrs:{outlined:"",clearable:"",label:"应用名称 * ",placeholder:"请输入应用名称","error-messages":l,required:""},model:{value:e.editedItem.appName,callback:function(t){e.$set(e.editedItem,"appName",t)},expression:"editedItem.appName"}})]}}])}),a("v-text-field",{attrs:{outlined:"",clearable:"",label:"应用名称英文(可选)",placeholder:"请输入英文应用名称"},model:{value:e.editedItem.appNameEn,callback:function(t){e.$set(e.editedItem,"appNameEn",t)},expression:"editedItem.appNameEn"}}),a("v-text-field",{attrs:{outlined:"",clearable:"",label:"应用图标(可选)",placeholder:"请输入应用图标"},model:{value:e.editedItem.appIcon,callback:function(t){e.$set(e.editedItem,"appIcon",t)},expression:"editedItem.appIcon"}}),a("v-text-field",{attrs:{outlined:"",clearable:"",label:"应用地址",placeholder:"请输入应用地址"},model:{value:e.editedItem.website,callback:function(t){e.$set(e.editedItem,"website",t)},expression:"editedItem.website"}}),a("h-dictionary-select",{attrs:{dictionary:"applicationType",label:"应用类型"},model:{value:e.editedItem.applicationType,callback:function(t){e.$set(e.editedItem,"applicationType",t)},expression:"editedItem.applicationType"}}),a("h-dictionary-select",{attrs:{dictionary:"technologyType",label:"技术类型"},model:{value:e.editedItem.technologyType,callback:function(t){e.$set(e.editedItem,"technologyType",t)},expression:"editedItem.technologyType"}})]},proxy:!0},{key:"other",fn:function(){return[a("v-text-field",{attrs:{outlined:"",clearable:"",disabled:!0,label:"APP_KEY",placeholder:"应用APP_KEY"},model:{value:e.editedItem.appKey,callback:function(t){e.$set(e.editedItem,"appKey",t)},expression:"editedItem.appKey"}}),a("v-text-field",{attrs:{outlined:"",clearable:"",disabled:!0,label:"APP_SECRET",placeholder:"应用APP_SECRET"},model:{value:e.editedItem.appSecret,callback:function(t){e.$set(e.editedItem,"appSecret",t)},expression:"editedItem.appSecret"}})]},proxy:!0}]),model:{value:e.editedItem,callback:function(t){e.editedItem=t},expression:"editedItem"}})],1)],1)}),[],!1,null,null,null);t.default=v.exports;b()(v,{VTextField:f.a})}}]);