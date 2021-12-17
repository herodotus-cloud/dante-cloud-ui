(window.webpackJsonp=window.webpackJsonp||[]).push([["OauthScopes"],{"57ee":function(e,t,n){"use strict";n.r(t);var i,a=n("50da"),r=n("2e90"),o=n("e719"),s=n("3617"),c=n("600f"),l=n("402f");let u=class extends l.f{constructor(){super(...arguments),this.pageNumber=1,this.tableTitle="客户端详情信息",this.columnSlots=["actions","redirect_uri","authorized_grant_types","access_token_validity","refresh_token_validity"],this.tableHeaders=[{text:"APP_KEY",align:"center",value:"client_id"},{text:"应用名称",align:"center",value:"additional_information.appName"},{text:"应用类型",align:"center",value:"additional_information.applicationType"},{text:"授权类型",align:"center",value:"authorized_grant_types"},{text:"Token有效时间",align:"center",value:"access_token_validity"},{text:"Token刷新时间",align:"center",value:"refresh_token_validity"},{text:"地址",align:"center",value:"redirect_uri"},{text:"操作",align:"center",value:"actions",sortable:!1}],this.typeStyles={authorization_code:{color:"pink",icon:"mdi-security",text:"授权码模式"},client_credentials:{color:"teal",icon:"mdi-arrow-decision-auto",text:"客户端凭证模式"},password:{color:"cyan",icon:"mdi-file-key",text:"密码模式"},implicit:{color:"purple",icon:"mdi-file-hidden",text:"隐式/简化模式"},refresh_token:{color:"indigo",icon:"mdi-cog-refresh",text:"刷新模式"},social_authentication:{color:"light-blue",icon:"mdi-cast-connected",text:"社交化认证模式"}}}styleSwitcher(e,t){let n=this.typeStyles[e];if(n)return n[t]}colorSwitcher(e){return this.styleSwitcher(e,"color")}iconSwitcher(e){return this.styleSwitcher(e,"icon")}textSwitcher(e){return this.styleSwitcher(e,"text")}timeDisplay(e){return 0===e?"0":this.$lib.moment.duration(e,"second").humanize()}isServiceTypeDataItem(e){let t=e.additional_information;return!(!t||!t.applicationType||"SERVICE"!==t.applicationType)}getBaseService(){return this.oauthClientDetailsService}onPageNumberChanged(e){this.findItemsByPage(e)}pagination(e){this.pageNumber=e}mounted(){super.mounted()}getItemKey(){return"client_id"}getDomainName(){return"OauthClientDetails"}};Object(a.a)([o.Inject,Object(a.b)("design:type","function"==typeof(i=void 0!==c.e&&c.e)?i:Object)],u.prototype,"oauthClientDetailsService",void 0),Object(a.a)([Object(r.g)("pageNumber"),Object(a.b)("design:type",Function),Object(a.b)("design:paramtypes",[Number]),Object(a.b)("design:returntype",void 0)],u.prototype,"onPageNumberChanged",null),u=Object(a.a)([Object(r.a)({components:{HContainer:s.c,HActionButton:s.a,HTableItemChip:s.o,HTableItemStatus:s.q}})],u);var m=u,d=n("ba34"),p=n("eb4c"),b=n.n(p),v=n("bc77"),h=n("01b6"),g=n("c241"),y=n("1add"),f=n("7db6"),_=n("4a21"),k=n("4b39"),S=n("539d"),x=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h-container",[n("h-table",{attrs:{"show-select":"","external-pagination":"","table-headers":e.tableHeaders,"table-items":e.tableItems,"page-size":e.pageSize,"total-items":e.totalItems,"total-pages":e.totalPages,"table-title":e.tableTitle,"table-loading":e.tableLoading,"skeleton-loading":e.skeletonLoading,"column-slots":e.columnSlots,"item-key":e.getItemKey()},on:{pagination:function(t){return e.pagination(t)}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-btn",{staticClass:"mb-2 mr-2",attrs:{color:"primary",dark:""},on:{click:function(t){return e.createItem()}}},[e._v("申请APP_KEY")])]},proxy:!0},{key:"item.access_token_validity",fn:function(t){var i=t.item;return[e.isServiceTypeDataItem(i)?e._e():n("v-chip",{attrs:{color:"teal",dark:"",small:"","text-color":"white"}},[e._v(" "+e._s(e.timeDisplay(i.access_token_validity))+" ")])]}},{key:"item.refresh_token_validity",fn:function(t){var i=t.item;return[e.isServiceTypeDataItem(i)?e._e():n("v-chip",{attrs:{color:"teal",dark:"",small:"","text-color":"white"}},[e._v(" "+e._s(e.timeDisplay(i.refresh_token_validity))+" ")])]}},{key:"item.redirect_uri",fn:function(t){var i=t.item;return[e.isServiceTypeDataItem(i)?e._e():n("v-menu",{attrs:{"open-on-hover":"",top:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[n("v-icon",e._g({attrs:{color:"primary",dark:""}},i),[e._v(" mdi-shuffle-variant ")])]}}],null,!0)},[n("v-list",{attrs:{dense:""}},e._l(i.web_server_redirect_uri,(function(t,i){return n("v-list-item",{key:i},[n("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)]}},{key:"item.authorized_grant_types",fn:function(t){var i=t.item;return[e._l(i.authorized_grant_types,(function(t,i){return[n("v-tooltip",{key:i,attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(a){var r=a.on;return[n("v-icon",e._g({class:i?"ml-2":"",attrs:{color:e.colorSwitcher(t)}},r),[e._v(" "+e._s(e.iconSwitcher(t))+" ")])]}}],null,!0)},[n("span",[e._v(e._s(e.textSwitcher(t)))])])]}))]}},{key:"item.actions",fn:function(t){var i=t.item;return[n("h-action-button",{attrs:{edit:"",remove:!i.reserved},on:{edit:function(t){return e.editItem(i)},remove:function(t){return e.deleteItem(i)}}})]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=x.exports;b()(x,{VBtn:v.a,VChip:h.a,VIcon:g.a,VList:y.a,VListItem:f.a,VListItemTitle:_.c,VMenu:k.a,VTooltip:S.a})},f2d7:function(e,t,n){"use strict";n.r(t);var i,a=n("50da"),r=n("2e90"),o=n("e719"),s=n("3617"),c=n("600f"),l=n("402f");let u=class extends l.f{constructor(){super(...arguments),this.pageNumber=1,this.tableTitle="终端授权范围信息",this.columnSlots=["actions","status","reserved"],this.tableHeaders=[{text:"范围代码",align:"center",value:"scopeCode"},{text:"范围名称",align:"center",value:"scopeName"},{text:"说明",align:"center",value:"description"},{text:"保留数据",align:"center",value:"reserved"},{text:"状态",align:"center",value:"status"},{text:"操作",align:"center",value:"actions",sortable:!1}]}getBaseService(){return this.oauthScopesService}onPageNumberChanged(e){this.findItemsByPage(e)}pagination(e){this.pageNumber=e}mounted(){super.mounted()}getItemKey(){return"scopeId"}getDomainName(){return"OauthScopes"}};Object(a.a)([o.Inject,Object(a.b)("design:type","function"==typeof(i=void 0!==c.f&&c.f)?i:Object)],u.prototype,"oauthScopesService",void 0),Object(a.a)([Object(r.g)("pageNumber"),Object(a.b)("design:type",Function),Object(a.b)("design:paramtypes",[Number]),Object(a.b)("design:returntype",void 0)],u.prototype,"onPageNumberChanged",null),u=Object(a.a)([Object(r.a)({components:{HContainer:s.c,HActionButton:s.a,HTableItemChip:s.o,HTableItemStatus:s.q}})],u);var m=u,d=n("ba34"),p=n("eb4c"),b=n.n(p),v=n("bc77"),h=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h-container",[n("h-table",{attrs:{"show-select":"","external-pagination":"","table-headers":e.tableHeaders,"table-items":e.tableItems,"page-size":e.pageSize,"total-items":e.totalItems,"total-pages":e.totalPages,"table-title":e.tableTitle,"table-loading":e.tableLoading,"skeleton-loading":e.skeletonLoading,"column-slots":e.columnSlots,"item-key":e.getItemKey()},on:{pagination:function(t){return e.pagination(t)}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-btn",{staticClass:"mb-2 mr-2",attrs:{color:"primary",dark:""},on:{click:function(t){return e.createItem()}}},[e._v("添加授权范围")])]},proxy:!0},{key:"item.status",fn:function(e){var t=e.item;return[n("h-table-item-status",{attrs:{type:t.status}})]}},{key:"item.reserved",fn:function(e){var t=e.item;return[n("h-table-item-chip",{attrs:{status:t.reserved}})]}},{key:"item.actions",fn:function(t){var i=t.item;return[n("h-action-button",{attrs:{authorize:"",edit:"",remove:!i.reserved,content:"权限"},on:{authorize:function(t){return e.authorizeItem(i)},edit:function(t){return e.editItem(i)},remove:function(t){return e.deleteItem(i)}}})]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=h.exports;b()(h,{VBtn:v.a})}}]);