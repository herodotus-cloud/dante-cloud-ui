var __defProp=Object.defineProperty,__defNormalProp=(e,t,s)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,__publicField=(e,t,s)=>(__defNormalProp(e,"symbol"!=typeof t?t+"":t,s),s);!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@herodotus/core")):"function"==typeof define&&define.amd?define(["exports","@herodotus/core"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["@herodotus/apis"]={},e.HerodotusCore)}(this,(function(e,t){"use strict";var s=(e=>(e[e.API=0]="API",e[e.MENU=1]="MENU",e[e.PAGE=2]="PAGE",e[e.MINI_PAGE=3]="MINI_PAGE",e))(s||{}),n=(e=>(e[e.LEADERSHIP=0]="LEADERSHIP",e[e.SECTION_LEADER=1]="SECTION_LEADER",e[e.STAFF=2]="STAFF",e))(n||{}),i=(e=>(e[e.OTHERS=0]="OTHERS",e[e.MAN=1]="MAN",e[e.WOMAN=2]="WOMAN",e))(i||{}),r=(e=>(e[e.FORBIDDEN=0]="FORBIDDEN",e[e.ENABLE=1]="ENABLE",e[e.LOCKING=2]="LOCKING",e[e.EXPIRED=3]="EXPIRED",e))(r||{}),c=(e=>(e.APPLICATION="applicationType",e.GENDER="gender",e.GRANT="grantType",e.IDENTITY="identity",e.STATUS="status",e.SUPPLIER="supplierType",e.TECHNOLOGY="technologyType",e.EXPRESSION="expression",e))(c||{}),a=(e=>(e[e.WEB=0]="WEB",e[e.SERVICE=1]="SERVICE",e[e.APP=2]="APP",e[e.WAP=3]="WAP",e[e.MINI=4]="MINI",e))(a||{}),o=(e=>(e[e.JAVA=0]="JAVA",e[e.NET=1]="NET",e[e.PHP=2]="PHP",e[e.NODE=3]="NODE",e[e.IOS=4]="IOS",e[e.ANDROID=5]="ANDROID",e[e.WEAPP=6]="WEAPP",e[e.ALIAPP=7]="ALIAPP",e[e.DUAPP=8]="DUAPP",e))(o||{}),g=(e=>(e[e.CORE=0]="CORE",e[e.BAT=1]="BAT",e[e.THIRD_PARTY=2]="THIRD_PARTY",e[e.Outsourcing=3]="Outsourcing",e))(g||{}),u=(e=>(e[e.INSTITUTION=0]="INSTITUTION",e[e.SMS=1]="SMS",e[e.WXAPP=2]="WXAPP",e[e.QQ=3]="QQ",e[e.WEIBO=4]="WEIBO",e[e.BAIDU=5]="BAIDU",e[e.WECHAT_OPEN=6]="WECHAT_OPEN",e[e.WECHAT_MP=7]="WECHAT_MP",e[e.WECHAT_ENTERPRISE=8]="WECHAT_ENTERPRISE",e[e.WECHAT_ENTERPRISE_WEB=9]="WECHAT_ENTERPRISE_WEB",e[e.DINGTALK=10]="DINGTALK",e[e.DINGTALK_ACCOUNT=11]="DINGTALK_ACCOUNT",e[e.ALIYUN=12]="ALIYUN",e[e.TAOBAO=13]="TAOBAO",e[e.ALIPAY=14]="ALIPAY",e[e.TEAMBITION=15]="TEAMBITION",e[e.HUAWEI=16]="HUAWEI",e[e.FEISHU=17]="FEISHU",e[e.JD=18]="JD",e[e.DOUYIN=19]="DOUYIN",e[e.TOUTIAO=20]="TOUTIAO",e[e.MI=21]="MI",e[e.RENREN=22]="RENREN",e[e.MEITUAN=23]="MEITUAN",e[e.ELEME=24]="ELEME",e[e.KUJIALE=25]="KUJIALE",e[e.XMLY=26]="XMLY",e[e.GITEE=27]="GITEE",e[e.OSCHINA=28]="OSCHINA",e[e.CSDN=29]="CSDN",e[e.GITHUB=30]="GITHUB",e[e.GITLAB=31]="GITLAB",e[e.STACK_OVERFLOW=32]="STACK_OVERFLOW",e[e.CODING=33]="CODING",e[e.GOOGLE=34]="GOOGLE",e[e.MICROSOFT=35]="MICROSOFT",e[e.FACEBOOK=36]="FACEBOOK",e[e.LINKEDIN=37]="LINKEDIN",e[e.TWITTER=38]="TWITTER",e[e.AMAZON=39]="AMAZON",e[e.SLACK=40]="SLACK",e[e.LINE=41]="LINE",e[e.OKTA=42]="OKTA",e[e.PINTEREST=43]="PINTEREST",e))(u||{}),l=(e=>(e.JIGSAW="JIGSAW",e.WORD_CLICK="WORD_CLICK",e.ARITHMETIC="ARITHMETIC",e.CHINESE="CHINESE",e.CHINESE_GIF="CHINESE_GIF",e.SPEC_GIF="SPEC_GIF",e.SPEC="SPEC",e.HUTOOL_LINE="HUTOOL_LINE",e.HUTOOL_CIRCLE="HUTOOL_CIRCLE",e.HUTOOL_SHEAR="HUTOOL_SHEAR",e.HUTOOL_GIF="HUTOOL_GIF",e))(l||{}),d=(e=>(e[e.ANNOUNCEMENT=0]="ANNOUNCEMENT",e[e.DIALOGUE=1]="DIALOGUE",e))(d||{});const h=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new h(e)),this.instance}getBaseAddress(){return this.getConfig().getUaa()+"/authorize/application"}};let p=h;__publicField(p,"instance");const A=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new A(e)),this.instance}getBaseAddress(){return this.getConfig().getUaa()+"/authorize/scope"}getAssignedAddress(){return this.getBaseAddress()+"/assigned"}getScopeCodePath(e){return this.getParamPath(this.getBaseAddress(),e)}fetchByScopeCode(e){return this.getConfig().getHttp().get(this.getScopeCodePath(e))}assigned(e){return this.getConfig().getHttp().post(this.getAssignedAddress(),e)}};let I=A;__publicField(I,"instance");const E=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new E(e)),this.instance}getBaseAddress(){return this.getConfig().getUaa()+"/authorize/authorization"}};let C=E;__publicField(C,"instance");const f=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new f(e)),this.instance}getBaseAddress(){return this.getConfig().getUaa()+"/authorize/compliance"}};let S=f;__publicField(S,"instance");const _=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _(e)),this.instance}getBaseAddress(){return this.getConfig().getCmdb()+"/asset/server"}};let T=_;__publicField(T,"instance");const O=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new O(e)),this.instance}getBaseAddress(){return this.getConfig().getCmdb()+"/asset/application"}};let y=O;__publicField(y,"instance");const B=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new B(e)),this.instance}getBaseAddress(){return this.getConfig().getCmdb()+"/db/account"}};let m=B;__publicField(m,"instance");const N=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new N(e)),this.instance}getBaseAddress(){return this.getConfig().getCmdb()+"/db/catalog"}};let P=N;__publicField(P,"instance");const U=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new U(e)),this.instance}getBaseAddress(){return this.getConfig().getCmdb()+"/db/instance"}};let b=U;__publicField(b,"instance");const H=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new H(e)),this.instance}getBaseAddress(){return this.getConfig().getUaa()+"/authorize/constant/enums"}};let D=H;__publicField(D,"instance");const R=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new R(e)),this.instance}getBaseAddress(){return this.getConfig().getUpms()+"/constants/enums"}};let v=R;__publicField(v,"instance");const L=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new L(e)),this.instance}getBaseAddress(){return this.getConfig().getUpms()+"/organization"}};let F=L;__publicField(F,"instance");const w=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new w(e)),this.instance}getBaseAddress(){return this.getConfig().getUpms()+"/department"}};let M=w;__publicField(M,"instance");const G=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new G(e)),this.instance}getBaseAddress(){return this.getConfig().getUpms()+"/employee"}getAssignedAddress(){return this.getBaseAddress()+"/assigned"}getAllocatableAddress(){return this.getBaseAddress()+"/allocatable"}getEmployeeNamePath(e){return this.getParamPath(this.getBaseAddress(),e)}fetchByEmployeeName(e){return this.getConfig().getHttp().get(this.getEmployeeNamePath(e))}fetchAssignedByPage(e,t={}){const s=Object.assign(e,t);return this.getConfig().getHttp().get(this.getAssignedAddress(),s)}deleteAllocatable(e){return this.getConfig().getHttp().delete(this.getAllocatableAddress(),e)}saveAllocatable(e){return this.getConfig().getHttp().post(this.getAllocatableAddress(),e)}authorizeUser(e){return this.getConfig().getHttp().put(this.getBaseAddress(),e,{contentType:t.ContentTypeEnum.URL_ENCODED})}};let x=G;__publicField(x,"instance");const W=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new W(e)),this.instance}getBaseAddress(){return this.getConfig().getUpms()+"/"}};let k=W;__publicField(k,"instance");const z=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new z(e)),this.instance}getBaseAddress(){return"/oss/minio/bucket"}remove(e){return this.getConfig().getHttp().delete(this.getBaseAddress(),e)}};let K=z;__publicField(K,"instance");const j=class extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new j(e)),this.instance}getBaseAddress(){return"/oss/minio/multipart"}getCreateMultipartUploadAddress(){return this.getBaseAddress()+"/create"}getCompleteMultipartUploadAddress(){return this.getBaseAddress()+"/complete"}createMultipartUpload(e){return this.getConfig().getHttp().post(this.getCreateMultipartUploadAddress(),e)}completeMultipartUpload(e){return this.getConfig().getHttp().post(this.getCompleteMultipartUploadAddress(),e)}};let Y=j;__publicField(Y,"instance");const J=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new J(e)),this.instance}getBaseAddress(){return this.getConfig().getUpms()+"/authority"}};let V=J;__publicField(V,"instance");const X=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new X(e)),this.instance}getBaseAddress(){return this.getConfig().getUpms()+"/default-role"}};let Q=X;__publicField(Q,"instance");const Z=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new Z(e)),this.instance}getBaseAddress(){return this.getConfig().getUpms()+"/role"}getRoleCodePath(e){return this.getParamPath(this.getBaseAddress(),e)}fetchByRoleCode(e){return this.getConfig().getHttp().get(this.getRoleCodePath(e))}};let q=Z;__publicField(q,"instance");const $=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new $(e)),this.instance}getBaseAddress(){return this.getConfig().getUpms()+"/security-attribute"}};let ee=$;__publicField(ee,"instance");const te=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new te(e)),this.instance}getBaseAddress(){return this.getConfig().getUpms()+"/user"}getUsernameAddress(){return this.getBaseAddress()+"/sign-in"}getChangePasswordAddress(){return this.getBaseAddress()+"/change-password"}getUsernamePath(e){return this.getParamPath(this.getUsernameAddress(),e)}fetchByUsername(e){return this.getConfig().getHttp().get(this.getUsernamePath(e))}changePassword(e,s){return this.getConfig().getHttp().put(this.getChangePasswordAddress(),{userId:e,password:s},{contentType:t.ContentTypeEnum.URL_ENCODED})}};let se=te;__publicField(se,"instance");const ne=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new ne(e)),this.instance}getBaseAddress(){return this.getConfig().getUpms()+"/element"}fetchById(e){return this.getConfig().getHttp().get(this.getIdPath(e))}};let ie=ne;__publicField(ie,"instance");const re=class{constructor(e){__publicField(this,"config",{}),this.config=e}static getInstance(e){return null==this.instance&&(this.instance=new re(e)),this.instance}getOAuth2TokenAddress(){return this.config.getUaa()+"/oauth2/token"}getOAuth2RevokeAddress(){return this.config.getUaa()+"/oauth2/revoke"}getOAuth2SignOutAddress(){return this.config.getUaa()+"/oauth2/sign-out"}getBasicHeader(){return"Basic "+t.Base64.encode(this.config.getClientId()+":"+this.config.getClientSecret())}signOut(e){return this.config.getHttp().put(this.getOAuth2SignOutAddress(),{accessToken:e},{contentType:t.ContentTypeEnum.URL_ENCODED},{headers:{Authorization:this.getBasicHeader()}})}revoke(e){return this.config.getHttp().post(this.getOAuth2RevokeAddress(),{token:e},{contentType:t.ContentTypeEnum.URL_ENCODED},{headers:{Authorization:this.getBasicHeader()}})}refreshTokenFlow(e,s=!1){return this.config.getHttp().post(this.getOAuth2TokenAddress(),s?{refresh_token:e,grant_type:"refresh_token",scope:"openid"}:{refresh_token:e,grant_type:"refresh_token"},{contentType:t.ContentTypeEnum.URL_ENCODED},{headers:{Authorization:this.getBasicHeader()}})}passwordFlow(e,s,n=!1){return this.config.getHttp().post(this.getOAuth2TokenAddress(),n?{username:e,password:s,grant_type:"password",scope:"openid"}:{username:e,password:s,grant_type:"password"},{contentType:t.ContentTypeEnum.URL_ENCODED},{headers:{Authorization:this.getBasicHeader()}})}authorizationCodeFlow(e,s,n="",i=!1){return this.config.getHttp().post(this.getOAuth2TokenAddress(),i?{code:e,state:n,redirect_uri:s,grant_type:"authorization_code",scope:"openid"}:{code:e,state:n,redirect_uri:s,grant_type:"authorization_code"},{contentType:t.ContentTypeEnum.URL_ENCODED},{headers:{Authorization:this.getBasicHeader()}})}socialCredentialsFlowBySms(e,s,n=!1){return this.config.getHttp().post(this.getOAuth2TokenAddress(),n?{mobile:e,code:s,grant_type:"social_credentials",source:"SMS",scope:"openid"}:{mobile:e,code:s,grant_type:"social_credentials",source:"SMS"},{contentType:t.ContentTypeEnum.URL_ENCODED},{headers:{Authorization:this.getBasicHeader()}})}socialCredentialsFlowByJustAuth(e,s,n=!1){return this.config.getHttp().post(this.getOAuth2TokenAddress(),n?{...s,grant_type:"social_credentials",source:e,scope:"openid"}:{...s,grant_type:"social_credentials",source:e},{contentType:t.ContentTypeEnum.URL_ENCODED},{headers:{Authorization:this.getBasicHeader()}})}};let ce=re;__publicField(ce,"instance");const ae=class{constructor(e){__publicField(this,"config",{}),this.config=e}static getInstance(e){return null==this.instance&&(this.instance=new ae(e)),this.instance}createSession(e=""){const t=this.config.getUaa()+"/open/identity/session";return this.config.getHttp().post(t,{clientId:this.config.getClientId(),clientSecret:this.config.getClientSecret(),sessionId:e})}exchange(e="",t){const s=this.config.getUaa()+"/open/identity/exchange";return this.config.getHttp().post(s,{confidential:t,sessionId:e})}getPrompt(e){const t=this.config.getUaa()+"/open/identity/prompt";return this.config.getHttp().post(t,{username:e})}createCaptcha(e,t){const s=this.config.getUaa()+"/open/captcha";return this.config.getHttp().get(s,{identity:e,category:t})}verifyCaptcha(e,t,s){const n=this.config.getUaa()+"/open/captcha",i={identity:e,category:t,coordinate:{x:0,y:0},coordinates:[],characters:""};return t===l.WORD_CLICK?i.coordinates=s:t===l.JIGSAW?i.coordinate=s:i.characters=s,this.config.getHttp().post(n,i)}createVerificationCode(e){const s=this.config.getUpms()+"/open/identity/verification-code";return this.config.getHttp().post(s,{mobile:e},{contentType:t.ContentTypeEnum.URL_ENCODED})}getSocialList(){const e=this.config.getUpms()+"/open/identity/sources";return this.config.getHttp().get(e)}};let oe=ae;__publicField(oe,"instance");const ge=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new ge(e)),this.instance}getBaseAddress(){return this.getConfig().getMsg()+"/dialogue/contact"}};let ue=ge;__publicField(ue,"instance");const le=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new le(e)),this.instance}getBaseAddress(){return this.getConfig().getMsg()+"/dialogue/detail"}getDeleteDialoguePath(e){return this.getParamPath(this.getBaseAddress(),e)}deleteDialogueById(e){return this.getConfig().getHttp().delete(this.getDeleteDialoguePath(e))}};let de=le;__publicField(de,"instance");const he=class extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new he(e)),this.instance}getBaseAddress(){return this.getConfig().getMsg()+"/notification"}getAllReadAddress(){return this.getBaseAddress()+"/all-read"}setAllRead(e){return this.getConfig().getHttp().put(this.getAllReadAddress(),{userId:e},{contentType:t.ContentTypeEnum.URL_ENCODED})}};let pe=he;__publicField(pe,"instance");const Ae=class{constructor(e){__publicField(this,"config",{}),this.config=e}static getInstance(e){return null==this.instance&&(this.instance=new Ae(e)),this.instance}getBaseAddress(){return this.config.getMsg()+"/message/websocket"}getStatAddress(){return this.getBaseAddress()+"/stat"}fetchAllStat(){return this.config.getHttp().get(this.getStatAddress())}};let Ie=Ae;__publicField(Ie,"instance");const Ee=class{constructor(e){__publicField(this,"config",{}),this.config=e}static getInstance(e){return null==this.instance&&(this.instance=new Ee(e)),this.instance}getConfig(){return this.config}open(){return oe.getInstance(this.config)}oauth2(){return ce.getInstance(this.config)}oauth2Application(){return p.getInstance(this.config)}oauth2Scope(){return I.getInstance(this.config)}oauth2Authorization(){return C.getInstance(this.config)}oauth2Compliance(){return S.getInstance(this.config)}assetServer(){return T.getInstance(this.config)}assetApplication(){return y.getInstance(this.config)}dbAccount(){return m.getInstance(this.config)}dbCatalog(){return P.getInstance(this.config)}dbInstance(){return b.getInstance(this.config)}uaaConstant(){return D.getInstance(this.config)}upmsConstant(){return v.getInstance(this.config)}sysOrganization(){return F.getInstance(this.config)}sysDepartment(){return M.getInstance(this.config)}sysEmployee(){return x.getInstance(this.config)}sysEmployeeAllocatable(){return k.getInstance(this.config)}minioBucket(){return K.getInstance(this.config)}minioMultipart(){return Y.getInstance(this.config)}sysAuthority(){return V.getInstance(this.config)}sysDefaultRole(){return Q.getInstance(this.config)}sysElement(){return ie.getInstance(this.config)}sysSecurityAttribute(){return ee.getInstance(this.config)}sysRole(){return q.getInstance(this.config)}sysUser(){return se.getInstance(this.config)}dialogueContact(){return ue.getInstance(this.config)}dialogueDetail(){return de.getInstance(this.config)}notification(){return pe.getInstance(this.config)}webSocketMessage(){return Ie.getInstance(this.config)}};let Ce=Ee;__publicField(Ce,"instance");Object.defineProperty(e,"Axios",{enumerable:!0,get:()=>t.Axios}),Object.defineProperty(e,"Base64",{enumerable:!0,get:()=>t.Base64}),Object.defineProperty(e,"BaseService",{enumerable:!0,get:()=>t.BaseService}),Object.defineProperty(e,"ContentTypeEnum",{enumerable:!0,get:()=>t.ContentTypeEnum}),Object.defineProperty(e,"HttpConfig",{enumerable:!0,get:()=>t.HttpConfig}),Object.defineProperty(e,"Service",{enumerable:!0,get:()=>t.Service}),Object.defineProperty(e,"lodash",{enumerable:!0,get:()=>t.lodash}),Object.defineProperty(e,"moment",{enumerable:!0,get:()=>t.moment}),e.ApplicationEnum=a,e.AssetApplicationService=y,e.AssetServerService=T,e.AuthorityTypeEnum=s,e.BucketService=K,e.CaptchaCategoryEnum=l,e.ConstantEnum=c,e.DatabaseAccountService=m,e.DatabaseCatalogService=P,e.DatabaseInstanceService=b,e.GenderEnum=i,e.IdentityEnum=n,e.MultipartUploadService=Y,e.NotificationCategoryEnum=d,e.OAuth2ApiService=ce,e.OAuth2ApplicationService=p,e.OAuth2AuthorizationService=C,e.OAuth2ComplianceService=S,e.OAuth2ScopeService=I,e.OpenApiService=oe,e.SocialSourceEnum=u,e.StatusEnum=r,e.SupplierType=g,e.SysAuthorityService=V,e.SysDefaultRoleService=Q,e.SysDepartmentService=M,e.SysElementService=ie,e.SysEmployeeAllocatableService=k,e.SysEmployeeService=x,e.SysOrganizationService=F,e.SysRoleService=q,e.SysSecurityAttributeService=ee,e.SysUserService=se,e.TechnologyEnum=o,e.UaaConstantService=D,e.UpmsConstantService=v,e.createApi=(e,s,n,i,r)=>{const c=new t.HttpConfig(e,s,n,i,r);return Ce.getInstance(c)},Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
