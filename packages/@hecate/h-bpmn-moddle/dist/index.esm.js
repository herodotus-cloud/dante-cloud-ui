import"vue";import{__decorate as e,__metadata as t}from"tslib";import{Prop as n,Watch as o,Emit as a,Component as i,Vue as r}from"vue-property-decorator";import s from"bpmn-js/lib/Modeler";import l from"bpmn-js-properties-panel";import p from"bpmn-js-properties-panel/lib/provider/camunda";import c from"camunda-bpmn-moddle/resources/camunda.json";import d from"@hecate/h-button";import{library as m}from"@hecate/utils";import u from"vue-runtime-helpers/dist/normalize-component.mjs";var v={"Activate the global connect tool":"激活全局连接工具","Append {type}":"添加 {type}","Add Lane above":"在上面添加道","Divide into two Lanes":"分割成两个道","Divide into three Lanes":"分割成三个道","Add Lane below":"在下面添加道","Append compensation activity":"追加补偿活动","Change type":"修改类型","Connect using Association":"使用关联连接","Connect using Sequence/MessageFlow or Association":"使用顺序/消息流或者关联连接","Connect using DataInputAssociation":"使用数据输入关联连接",Remove:"移除","Activate the hand tool":"激活抓手工具","Activate the lasso tool":"激活套索工具","Activate the create/remove space tool":"激活创建/删除空间工具","Create expanded SubProcess":"创建扩展子过程","Create IntermediateThrowEvent/BoundaryEvent":"创建中间抛出事件/边界事件","Create Pool/Participant":"创建池/参与者","Parallel Multi Instance":"并行多重事件","Sequential Multi Instance":"时序多重事件",DataObjectReference:"数据对象参考",DataStoreReference:"数据存储参考",Loop:"循环","Ad-hoc":"即席","Create {type}":"创建 {type}",Task:"任务","Send Task":"发送任务","Receive Task":"接收任务","User Task":"用户任务","Manual Task":"手工任务","Business Rule Task":"业务规则任务","Service Task":"服务任务","Script Task":"脚本任务","Call Activity":"调用活动","Sub Process (collapsed)":"子流程（折叠的）","Sub Process (expanded)":"子流程（展开的）","Start Event":"开始事件",StartEvent:"开始事件","Intermediate Throw Event":"中间事件","End Event":"结束事件",EndEvent:"结束事件","Create Gateway":"创建网关","Create Intermediate/Boundary Event":"创建中间/边界事件","Message Start Event":"消息开始事件","Timer Start Event":"定时开始事件","Conditional Start Event":"条件开始事件","Signal Start Event":"信号开始事件","Error Start Event":"错误开始事件","Escalation Start Event":"升级开始事件","Compensation Start Event":"补偿开始事件","Message Start Event (non-interrupting)":"消息开始事件（非中断）","Timer Start Event (non-interrupting)":"定时开始事件（非中断）","Conditional Start Event (non-interrupting)":"条件开始事件（非中断）","Signal Start Event (non-interrupting)":"信号开始事件（非中断）","Escalation Start Event (non-interrupting)":"升级开始事件（非中断）","Message Intermediate Catch Event":"消息中间捕获事件","Message Intermediate Throw Event":"消息中间抛出事件","Timer Intermediate Catch Event":"定时中间捕获事件","Escalation Intermediate Throw Event":"升级中间抛出事件","Conditional Intermediate Catch Event":"条件中间捕获事件","Link Intermediate Catch Event":"链接中间捕获事件","Link Intermediate Throw Event":"链接中间抛出事件","Compensation Intermediate Throw Event":"补偿中间抛出事件","Signal Intermediate Catch Event":"信号中间捕获事件","Signal Intermediate Throw Event":"信号中间抛出事件","Message End Event":"消息结束事件","Escalation End Event":"定时结束事件","Error End Event":"错误结束事件","Cancel End Event":"取消结束事件","Compensation End Event":"补偿结束事件","Signal End Event":"信号结束事件","Terminate End Event":"终止结束事件","Message Boundary Event":"消息边界事件","Message Boundary Event (non-interrupting)":"消息边界事件（非中断）","Timer Boundary Event":"定时边界事件","Timer Boundary Event (non-interrupting)":"定时边界事件（非中断）","Escalation Boundary Event":"升级边界事件","Escalation Boundary Event (non-interrupting)":"升级边界事件（非中断）","Conditional Boundary Event":"条件边界事件","Conditional Boundary Event (non-interrupting)":"条件边界事件（非中断）","Error Boundary Event":"错误边界事件","Cancel Boundary Event":"取消边界事件","Signal Boundary Event":"信号边界事件","Signal Boundary Event (non-interrupting)":"信号边界事件（非中断）","Compensation Boundary Event":"补偿边界事件","Exclusive Gateway":"互斥网关","Parallel Gateway":"并行网关","Inclusive Gateway":"相容网关","Complex Gateway":"复杂网关","Event based Gateway":"事件网关",Transaction:"转运","Sub Process":"子流程","Event Sub Process":"事件子流程","Collapsed Pool":"折叠池","Expanded Pool":"展开池","no parent for {element} in {parent}":"在{parent}里，{element}没有父类","no shape type specified":"没有指定的形状类型","flow elements must be children of pools/participants":"流元素必须是池/参与者的子类","out of bounds release":"out of bounds release","more than {count} child lanes":"子道大于{count} ","element required":"元素不能为空","diagram not part of bpmn:Definitions":"流程图不符合bpmn规范","no diagram to display":"没有可展示的流程图","no process or collaboration to display":"没有可展示的流程/协作","element {element} referenced by {referenced}#{property} not yet drawn":"由{referenced}#{property}引用的{element}元素仍未绘制","already rendered {element}":"{element} 已被渲染","failed to import {element}":"导入{element}失败",Id:"编号",Name:"名称",General:"常规",Details:"详情","Message Name":"消息名称",Message:"消息",Initiator:"创建者","Asynchronous Continuations":"持续异步","Asynchronous Before":"异步前","Asynchronous After":"异步后","Job Configuration":"工作配置",Exclusive:"排除","Job Priority":"工作优先级","Retry Time Cycle":"重试时间周期",Documentation:"文档","Element Documentation":"元素文档","History Configuration":"历史配置","History Time To Live":"历史的生存时间",Forms:"表单","Form Key":"表单key","Form Fields":"表单字段","Business Key":"业务key","Form Field":"表单字段",ID:"编号",Type:"类型",Label:"名称","Default Value":"默认值",Validation:"校验","Add Constraint":"添加约束",Config:"配置",Properties:"属性","Add Property":"添加属性",Value:"值",Listeners:"监听器","Execution Listener":"执行监听","Event Type":"事件类型","Listener Type":"监听器类型","Java Class":"Java类",Expression:"表达式","Must provide a value":"必须提供一个值","Delegate Expression":"代理表达式",Script:"脚本","Script Format":"脚本格式","Script Type":"脚本类型","Inline Script":"内联脚本","External Script":"外部脚本",Resource:"资源","Field Injection":"字段注入",Extensions:"扩展","Input/Output":"输入/输出","Input Parameters":"输入参数","Output Parameters":"输出参数",Parameters:"参数","Output Parameter":"输出参数","Timer Definition Type":"定时器定义类型","Timer Definition":"定时器定义",Date:"日期",Duration:"持续",Cycle:"循环",Signal:"信号","Signal Name":"信号名称",Escalation:"升级",Error:"错误","Link Name":"链接名称",Condition:"条件名称","Variable Name":"变量名称","Variable Event":"变量事件","Specify more than one variable change event as a comma separated list.":"多个变量事件以逗号隔开","Wait for Completion":"等待完成","Activity Ref":"活动参考","Version Tag":"版本标签",Executable:"可执行文件","External Task Configuration":"扩展任务配置","Task Priority":"任务优先级",External:"外部",Connector:"连接器","Must configure Connector":"必须配置连接器","Connector Id":"连接器编号",Implementation:"实现方式","Field Injections":"字段注入",Fields:"字段","Result Variable":"结果变量",Topic:"主题","Configure Connector":"配置连接器","Input Parameter":"输入参数",Assignee:"代理人","Candidate Users":"候选用户","Candidate Groups":"候选组","Due Date":"到期时间","Follow Up Date":"跟踪日期",Priority:"优先级","The follow up date as an EL expression (e.g. ${someDate} or an ISO date (e.g. 2015-06-26T09:54:00)":"跟踪日期必须符合EL表达式，如： ${someDate} ,或者一个ISO标准日期，如：2015-06-26T09:54:00","The due date as an EL expression (e.g. ${someDate} or an ISO date (e.g. 2015-06-26T09:54:00)":"跟踪日期必须符合EL表达式，如： ${someDate} ,或者一个ISO标准日期，如：2015-06-26T09:54:00",Variables:"变量"};var g={translate:["value",function(e,t){var n=t||{};return(v[e]||e).replace(/{([^}]+)}/g,(function(e,t){return n[t]||"{"+t+"}"}))}]},y=function(e){function t(){e.apply(this,arguments),this.diagram="",this.bpmnModeler={},this.scale=1,this.element={},this.fileName=""}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.mounted=function(){this.init()},t.prototype.beforeDestroy=function(){this.bpmnModeler.destroy()},t.prototype.onValueChange=function(e){this.diagram=e},t.prototype.onModelChange=function(e){this.$emit("input",e)},t.prototype.deploy=async function(){var e=(await this.showInputFileNameDialog()).value;if(e)return this.createFormData(e,this.diagram)},t.prototype.init=function(){this.bpmnModeler=this.createBpmnModeler(),this.createNewDiagram(this.diagram)},t.prototype.createBpmnModeler=function(){return new s({container:"#canvas",keyboard:{bindTo:window},propertiesPanel:{parent:"#properties-panel"},additionalModules:[p,l,g],moddleExtensions:{camunda:c}})},t.prototype.createNewDiagram=async function(e){try{var t=(await this.bpmnModeler.importXML(e)).warnings;this.addListeners(),console.log("[HBM] |- Create New Diagram Success !",t);var n=this.getCanvas();n.zoom("fit-viewport","auto"),this.element=n.getRootElement()}catch(e){var o=e.warnings,a=e.message;console.error("[HBM] |- Could not create BPMN 2.0 diagram!",o,a)}},t.prototype.addListeners=function(){this.addModelerListener(),this.addEventBusListener()},t.prototype.addModelerListener=function(){},t.prototype.addEventBusListener=function(){var e=this,t=e.getEventBus();["element.click","element.changed"].forEach((function(n){t.on(n,(function(t){console.log("[HBM] |- Event Type : ",n),console.log("[HBM] |- E : ",t),t&&"bpmn:Process"!=t.element.type&&("element.changed"===n?e.elementChanged(t):"element.click"===n&&(e.element=t.element,console.log(t.element.id)))}))}))},t.prototype.elementChanged=function(e){var t=this,n=t.getShape(e.element.id);this.element=n,n?n.type&&!t.isInvalid(n.type)&&t.isSequenceFlow(n.type)&&console.log("[HBM] |- Changing line."):console.log("[HBM] |- Invalid shape.")},t.prototype.loadLocalDiagram=function(){var e=this,t=e.$refs.loadXml.files[0],n=new FileReader;n.onload=function(){e.diagram=n.result,e.createNewDiagram(e.diagram)},n.readAsText(t)},t.prototype.showInputFileNameDialog=function(){return m.Swal.fire({title:"请输入文件名",input:"text",inputLabel:"保存的文件名",inputValue:"",showCancelButton:!0,cancelButtonColor:"#d33",confirmButtonText:"确认",cancelButtonText:"取消",inputValidator:function(e){if(!e)return"请输入文件名!"}})},t.prototype.handleUpload=function(){},t.prototype.createFormData=function(e,t,n,o){void 0===n&&(n=""),void 0===o&&(o="");var a=new FormData;a.append("deployment-name",e),a.append("enable-duplicate-filtering","false"),a.append("deploy-changed-only","false");var i=n||"Middle stage";a.append("deployment-source",i);var r=new Blob([t],{type:"application/octet-stream"}),s=this.checkFileName(o,e);return a.append("data",r,s),a},t.prototype.checkFileName=function(e,t){var n=e||t;return m.lodash.endsWith(n,".bpmn")||m.lodash.endsWith(n,".bpmn20.xml")?n:n+".bpmn"},t.prototype.getCanvas=function(){return this.bpmnModeler.get("canvas")},t.prototype.getCommandStack=function(){return this.bpmnModeler.get("commandStack")},t.prototype.getElementRegistry=function(){return this.bpmnModeler.get("elementRegistry")},t.prototype.getEventBus=function(){return this.bpmnModeler.get("eventBus")},t.prototype.getShape=function(e){return this.getElementRegistry().get(e)},t.prototype.isInvalid=function(e){return null==e||""===e},t.prototype.isSequenceFlow=function(e){return"bpmn:SequenceFlow"===e},t.prototype.saveSVG=async function(){try{var e=(await this.bpmnModeler.saveSVG({format:!0})).svg;this.download(e,"svg")}catch(e){var t=e.warnings,n=e.message;console.error("[HBM] |- Error happened saving svg: ",t,n)}},t.prototype.saveXML=async function(){try{var e=(await this.bpmnModeler.saveXML({format:!0})).xml;this.download(e,"xml")}catch(e){var t=e.warnings,n=e.message;console.error("[HBM] |- Error happened saving xml: ",t,n)}},t.prototype.handleRedo=function(){this.getCommandStack().redo()},t.prototype.handleUndo=function(){this.getCommandStack().undo()},t.prototype.handleZoom=function(e){var t=1;e&&(t=this.scale+e<=.2?.2:this.scale+e),this.getCanvas().zoom(t),this.scale=t},t.prototype.createDownloadLink=function(e,t,n){void 0===n&&(n="xml");var o=document.createElement("a");o.download=e+"."+n.toLowerCase(),o.innerHTML="Save BPMN "+n.toUpperCase,o.href=window.URL.createObjectURL(t),o.onclick=function(e){document.body.removeChild(e.target)},o.style.visibility="hidden",document.body.appendChild(o),o.click()},t.prototype.download=async function(e,t){void 0===t&&(t="xml");var n=t.toLowerCase(),o=new Blob([e],{type:"application/bpmn20-xml;charset=UTF-8,"});if("svg"===n&&(o=new Blob([e],{type:"image/svg+xml"})),this.fileName)this.createDownloadLink(this.fileName,o,n);else{var a=(await this.showInputFileNameDialog()).value;a&&(this.fileName=a,this.createDownloadLink(a,o,n))}},t}(r);e([n(String),t("design:type",String)],y.prototype,"value",void 0),e([o("value",{immediate:!0}),t("design:type",Function),t("design:paramtypes",[String]),t("design:returntype",void 0)],y.prototype,"onValueChange",null),e([o("diagram"),t("design:type",Function),t("design:paramtypes",[String]),t("design:returntype",void 0)],y.prototype,"onModelChange",null),e([a(),t("design:type",Function),t("design:paramtypes",[]),t("design:returntype",Promise)],y.prototype,"deploy",null);var h=u({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"generator"}},[n("v-app-bar",{attrs:{dense:"","clipped-left":"","clipped-right":""}},[n("h-button",{attrs:{icon:"","icon-name":"mdi-undo-variant",tooltip:"撤销(Undo)"},on:{click:e.handleUndo}}),e._v(" "),n("h-button",{staticClass:"ml-1",attrs:{icon:"","icon-name":"mdi-redo-variant",tooltip:"恢复(Redo)"},on:{click:e.handleRedo}}),e._v(" "),n("h-button",{staticClass:"ml-1",attrs:{icon:"","icon-name":"mdi-magnify-plus-outline",tooltip:"放大"},on:{click:function(t){return e.handleZoom(.1)}}}),e._v(" "),n("h-button",{staticClass:"ml-1",attrs:{icon:"","icon-name":"mdi-magnify-minus-outline",tooltip:"缩小"},on:{click:function(t){return e.handleZoom(-.1)}}}),e._v(" "),n("h-button",{staticClass:"ml-1",attrs:{icon:"","icon-name":"mdi-cloud-upload-outline",tooltip:"部署"},on:{click:function(t){return e.deploy()}}}),e._v(" "),n("h-button",{staticClass:"ml-1",attrs:{icon:"","icon-name":"mdi-folder-open-outline",tooltip:"打开"},on:{click:function(t){return e.$refs.loadXml.click()}}}),e._v(" "),n("input",{ref:"loadXml",staticClass:"file-input",attrs:{type:"file",accept:".bpmn, .bpmn20.xml"},on:{change:function(t){return e.loadLocalDiagram()}}}),e._v(" "),n("h-button",{staticClass:"ml-1",attrs:{icon:"","icon-name":"mdi-xml",tooltip:"保存XML"},on:{click:function(t){return e.saveXML()}}}),e._v(" "),n("h-button",{staticClass:"ml-1",attrs:{icon:"","icon-name":"mdi-svg",tooltip:"保存SVG"},on:{click:function(t){return e.saveSVG()}}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{large:"",icon:""}},[n("v-icon",[e._v("mdi-volleyball")])],1)],1),e._v(" "),n("v-main",{staticClass:"pa-0"},[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-row",[n("v-col",{staticClass:"pa-0",attrs:{cols:"10"}},[n("div",{staticClass:"containers"},[n("div",{staticClass:"canvas",attrs:{id:"canvas"}})])]),e._v(" "),n("v-col",{staticClass:"pa-0",attrs:{cols:"2"}},[n("div",{staticClass:"properties-panel",attrs:{id:"properties-panel"}})])],1)],1)],1)],1)},staticRenderFns:[]},undefined,y=e([i({components:{HButton:d}})],y),undefined,false,undefined,!1,void 0,void 0,void 0),f={install:function(e){e.component("HBpmnModdle",h)}};export{f as HBpmnModdleComponent,h as default};
//# sourceMappingURL=index.esm.js.map
