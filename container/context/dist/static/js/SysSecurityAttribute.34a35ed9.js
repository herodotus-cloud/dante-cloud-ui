(window.webpackJsonp=window.webpackJsonp||[]).push([["SysSecurityAttribute"],{"80e7":function(e,t,n){"use strict";n.r(t);var r,i=n("50da"),a=n("2e90"),s=n("e719"),o=n("3617"),u=n("600f"),l=n("402f");let c=class extends l.f{constructor(){super(...arguments),this.pageNumber=1,this.tableTitle="安全信息列表",this.columnSlots=["expression","requestMethod","actions","status","reserved"],this.tableHeaders=[{text:"接口",align:"center",value:"requestMethod"},{text:"默认权限代码",align:"center",value:"attributeCode"},{text:"特定表达式",align:"center",value:"expression"},{text:"保留数据",align:"center",value:"reserved"},{text:"状态",align:"center",value:"status"},{text:"操作",align:"center",value:"actions",sortable:!1}],this.index={}}onPageNumberChanged(e){this.findItemsByPage(e)}pagination(e){this.pageNumber=e}mounted(){super.mounted(),this.$enums.getItem("expression").then(e=>{e.forEach(e=>{this.index[e.key]=e})})}getBaseService(){return this.sysSecurityAttributeService}getItemKey(){return"attributeId"}getDomainName(){return"SysSecurityAttribute"}getText(e){let t=this.index[e];return this.$lib.lodash.get(t,"text")}};Object(i.a)([s.Inject,Object(i.b)("design:type","function"==typeof(r=void 0!==u.m&&u.m)?r:Object)],c.prototype,"sysSecurityAttributeService",void 0),Object(i.a)([Object(a.g)("pageNumber"),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Number]),Object(i.b)("design:returntype",void 0)],c.prototype,"onPageNumberChanged",null),c=Object(i.a)([Object(a.a)({components:{HContainer:o.d,HActionButton:o.a,HTableItemChip:o.q,HTableItemStatus:o.s,HSwaggerItem:o.p}})],c);var m=c,b=n("ba34"),d=n("eb4c"),p=n.n(d),g=n("bc77"),h=Object(b.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h-container",[n("h-table",{attrs:{"show-select":"","external-pagination":"","table-headers":e.tableHeaders,"table-items":e.tableItems,"page-size":e.pageSize,"total-items":e.totalItems,"total-pages":e.totalPages,"table-title":e.tableTitle,"table-loading":e.tableLoading,"skeleton-loading":e.skeletonLoading,"column-slots":e.columnSlots,"item-key":e.getItemKey()},on:{pagination:function(t){return e.pagination(t)}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-btn",{staticClass:"mb-2 mr-2",attrs:{color:"primary",dark:""},on:{click:function(t){return e.createItem()}}},[e._v("添加元数据")])]},proxy:!0},{key:"item.requestMethod",fn:function(e){var t=e.item;return[n("h-swagger-item",{attrs:{method:t.requestMethod,url:t.url,description:t.description}})]}},{key:"item.expression",fn:function(t){var n=t.item;return[e._v(e._s(e.getText(n.expression))+" ")]}},{key:"item.status",fn:function(e){var t=e.item;return[n("h-table-item-status",{attrs:{type:t.status}})]}},{key:"item.reserved",fn:function(e){var t=e.item;return[n("h-table-item-chip",{attrs:{status:t.reserved}})]}},{key:"item.actions",fn:function(t){var r=t.item;return[n("h-action-button",{attrs:{edit:"",remove:!r.reserved,content:"角色"},on:{edit:function(t){return e.editItem(r)},remove:function(t){return e.deleteItem(r)}}})]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=h.exports;p()(h,{VBtn:g.a})}}]);