(window.webpackJsonp=window.webpackJsonp||[]).push([["SysRoleAuthorize"],{"012f":function(e,t,s){"use strict";s.r(t);var i,a,r=s("50da"),o=s("2e90"),n=s("e719"),l=s("3617"),c=s("600f"),u=s("402f");let h=class extends u.a{constructor(){super(...arguments),this.title="分配角色权限",this.tableTitle="服务接口列表",this.listHeader="已配置的权限",this.tableHeaders=[{text:"接口详情",align:"start",value:"requestMethod"},{text:"微服务ID",align:"center",value:"serviceId"}],this.columnSlots=["requestMethod"],this.groupBy=["serviceId"],this.sortBy=["url"],this.pageSize=100}getBaseService(){return this.sysRoleService}getResourceService(){return this.sysAuthorityService}getCompareKey(){return"authorityId"}created(){this.fetchParams("authorities")}mounted(){this.findAuthorityApis()}findAuthorityApis(){this.tableLoading=!0,this.sysAuthorityService.fetchAuthorityApis().then(e=>{this.tableLoading=!1,this.tableItems=e.data}).catch(()=>{this.tableLoading=!1})}save(){if(this.$lib.lodash.isEmpty(this.assignedItems))this.$notify.warning("您尚未配置任何权限，请完成配置后再进行提交！");else{this.overlay=!0;let e=this.currentEntity.roleId,t=this.assignedItems.map(e=>e[this.getCompareKey()]);this.getBaseService().assign({roleId:e,authorities:t}).then(()=>{this.overlay=!1,this.$navigation.goBack(this.$route)}).catch(()=>{this.overlay=!1})}}};Object(r.a)([n.Inject,Object(r.b)("design:type","function"==typeof(i=void 0!==c.l&&c.l)?i:Object)],h.prototype,"sysRoleService",void 0),Object(r.a)([n.Inject,Object(r.b)("design:type","function"==typeof(a=void 0!==c.g&&c.g)?a:Object)],h.prototype,"sysAuthorityService",void 0),h=Object(r.a)([Object(o.a)({components:{HContainer:l.d,HContentPanel:l.e,HAuthorizeList:l.c,HSwaggerItem:l.p}})],h);var d=h,p=s("ba34"),y=s("eb4c"),g=s.n(y),m=s("6fc4"),v=Object(p.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h-content-panel",{attrs:{title:e.title,overlay:e.overlay}},[s("h-container",{attrs:{type:"left-right"},scopedSlots:e._u([{key:"other",fn:function(){return[s("v-card",[s("h-authorize-list",{attrs:{avatar:"",header:e.listHeader,itemKey:e.getCompareKey(),"prepend-title":"requestMethod","prepend-subtitle":"serviceId","append-title":"url","append-subtitle":"authorityName","avatar-key":"requestMethod"},on:{save:function(t){return e.save()}},model:{value:e.assignedItems,callback:function(t){e.assignedItems=t},expression:"assignedItems"}})],1)]},proxy:!0}])},[s("v-card",[s("h-table",{attrs:{"table-headers":e.tableHeaders,"table-items":e.tableItems,"table-title":e.tableTitle,"page-size":e.pageSize,"group-by":e.groupBy,"sort-by":e.sortBy,"column-slots":e.columnSlots,"item-key":e.getCompareKey(),"show-select":""},on:{"item-selected":function(t){return e.selectItem(t)},"toggle-select-all":function(t){return e.selectAllItems(t)}},scopedSlots:e._u([{key:"item.requestMethod",fn:function(e){var t=e.item;return[s("h-swagger-item",{attrs:{method:t.requestMethod,url:t.url,description:t.authorityName}})]}}],null,!0),model:{value:e.assignedItems,callback:function(t){e.assignedItems=t},expression:"assignedItems"}})],1)],1)],1)}),[],!1,null,null,null);t.default=v.exports;g()(v,{VCard:m.a})}}]);