(window.webpackJsonp=window.webpackJsonp||[]).push([["DevelopmentSupplierContent"],{"4c24":function(e,t,r){"use strict";r.r(t);var i,l=r("50da"),a=r("2e90"),o=r("e719"),n=r("3617"),d=r("600f"),s=r("402f");let p=class extends s.e{get title(){return this.operation===s.i.CREATE?"添加团队/厂商信息":"编辑团队/厂商信息"}created(){super.created()}getBaseService(){return this.supplierService}};Object(l.a)([o.Inject,Object(l.b)("design:type","function"==typeof(i=void 0!==d.h&&d.h)?i:Object)],p.prototype,"supplierService",void 0),p=Object(l.a)([Object(a.a)({components:{HContentPanel:n.d,HTableItemEditor:n.p,HDictionarySelect:n.g}})],p);var u=p,c=r("ba34"),m=r("eb4c"),v=r.n(m),b=r("81fa"),f=Object(c.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h-content-panel",{attrs:{title:e.title,overlay:e.overlay}},[r("validation-observer",{ref:"observer"},[r("h-table-item-editor",{attrs:{overlay:e.overlay,column:""},on:{submit:function(t){return e.saveOrUpdate()}},scopedSlots:e._u([{key:"primary",fn:function(){return[r("validation-provider",{attrs:{name:"团队名称",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[r("v-text-field",{attrs:{outlined:"",clearable:"",label:"团队名称 * ",placeholder:"请输入团队名称","error-messages":i,required:""},model:{value:e.editedItem.supplierName,callback:function(t){e.$set(e.editedItem,"supplierName",t)},expression:"editedItem.supplierName"}})]}}])}),r("validation-provider",{attrs:{name:"团队代码",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[r("v-text-field",{attrs:{outlined:"",clearable:"",label:"团队代码 * ",placeholder:"请输入团队代码","error-messages":i,required:""},model:{value:e.editedItem.supplierCode,callback:function(t){e.$set(e.editedItem,"supplierCode",t)},expression:"editedItem.supplierCode"}})]}}])}),r("h-dictionary-select",{attrs:{dictionary:"supplierType",label:"团队/厂商类型"},model:{value:e.editedItem.supplierType,callback:function(t){e.$set(e.editedItem,"supplierType",t)},expression:"editedItem.supplierType"}})]},proxy:!0}]),model:{value:e.editedItem,callback:function(t){e.editedItem=t},expression:"editedItem"}})],1)],1)}),[],!1,null,null,null);t.default=f.exports;v()(f,{VTextField:b.a})}}]);