(window.webpackJsonp=window.webpackJsonp||[]).push([["SysOrganization"],{a487:function(t,e,a){"use strict";a.r(e);var n,i=a("50da"),r=a("2e90"),o=a("e719"),s=a("3617"),c=a("600f"),l=a("402f");let u=class extends l.f{constructor(){super(...arguments),this.pageNumber=1,this.tableTitle="单位信息",this.columnSlots=["actions","status","reserved"],this.tableHeaders=[{text:"单位名称",align:"center",value:"organizationName"},{text:"单位简称",align:"center",value:"shortName"},{text:"分区代码",align:"center",value:"partitionCode"},{text:"备注",align:"center",value:"description"},{text:"保留数据",align:"center",value:"reserved"},{text:"状态",align:"center",value:"status"},{text:"操作",align:"center",value:"actions",sortable:!1}],this.category=""}onPageNumberChanged(t){this.findItemsByPage(t,this.category)}onOrganizationCategoryChanged(t){this.findItems(this.pageNumber,t)}findItems(t,e){e?this.findItemsByPage(t,{category:e}):this.findItemsByPage(t)}pagination(t){this.pageNumber=t}mounted(){super.mounted()}getBaseService(){return this.sysOrganizationService}getItemKey(){return"organizationId"}getDomainName(){return"SysOrganization"}creatItemWithParam(){let t={};t.category=this.category,super.createItem(t)}};Object(i.a)([o.Inject,Object(i.b)("design:type","function"==typeof(n=void 0!==c.m&&c.m)?n:Object)],u.prototype,"sysOrganizationService",void 0),Object(i.a)([Object(r.g)("pageNumber"),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Number]),Object(i.b)("design:returntype",void 0)],u.prototype,"onPageNumberChanged",null),Object(i.a)([Object(r.g)("category"),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[String]),Object(i.b)("design:returntype",void 0)],u.prototype,"onOrganizationCategoryChanged",null),u=Object(i.a)([Object(r.a)({components:{HContainer:s.c,HActionButton:s.a,HTableItemChip:s.o,HTableItemStatus:s.q,HDictionarySelect:s.g}})],u);var g=u,m=a("ba34"),d=a("eb4c"),b=a.n(d),p=a("bc77"),y=a("6fc4"),h=a("3134"),v=a("aa8c"),f=a("a4fc"),O=Object(m.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h-container",[a("h-table",{attrs:{"show-select":"","external-pagination":"","table-headers":t.tableHeaders,"table-items":t.tableItems,"page-size":t.pageSize,"total-items":t.totalItems,"total-pages":t.totalPages,"table-title":t.tableTitle,"table-loading":t.tableLoading,"skeleton-loading":t.skeletonLoading,"column-slots":t.columnSlots,"item-key":t.getItemKey()},on:{pagination:function(e){return t.pagination(e)}},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-card",{attrs:{"max-width":"200",flat:""}},[a("v-container",{staticClass:"m-0"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h-dictionary-select",{attrs:{dictionary:"organizationCategory",label:"组织类别",dense:"","hide-details":""},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1)],1)],1)],1),a("v-btn",{staticClass:"mr-2",attrs:{color:"primary",dark:""},on:{click:function(e){return t.creatItemWithParam()}}},[t._v("添加单位")])]},proxy:!0},{key:"item.status",fn:function(t){var e=t.item;return[a("h-table-item-status",{attrs:{type:e.status}})]}},{key:"item.reserved",fn:function(t){var e=t.item;return[a("h-table-item-chip",{attrs:{status:e.reserved}})]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("h-action-button",{attrs:{edit:"",remove:!n.reserved},on:{edit:function(e){return t.editItem(n)},remove:function(e){return t.deleteItem(n)}}})]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=O.exports;b()(O,{VBtn:p.a,VCard:y.a,VCol:h.a,VContainer:v.a,VRow:f.a})}}]);