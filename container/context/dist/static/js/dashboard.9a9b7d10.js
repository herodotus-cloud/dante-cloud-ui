(window.webpackJsonp=window.webpackJsonp||[]).push([["dashboard"],{7277:function(t,a,e){"use strict";e.r(a);var s,o,i=e("50da"),r=e("2e90"),n=e("e719"),l=e("3617"),c=(e("402f"),e("600f"));let v=class extends r.f{constructor(){super(...arguments),this.dailySalesChart={data:{labels:["M","T","W","T","F","S","S"],series:[[12,17,7,17,23,18,38]]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:50,chartPadding:{top:0,right:0,bottom:0,left:0}}},this.dataCompletedTasksChart={data:{labels:["12am","3pm","6pm","9pm","12pm","3am","6am","9am"],series:[[230,750,450,300,280,240,200,190]]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:1e3,chartPadding:{top:0,right:0,bottom:0,left:0}}},this.emailsSubscriptionChart={data:{labels:["一","二","三","四","五","六","七","八","九","十","十一","十二"],series:[[542,443,320,780,553,453,326,434,568,610,756,895]]},options:{axisX:{showGrid:!1},low:0,high:1e3,chartPadding:{top:0,right:5,bottom:0,left:0}},responsiveOptions:[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(t){return t[0]}}}]]},this.headers=[{sortable:!1,text:"序号",value:"id"},{sortable:!1,text:"Name",value:"name"},{sortable:!1,text:"Salary",value:"salary",align:"right"},{sortable:!1,text:"Country",value:"country",align:"right"},{sortable:!1,text:"City",value:"city",align:"right"}],this.items=[{id:1,name:"Dakota Rice",country:"Niger",city:"Oud-Tunrhout",salary:"$35,738"},{id:2,name:"Minerva Hooper",country:"Curaçao",city:"Sinaai-Waas",salary:"$23,738"},{id:3,name:"Sage Rodriguez",country:"Netherlands",city:"Overland Park",salary:"$56,142"},{id:4,name:"Philip Chanley",country:"Korea, South",city:"Gloucester",salary:"$38,735"},{id:5,name:"Doris Greene",country:"Malawi",city:"Feldkirchen in Kārnten",salary:"$63,542"}],this.tabs=0,this.tasks={0:[{text:"巡检平台运行状况，查看各项运行指标参数",value:!0},{text:"针对新增加的接口幂等功能，编写开发文档和配置手册",value:!1},{text:"最新的接口幂等功能发布至测试服务器后，编写测试用例，对新增幂等功能后平台整体运行性能进行压力测试",value:!1},{text:"修复新发现的以及已知的平台问题",value:!0}],1:[{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!0},{text:'Sign contract for "What are conference organizers afraid of?"',value:!1}],2:[{text:"Lines From Great Russian Literature? Or E-mails From My Boss?",value:!1},{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!0},{text:'Sign contract for "What are conference organizers afraid of?"',value:!0}]},this.list={0:!1,1:!1,2:!1}}mounted(){this.getConstants()}complete(t){this.list[t]=!this.list[t]}getConstants(){this.$token.get().then(t=>{t&&this.$enums.get().then(t=>{t||this.upmsConstantService.fetch().then(t=>{this.$enums.set(t.data),this.uaaConstantService.fetch().then(t=>{this.$enums.set(t.data)})})})})}};Object(i.a)([n.Inject,Object(i.b)("design:type","function"==typeof(s=void 0!==c.p&&c.p)?s:Object)],v.prototype,"upmsConstantService",void 0),Object(i.a)([n.Inject,Object(i.b)("design:type","function"==typeof(o=void 0!==c.o&&c.o)?o:Object)],v.prototype,"uaaConstantService",void 0),v=Object(i.a)([Object(r.a)({components:{HMaterialCard:l.k,HMaterialChartCard:l.l,HMaterialStatsCard:l.m}})],v);var d=v,h=e("ba34"),u=e("eb4c"),m=e.n(u),p=e("bc77"),b=e("5621"),g=e("fa36"),f=e("3134"),y=e("aa8c"),_=e("876e"),C=e("c241"),x=e("e4a7"),w=e("a4fc"),k=e("ca40"),S=e("f2e1"),O=e("40ab"),T=e("b4b9"),V=e("539d"),$=Object(h.a)(d,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{id:"dashboard",fluid:"",tag:"section"}},[e("v-row",[e("v-col",{attrs:{cols:"12",lg:"4"}},[e("h-material-chart-card",{attrs:{data:t.emailsSubscriptionChart.data,options:t.emailsSubscriptionChart.options,"responsive-options":t.emailsSubscriptionChart.responsiveOptions,color:"#E91E63","hover-reveal":"",type:"Bar"},scopedSlots:t._u([{key:"reveal-actions",fn:function(){return[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.attrs,o=a.on;return[e("v-btn",t._g(t._b({attrs:{color:"info",icon:""}},"v-btn",s,!1),o),[e("v-icon",{attrs:{color:"info"}},[t._v(" mdi-refresh ")])],1)]}}])},[e("span",[t._v("Refresh")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.attrs,o=a.on;return[e("v-btn",t._g(t._b({attrs:{light:"",icon:""}},"v-btn",s,!1),o),[e("v-icon",[t._v("mdi-pencil")])],1)]}}])},[e("span",[t._v("Change Date")])])]},proxy:!0},{key:"actions",fn:function(){return[e("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-clock-outline ")]),e("span",{staticClass:"caption grey--text font-weight-light"},[t._v("10分钟前")])]},proxy:!0}])},[e("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v("平台月均访问量")]),e("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v("最新采集性能数据统计")])])],1),e("v-col",{attrs:{cols:"12",lg:"4"}},[e("h-material-chart-card",{attrs:{data:t.dailySalesChart.data,options:t.dailySalesChart.options,color:"success","hover-reveal":"",type:"Line"},scopedSlots:t._u([{key:"reveal-actions",fn:function(){return[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.attrs,o=a.on;return[e("v-btn",t._g(t._b({attrs:{color:"info",icon:""}},"v-btn",s,!1),o),[e("v-icon",{attrs:{color:"info"}},[t._v(" mdi-refresh ")])],1)]}}])},[e("span",[t._v("Refresh")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.attrs,o=a.on;return[e("v-btn",t._g(t._b({attrs:{light:"",icon:""}},"v-btn",s,!1),o),[e("v-icon",[t._v("mdi-pencil")])],1)]}}])},[e("span",[t._v("Change Date")])])]},proxy:!0},{key:"actions",fn:function(){return[e("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-clock-outline ")]),e("span",{staticClass:"caption grey--text font-weight-light"},[t._v("4分钟前")])]},proxy:!0}])},[e("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v("平台日访问量")]),e("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v(" 今日访问量环比增加 "),e("v-icon",{attrs:{color:"green",small:""}},[t._v(" mdi-arrow-up ")]),e("span",{staticClass:"green--text"},[t._v("55%")]),t._v("  ")],1)])],1),e("v-col",{attrs:{cols:"12",lg:"4"}},[e("h-material-chart-card",{attrs:{data:t.dataCompletedTasksChart.data,options:t.dataCompletedTasksChart.options,"hover-reveal":"",color:"info",type:"Line"},scopedSlots:t._u([{key:"reveal-actions",fn:function(){return[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.attrs,o=a.on;return[e("v-btn",t._g(t._b({attrs:{color:"info",icon:""}},"v-btn",s,!1),o),[e("v-icon",{attrs:{color:"info"}},[t._v(" mdi-refresh ")])],1)]}}])},[e("span",[t._v("Refresh")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.attrs,o=a.on;return[e("v-btn",t._g(t._b({attrs:{light:"",icon:""}},"v-btn",s,!1),o),[e("v-icon",[t._v("mdi-pencil")])],1)]}}])},[e("span",[t._v("Change Date")])])]},proxy:!0},{key:"actions",fn:function(){return[e("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-clock-outline ")]),e("span",{staticClass:"caption grey--text font-weight-light"},[t._v("26分钟前采集数据")])]},proxy:!0}])},[e("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v("已完成任务数")]),e("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[t._v("最新采集性能数据统计")])])],1),e("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[e("h-material-stats-card",{attrs:{color:"info",icon:"mdi-twitter",title:"Followers",value:"+245","sub-icon":"mdi-clock","sub-text":"Just Updated"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[e("h-material-stats-card",{attrs:{color:"primary",icon:"mdi-poll",title:"Website Visits",value:"75.521","sub-icon":"mdi-tag","sub-text":"Tracked from Google Analytics"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[e("h-material-stats-card",{attrs:{color:"success",icon:"mdi-store",title:"Revenue",value:"$ 34,245","sub-icon":"mdi-calendar","sub-text":"Last 24 Hours"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[e("h-material-stats-card",{attrs:{color:"orange",icon:"mdi-sofa",title:"Bookings",value:"184","sub-icon":"mdi-alert","sub-icon-color":"red","sub-text":"Get More Space..."}})],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("h-material-card",{staticClass:"px-5 py-3",attrs:{color:"warning"},scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"display-2 font-weight-light"},[t._v("Employees Stats")]),e("div",{staticClass:"subtitle-1 font-weight-light"},[t._v("New employees on 15th September, 2016")])]},proxy:!0}])},[e("v-card-text",[e("v-data-table",{attrs:{headers:t.headers,items:t.items}})],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("h-material-card",{staticClass:"px-5 py-3",scopedSlots:t._u([{key:"heading",fn:function(){return[e("v-tabs",{attrs:{"background-color":"transparent","slider-color":"white"},model:{value:t.tabs,callback:function(a){t.tabs=a},expression:"tabs"}},[e("span",{staticClass:"subheading font-weight-light mx-3",staticStyle:{"align-self":"center"}},[t._v("Tasks:")]),e("v-tab",{staticClass:"mr-3"},[e("v-icon",{staticClass:"mr-2"},[t._v(" mdi-bug ")]),t._v(" Bugs ")],1),e("v-tab",{staticClass:"mr-3"},[e("v-icon",{staticClass:"mr-2"},[t._v(" mdi-code-tags ")]),t._v(" Website ")],1),e("v-tab",[e("v-icon",{staticClass:"mr-2"},[t._v(" mdi-cloud ")]),t._v(" Server ")],1)],1)]},proxy:!0}])},[e("v-tabs-items",{staticClass:"transparent",model:{value:t.tabs,callback:function(a){t.tabs=a},expression:"tabs"}},t._l(3,(function(a){return e("v-tab-item",{key:a},[e("v-card-text",t._l(t.tasks[t.tabs],(function(a,s){return e("div",{key:s},[e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"1"}},[e("v-list-item-action",[e("v-checkbox",{attrs:{color:"secondary"},model:{value:a.value,callback:function(e){t.$set(a,"value",e)},expression:"task.value"}})],1)],1),e("v-col",{attrs:{cols:"9"}},[e("div",{staticClass:"font-weight-light",domProps:{textContent:t._s(a.text)}})]),e("v-col",{staticClass:"text-right",attrs:{cols:"2"}},[e("v-icon",{staticClass:"mx-1"},[t._v(" mdi-pencil ")]),e("v-icon",{staticClass:"mx-1",attrs:{color:"error"}},[t._v(" mdi-close ")])],1)],1)],1)})),0)],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);a.default=$.exports;m()($,{VBtn:p.a,VCardText:b.b,VCheckbox:g.a,VCol:f.a,VContainer:y.a,VDataTable:_.a,VIcon:C.a,VListItemAction:x.a,VRow:w.a,VTab:k.a,VTabItem:S.a,VTabs:O.a,VTabsItems:T.a,VTooltip:V.a})}}]);