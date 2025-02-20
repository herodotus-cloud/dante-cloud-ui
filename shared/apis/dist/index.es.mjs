var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { BaseService, ContentTypeEnum, Base64, HttpConfig } from "@herodotus/core";
import { Axios, Base64 as Base642, BaseService as BaseService2, ContentTypeEnum as ContentTypeEnum2, HttpConfig as HttpConfig2, Service, lodash, moment } from "@herodotus/core";
var AuthorityTypeEnum = /* @__PURE__ */ ((AuthorityTypeEnum2) => {
  AuthorityTypeEnum2[AuthorityTypeEnum2["API"] = 0] = "API";
  AuthorityTypeEnum2[AuthorityTypeEnum2["MENU"] = 1] = "MENU";
  AuthorityTypeEnum2[AuthorityTypeEnum2["PAGE"] = 2] = "PAGE";
  AuthorityTypeEnum2[AuthorityTypeEnum2["MINI_PAGE"] = 3] = "MINI_PAGE";
  return AuthorityTypeEnum2;
})(AuthorityTypeEnum || {});
var IdentityEnum = /* @__PURE__ */ ((IdentityEnum2) => {
  IdentityEnum2[IdentityEnum2["LEADERSHIP"] = 0] = "LEADERSHIP";
  IdentityEnum2[IdentityEnum2["SECTION_LEADER"] = 1] = "SECTION_LEADER";
  IdentityEnum2[IdentityEnum2["STAFF"] = 2] = "STAFF";
  return IdentityEnum2;
})(IdentityEnum || {});
var GenderEnum = /* @__PURE__ */ ((GenderEnum2) => {
  GenderEnum2[GenderEnum2["OTHERS"] = 0] = "OTHERS";
  GenderEnum2[GenderEnum2["MAN"] = 1] = "MAN";
  GenderEnum2[GenderEnum2["WOMAN"] = 2] = "WOMAN";
  return GenderEnum2;
})(GenderEnum || {});
var StatusEnum = /* @__PURE__ */ ((StatusEnum2) => {
  StatusEnum2[StatusEnum2["FORBIDDEN"] = 0] = "FORBIDDEN";
  StatusEnum2[StatusEnum2["ENABLE"] = 1] = "ENABLE";
  StatusEnum2[StatusEnum2["LOCKING"] = 2] = "LOCKING";
  StatusEnum2[StatusEnum2["EXPIRED"] = 3] = "EXPIRED";
  return StatusEnum2;
})(StatusEnum || {});
var ConstantEnum = /* @__PURE__ */ ((ConstantEnum2) => {
  ConstantEnum2["APPLICATION"] = "applicationType";
  ConstantEnum2["GENDER"] = "gender";
  ConstantEnum2["GRANT"] = "grantType";
  ConstantEnum2["IDENTITY"] = "identity";
  ConstantEnum2["STATUS"] = "status";
  ConstantEnum2["SUPPLIER"] = "supplierType";
  ConstantEnum2["TECHNOLOGY"] = "technologyType";
  ConstantEnum2["EXPRESSION"] = "expression";
  return ConstantEnum2;
})(ConstantEnum || {});
var ApplicationEnum = /* @__PURE__ */ ((ApplicationEnum2) => {
  ApplicationEnum2[ApplicationEnum2["WEB"] = 0] = "WEB";
  ApplicationEnum2[ApplicationEnum2["SERVICE"] = 1] = "SERVICE";
  ApplicationEnum2[ApplicationEnum2["APP"] = 2] = "APP";
  ApplicationEnum2[ApplicationEnum2["WAP"] = 3] = "WAP";
  ApplicationEnum2[ApplicationEnum2["MINI"] = 4] = "MINI";
  return ApplicationEnum2;
})(ApplicationEnum || {});
var TechnologyEnum = /* @__PURE__ */ ((TechnologyEnum2) => {
  TechnologyEnum2[TechnologyEnum2["JAVA"] = 0] = "JAVA";
  TechnologyEnum2[TechnologyEnum2["NET"] = 1] = "NET";
  TechnologyEnum2[TechnologyEnum2["PHP"] = 2] = "PHP";
  TechnologyEnum2[TechnologyEnum2["NODE"] = 3] = "NODE";
  TechnologyEnum2[TechnologyEnum2["IOS"] = 4] = "IOS";
  TechnologyEnum2[TechnologyEnum2["ANDROID"] = 5] = "ANDROID";
  TechnologyEnum2[TechnologyEnum2["WEAPP"] = 6] = "WEAPP";
  TechnologyEnum2[TechnologyEnum2["ALIAPP"] = 7] = "ALIAPP";
  TechnologyEnum2[TechnologyEnum2["DUAPP"] = 8] = "DUAPP";
  return TechnologyEnum2;
})(TechnologyEnum || {});
var SupplierType = /* @__PURE__ */ ((SupplierType2) => {
  SupplierType2[SupplierType2["CORE"] = 0] = "CORE";
  SupplierType2[SupplierType2["BAT"] = 1] = "BAT";
  SupplierType2[SupplierType2["THIRD_PARTY"] = 2] = "THIRD_PARTY";
  SupplierType2[SupplierType2["Outsourcing"] = 3] = "Outsourcing";
  return SupplierType2;
})(SupplierType || {});
var SocialSourceEnum = /* @__PURE__ */ ((SocialSourceEnum2) => {
  SocialSourceEnum2[SocialSourceEnum2["INSTITUTION"] = 0] = "INSTITUTION";
  SocialSourceEnum2[SocialSourceEnum2["SMS"] = 1] = "SMS";
  SocialSourceEnum2[SocialSourceEnum2["WXAPP"] = 2] = "WXAPP";
  SocialSourceEnum2[SocialSourceEnum2["QQ"] = 3] = "QQ";
  SocialSourceEnum2[SocialSourceEnum2["WEIBO"] = 4] = "WEIBO";
  SocialSourceEnum2[SocialSourceEnum2["BAIDU"] = 5] = "BAIDU";
  SocialSourceEnum2[SocialSourceEnum2["WECHAT_OPEN"] = 6] = "WECHAT_OPEN";
  SocialSourceEnum2[SocialSourceEnum2["WECHAT_MP"] = 7] = "WECHAT_MP";
  SocialSourceEnum2[SocialSourceEnum2["WECHAT_ENTERPRISE"] = 8] = "WECHAT_ENTERPRISE";
  SocialSourceEnum2[SocialSourceEnum2["WECHAT_ENTERPRISE_WEB"] = 9] = "WECHAT_ENTERPRISE_WEB";
  SocialSourceEnum2[SocialSourceEnum2["DINGTALK"] = 10] = "DINGTALK";
  SocialSourceEnum2[SocialSourceEnum2["DINGTALK_ACCOUNT"] = 11] = "DINGTALK_ACCOUNT";
  SocialSourceEnum2[SocialSourceEnum2["ALIYUN"] = 12] = "ALIYUN";
  SocialSourceEnum2[SocialSourceEnum2["TAOBAO"] = 13] = "TAOBAO";
  SocialSourceEnum2[SocialSourceEnum2["ALIPAY"] = 14] = "ALIPAY";
  SocialSourceEnum2[SocialSourceEnum2["TEAMBITION"] = 15] = "TEAMBITION";
  SocialSourceEnum2[SocialSourceEnum2["HUAWEI"] = 16] = "HUAWEI";
  SocialSourceEnum2[SocialSourceEnum2["FEISHU"] = 17] = "FEISHU";
  SocialSourceEnum2[SocialSourceEnum2["JD"] = 18] = "JD";
  SocialSourceEnum2[SocialSourceEnum2["DOUYIN"] = 19] = "DOUYIN";
  SocialSourceEnum2[SocialSourceEnum2["TOUTIAO"] = 20] = "TOUTIAO";
  SocialSourceEnum2[SocialSourceEnum2["MI"] = 21] = "MI";
  SocialSourceEnum2[SocialSourceEnum2["RENREN"] = 22] = "RENREN";
  SocialSourceEnum2[SocialSourceEnum2["MEITUAN"] = 23] = "MEITUAN";
  SocialSourceEnum2[SocialSourceEnum2["ELEME"] = 24] = "ELEME";
  SocialSourceEnum2[SocialSourceEnum2["KUJIALE"] = 25] = "KUJIALE";
  SocialSourceEnum2[SocialSourceEnum2["XMLY"] = 26] = "XMLY";
  SocialSourceEnum2[SocialSourceEnum2["GITEE"] = 27] = "GITEE";
  SocialSourceEnum2[SocialSourceEnum2["OSCHINA"] = 28] = "OSCHINA";
  SocialSourceEnum2[SocialSourceEnum2["CSDN"] = 29] = "CSDN";
  SocialSourceEnum2[SocialSourceEnum2["GITHUB"] = 30] = "GITHUB";
  SocialSourceEnum2[SocialSourceEnum2["GITLAB"] = 31] = "GITLAB";
  SocialSourceEnum2[SocialSourceEnum2["STACK_OVERFLOW"] = 32] = "STACK_OVERFLOW";
  SocialSourceEnum2[SocialSourceEnum2["CODING"] = 33] = "CODING";
  SocialSourceEnum2[SocialSourceEnum2["GOOGLE"] = 34] = "GOOGLE";
  SocialSourceEnum2[SocialSourceEnum2["MICROSOFT"] = 35] = "MICROSOFT";
  SocialSourceEnum2[SocialSourceEnum2["FACEBOOK"] = 36] = "FACEBOOK";
  SocialSourceEnum2[SocialSourceEnum2["LINKEDIN"] = 37] = "LINKEDIN";
  SocialSourceEnum2[SocialSourceEnum2["TWITTER"] = 38] = "TWITTER";
  SocialSourceEnum2[SocialSourceEnum2["AMAZON"] = 39] = "AMAZON";
  SocialSourceEnum2[SocialSourceEnum2["SLACK"] = 40] = "SLACK";
  SocialSourceEnum2[SocialSourceEnum2["LINE"] = 41] = "LINE";
  SocialSourceEnum2[SocialSourceEnum2["OKTA"] = 42] = "OKTA";
  SocialSourceEnum2[SocialSourceEnum2["PINTEREST"] = 43] = "PINTEREST";
  return SocialSourceEnum2;
})(SocialSourceEnum || {});
var CaptchaCategoryEnum = /* @__PURE__ */ ((CaptchaCategoryEnum2) => {
  CaptchaCategoryEnum2["JIGSAW"] = "JIGSAW";
  CaptchaCategoryEnum2["WORD_CLICK"] = "WORD_CLICK";
  CaptchaCategoryEnum2["ARITHMETIC"] = "ARITHMETIC";
  CaptchaCategoryEnum2["CHINESE"] = "CHINESE";
  CaptchaCategoryEnum2["CHINESE_GIF"] = "CHINESE_GIF";
  CaptchaCategoryEnum2["SPEC_GIF"] = "SPEC_GIF";
  CaptchaCategoryEnum2["SPEC"] = "SPEC";
  CaptchaCategoryEnum2["HUTOOL_LINE"] = "HUTOOL_LINE";
  CaptchaCategoryEnum2["HUTOOL_CIRCLE"] = "HUTOOL_CIRCLE";
  CaptchaCategoryEnum2["HUTOOL_SHEAR"] = "HUTOOL_SHEAR";
  CaptchaCategoryEnum2["HUTOOL_GIF"] = "HUTOOL_GIF";
  return CaptchaCategoryEnum2;
})(CaptchaCategoryEnum || {});
var NotificationCategoryEnum = /* @__PURE__ */ ((NotificationCategoryEnum2) => {
  NotificationCategoryEnum2[NotificationCategoryEnum2["ANNOUNCEMENT"] = 0] = "ANNOUNCEMENT";
  NotificationCategoryEnum2[NotificationCategoryEnum2["DIALOGUE"] = 1] = "DIALOGUE";
  return NotificationCategoryEnum2;
})(NotificationCategoryEnum || {});
const _OAuth2ApplicationService = class _OAuth2ApplicationService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _OAuth2ApplicationService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUaa() + "/authorize/application";
  }
};
__publicField(_OAuth2ApplicationService, "instance");
let OAuth2ApplicationService = _OAuth2ApplicationService;
const _OAuth2ScopeService = class _OAuth2ScopeService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _OAuth2ScopeService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUaa() + "/authorize/scope";
  }
  getAssignedAddress() {
    return this.getBaseAddress() + "/assigned";
  }
  getScopeCodePath(scopeCode) {
    return this.getParamPath(this.getBaseAddress(), scopeCode);
  }
  fetchByScopeCode(scopeCode) {
    return this.getConfig().getHttp().get(this.getScopeCodePath(scopeCode));
  }
  assigned(data) {
    return this.getConfig().getHttp().post(this.getAssignedAddress(), data);
  }
};
__publicField(_OAuth2ScopeService, "instance");
let OAuth2ScopeService = _OAuth2ScopeService;
const _OAuth2AuthorizationService = class _OAuth2AuthorizationService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _OAuth2AuthorizationService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUaa() + "/authorize/authorization";
  }
};
__publicField(_OAuth2AuthorizationService, "instance");
let OAuth2AuthorizationService = _OAuth2AuthorizationService;
const _OAuth2ComplianceService = class _OAuth2ComplianceService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _OAuth2ComplianceService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUaa() + "/authorize/compliance";
  }
};
__publicField(_OAuth2ComplianceService, "instance");
let OAuth2ComplianceService = _OAuth2ComplianceService;
const _OAuth2ProductService = class _OAuth2ProductService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _OAuth2ProductService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUaa() + "/authorize/product";
  }
};
__publicField(_OAuth2ProductService, "instance");
let OAuth2ProductService = _OAuth2ProductService;
const _OAuth2DeviceService = class _OAuth2DeviceService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _OAuth2DeviceService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUaa() + "/authorize/device";
  }
};
__publicField(_OAuth2DeviceService, "instance");
let OAuth2DeviceService = _OAuth2DeviceService;
const _AssetServerService = class _AssetServerService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _AssetServerService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getCmdb() + "/asset/server";
  }
};
__publicField(_AssetServerService, "instance");
let AssetServerService = _AssetServerService;
const _AssetApplicationService = class _AssetApplicationService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _AssetApplicationService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getCmdb() + "/asset/application";
  }
};
__publicField(_AssetApplicationService, "instance");
let AssetApplicationService = _AssetApplicationService;
const _DatabaseAccountService = class _DatabaseAccountService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _DatabaseAccountService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getCmdb() + "/db/account";
  }
};
__publicField(_DatabaseAccountService, "instance");
let DatabaseAccountService = _DatabaseAccountService;
const _DatabaseCatalogService = class _DatabaseCatalogService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _DatabaseCatalogService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getCmdb() + "/db/catalog";
  }
};
__publicField(_DatabaseCatalogService, "instance");
let DatabaseCatalogService = _DatabaseCatalogService;
const _DatabaseInstanceService = class _DatabaseInstanceService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _DatabaseInstanceService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getCmdb() + "/db/instance";
  }
};
__publicField(_DatabaseInstanceService, "instance");
let DatabaseInstanceService = _DatabaseInstanceService;
const _UaaConstantService = class _UaaConstantService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _UaaConstantService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUaa() + "/authorize/constant/enums";
  }
};
__publicField(_UaaConstantService, "instance");
let UaaConstantService = _UaaConstantService;
const _UpmsConstantService = class _UpmsConstantService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _UpmsConstantService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUpms() + "/system/constant/enums";
  }
};
__publicField(_UpmsConstantService, "instance");
let UpmsConstantService = _UpmsConstantService;
const _SysOrganizationService = class _SysOrganizationService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _SysOrganizationService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUpms() + "/hr/organization";
  }
};
__publicField(_SysOrganizationService, "instance");
let SysOrganizationService = _SysOrganizationService;
const _SysDepartmentService = class _SysDepartmentService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _SysDepartmentService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUpms() + "/hr/department";
  }
};
__publicField(_SysDepartmentService, "instance");
let SysDepartmentService = _SysDepartmentService;
const _SysEmployeeService = class _SysEmployeeService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _SysEmployeeService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUpms() + "/hr/employee";
  }
  getAssignedAddress() {
    return this.getBaseAddress() + "/assigned";
  }
  getAllocatableAddress() {
    return this.getBaseAddress() + "/allocatable";
  }
  getEmployeeNamePath(employeeName) {
    return this.getParamPath(this.getBaseAddress(), employeeName);
  }
  fetchByEmployeeName(employeeName) {
    return this.getConfig().getHttp().get(this.getEmployeeNamePath(employeeName));
  }
  fetchAssignedByPage(params, others = {}) {
    const fullParams = Object.assign(params, others);
    return this.getConfig().getHttp().get(this.getAssignedAddress(), fullParams);
  }
  deleteAllocatable(data) {
    return this.getConfig().getHttp().delete(this.getAllocatableAddress(), data);
  }
  saveAllocatable(data) {
    return this.getConfig().getHttp().post(this.getAllocatableAddress(), data);
  }
  authorizeUser(data) {
    return this.getConfig().getHttp().put(this.getBaseAddress(), data, {
      contentType: ContentTypeEnum.URL_ENCODED
    });
  }
};
__publicField(_SysEmployeeService, "instance");
let SysEmployeeService = _SysEmployeeService;
const _SysEmployeeAllocatableService = class _SysEmployeeAllocatableService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _SysEmployeeAllocatableService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUpms() + "/";
  }
};
__publicField(_SysEmployeeAllocatableService, "instance");
let SysEmployeeAllocatableService = _SysEmployeeAllocatableService;
const _SysPermissionService = class _SysPermissionService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _SysPermissionService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUpms() + "/security/permission";
  }
};
__publicField(_SysPermissionService, "instance");
let SysPermissionService = _SysPermissionService;
const _SysRoleService = class _SysRoleService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _SysRoleService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUpms() + "/security/role";
  }
  getRoleCodePath(roleCode) {
    return this.getParamPath(this.getBaseAddress(), roleCode);
  }
  fetchByRoleCode(roleCode) {
    return this.getConfig().getHttp().get(this.getRoleCodePath(roleCode));
  }
};
__publicField(_SysRoleService, "instance");
let SysRoleService = _SysRoleService;
const _SysUserService = class _SysUserService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _SysUserService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUpms() + "/security/user";
  }
  getUsernameAddress() {
    return this.getBaseAddress() + "/sign-in";
  }
  getChangePasswordAddress() {
    return this.getBaseAddress() + "/change-password";
  }
  getUsernamePath(username) {
    return this.getParamPath(this.getUsernameAddress(), username);
  }
  fetchByUsername(username) {
    return this.getConfig().getHttp().get(this.getUsernamePath(username));
  }
  changePassword(userId, password) {
    return this.getConfig().getHttp().put(
      this.getChangePasswordAddress(),
      { userId, password },
      {
        contentType: ContentTypeEnum.URL_ENCODED
      }
    );
  }
};
__publicField(_SysUserService, "instance");
let SysUserService = _SysUserService;
const _SysAttributeService = class _SysAttributeService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _SysAttributeService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUpms() + "/security/attribute";
  }
};
__publicField(_SysAttributeService, "instance");
let SysAttributeService = _SysAttributeService;
const _SysDefaultRoleService = class _SysDefaultRoleService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _SysDefaultRoleService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUpms() + "/security/default-role";
  }
};
__publicField(_SysDefaultRoleService, "instance");
let SysDefaultRoleService = _SysDefaultRoleService;
const _SysElementService = class _SysElementService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _SysElementService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUpms() + "/security/element";
  }
  fetchById(id) {
    return this.getConfig().getHttp().get(this.getIdPath(id));
  }
};
__publicField(_SysElementService, "instance");
let SysElementService = _SysElementService;
const _SysTenantDataSourceService = class _SysTenantDataSourceService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _SysTenantDataSourceService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getUaa() + "/security/tenant/datasource";
  }
  getTenantIdPath(tenantId) {
    return this.getParamPath(this.getBaseAddress(), tenantId);
  }
  fetchByTenantId(tenantId) {
    return this.getConfig().getHttp().get(this.getTenantIdPath(tenantId));
  }
};
__publicField(_SysTenantDataSourceService, "instance");
let SysTenantDataSourceService = _SysTenantDataSourceService;
const _ExtendedTaskService = class _ExtendedTaskService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _ExtendedTaskService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getBpmn(true, true) + "/task";
  }
  getToDoTasksAddress() {
    return this.getBaseAddress() + "/todo";
  }
  getCompletedTasksAddress() {
    return this.getBaseAddress() + "/completed";
  }
  fetchToDoTasksByPage(params, others = {}) {
    const fullParams = Object.assign(params, others);
    return this.getConfig().getHttp().get(this.getToDoTasksAddress(), fullParams);
  }
  fetchCompletedTasksByPage(params, others = {}) {
    const fullParams = Object.assign(params, others);
    return this.getConfig().getHttp().get(this.getCompletedTasksAddress(), fullParams);
  }
};
__publicField(_ExtendedTaskService, "instance");
let ExtendedTaskService = _ExtendedTaskService;
const _OAuth2ApiService = class _OAuth2ApiService {
  constructor(config) {
    __publicField(this, "config", {});
    this.config = config;
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _OAuth2ApiService(config);
    }
    return this.instance;
  }
  getOAuth2TokenAddress() {
    return this.config.getUaa() + "/oauth2/token";
  }
  getOAuth2RevokeAddress() {
    return this.config.getUaa() + "/oauth2/revoke";
  }
  getOAuth2SignOutAddress() {
    return this.config.getUaa() + "/oauth2/sign-out";
  }
  getBasicHeader() {
    return "Basic " + Base64.encode(this.config.getClientId() + ":" + this.config.getClientSecret());
  }
  signOut(token) {
    return this.config.getHttp().put(
      this.getOAuth2SignOutAddress(),
      {
        accessToken: token
      },
      {
        contentType: ContentTypeEnum.URL_ENCODED
      },
      {
        headers: {
          Authorization: this.getBasicHeader()
        }
      }
    );
  }
  revoke(token) {
    return this.config.getHttp().post(
      this.getOAuth2RevokeAddress(),
      {
        token
      },
      {
        contentType: ContentTypeEnum.URL_ENCODED
      },
      {
        headers: {
          Authorization: this.getBasicHeader()
        }
      }
    );
  }
  refreshTokenFlow(refreshToken, oidc = false) {
    return this.config.getHttp().post(
      this.getOAuth2TokenAddress(),
      oidc ? { refresh_token: refreshToken, grant_type: "refresh_token", scope: "openid" } : { refresh_token: refreshToken, grant_type: "refresh_token" },
      {
        contentType: ContentTypeEnum.URL_ENCODED
      },
      {
        headers: {
          Authorization: this.getBasicHeader()
        }
      }
    );
  }
  passwordFlow(username, password, oidc = false) {
    return this.config.getHttp().post(
      this.getOAuth2TokenAddress(),
      oidc ? { username, password, grant_type: "password", scope: "openid" } : { username, password, grant_type: "password" },
      {
        contentType: ContentTypeEnum.URL_ENCODED
      },
      {
        headers: {
          Authorization: this.getBasicHeader()
        }
      }
    );
  }
  authorizationCodeFlow(code, redirect_uri, state = "", oidc = false) {
    return this.config.getHttp().post(
      this.getOAuth2TokenAddress(),
      oidc ? {
        code,
        state,
        redirect_uri,
        grant_type: "authorization_code",
        scope: "openid"
      } : {
        code,
        state,
        redirect_uri,
        grant_type: "authorization_code"
      },
      {
        contentType: ContentTypeEnum.URL_ENCODED
      },
      {
        headers: {
          Authorization: this.getBasicHeader()
        }
      }
    );
  }
  socialCredentialsFlowBySms(mobile, code, oidc = false) {
    return this.config.getHttp().post(
      this.getOAuth2TokenAddress(),
      oidc ? { mobile, code, grant_type: "social_credentials", source: "SMS", scope: "openid" } : { mobile, code, grant_type: "social_credentials", source: "SMS" },
      {
        contentType: ContentTypeEnum.URL_ENCODED
      },
      {
        headers: {
          Authorization: this.getBasicHeader()
        }
      }
    );
  }
  socialCredentialsFlowByJustAuth(source, accessPrincipal, oidc = false) {
    return this.config.getHttp().post(
      this.getOAuth2TokenAddress(),
      oidc ? { ...accessPrincipal, grant_type: "social_credentials", source, scope: "openid" } : { ...accessPrincipal, grant_type: "social_credentials", source },
      {
        contentType: ContentTypeEnum.URL_ENCODED
      },
      {
        headers: {
          Authorization: this.getBasicHeader()
        }
      }
    );
  }
};
__publicField(_OAuth2ApiService, "instance");
let OAuth2ApiService = _OAuth2ApiService;
const _OpenApiService = class _OpenApiService {
  constructor(config) {
    __publicField(this, "config", {});
    this.config = config;
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _OpenApiService(config);
    }
    return this.instance;
  }
  createSession(sessionId = "") {
    const SECURE_SESSION = this.config.getUaa() + "/open/identity/session";
    return this.config.getHttp().post(SECURE_SESSION, {
      clientId: this.config.getClientId(),
      clientSecret: this.config.getClientSecret(),
      sessionId
    });
  }
  exchange(sessionId = "", publicKey) {
    const SECURE_EXCHANGE = this.config.getUaa() + "/open/identity/exchange";
    return this.config.getHttp().post(SECURE_EXCHANGE, {
      publicKey,
      sessionId
    });
  }
  getPrompt(username) {
    const SECURE_PROMPT = this.config.getUaa() + "/open/identity/prompt";
    return this.config.getHttp().post(SECURE_PROMPT, {
      username
    });
  }
  createCaptcha(sessionId, type) {
    const SECURE_CAPTCHA = this.config.getUaa() + "/open/captcha";
    return this.config.getHttp().get(SECURE_CAPTCHA, {
      identity: sessionId,
      category: type
    });
  }
  verifyCaptcha(identity, category, data) {
    const SECURE_CAPTCHA = this.config.getUaa() + "/open/captcha";
    const verify = {
      identity,
      category,
      coordinate: { x: 0, y: 0 },
      coordinates: [],
      characters: ""
    };
    if (category === CaptchaCategoryEnum.WORD_CLICK) {
      verify.coordinates = data;
    } else if (category === CaptchaCategoryEnum.JIGSAW) {
      verify.coordinate = data;
    } else {
      verify.characters = data;
    }
    return this.config.getHttp().post(SECURE_CAPTCHA, verify);
  }
  createVerificationCode(mobile) {
    const SECURE_VERIFICATION_CODE = this.config.getUpms() + "/open/identity/verification-code";
    return this.config.getHttp().post(
      SECURE_VERIFICATION_CODE,
      {
        mobile
      },
      {
        contentType: ContentTypeEnum.URL_ENCODED
      }
    );
  }
  getSocialList() {
    const SECURE_SOCIAL_LIST = this.config.getUpms() + "/open/identity/sources";
    return this.config.getHttp().get(SECURE_SOCIAL_LIST);
  }
};
__publicField(_OpenApiService, "instance");
let OpenApiService = _OpenApiService;
const _DialogueContactService = class _DialogueContactService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _DialogueContactService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getMsg() + "/message/dialogue/contact";
  }
};
__publicField(_DialogueContactService, "instance");
let DialogueContactService = _DialogueContactService;
const _DialogueDetailService = class _DialogueDetailService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _DialogueDetailService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getMsg() + "/message/dialogue/detail";
  }
  getDeleteDialoguePath(id) {
    return this.getParamPath(this.getBaseAddress(), id);
  }
  deleteDialogueById(id) {
    return this.getConfig().getHttp().delete(this.getDeleteDialoguePath(id));
  }
};
__publicField(_DialogueDetailService, "instance");
let DialogueDetailService = _DialogueDetailService;
const _NotificationService = class _NotificationService extends BaseService {
  constructor(config) {
    super(config);
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _NotificationService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.getConfig().getMsg() + "/message/notification";
  }
  getAllReadAddress() {
    return this.getBaseAddress() + "/all-read";
  }
  setAllRead(userId) {
    return this.getConfig().getHttp().put(
      this.getAllReadAddress(),
      { userId },
      {
        contentType: ContentTypeEnum.URL_ENCODED
      }
    );
  }
};
__publicField(_NotificationService, "instance");
let NotificationService = _NotificationService;
const _WebSocketMessageService = class _WebSocketMessageService {
  constructor(config) {
    __publicField(this, "config", {});
    this.config = config;
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _WebSocketMessageService(config);
    }
    return this.instance;
  }
  getBaseAddress() {
    return this.config.getMsg() + "/message/websocket";
  }
  getStatAddress() {
    return this.getBaseAddress() + "/stat";
  }
  fetchAllStat() {
    return this.config.getHttp().get(this.getStatAddress());
  }
};
__publicField(_WebSocketMessageService, "instance");
let WebSocketMessageService = _WebSocketMessageService;
const _ApiResources = class _ApiResources {
  constructor(config) {
    __publicField(this, "config", {});
    this.config = config;
  }
  static getInstance(config) {
    if (this.instance == null) {
      this.instance = new _ApiResources(config);
    }
    return this.instance;
  }
  getConfig() {
    return this.config;
  }
  open() {
    return OpenApiService.getInstance(this.config);
  }
  oauth2() {
    return OAuth2ApiService.getInstance(this.config);
  }
  oauth2Application() {
    return OAuth2ApplicationService.getInstance(this.config);
  }
  oauth2Scope() {
    return OAuth2ScopeService.getInstance(this.config);
  }
  oauth2Authorization() {
    return OAuth2AuthorizationService.getInstance(this.config);
  }
  oauth2Compliance() {
    return OAuth2ComplianceService.getInstance(this.config);
  }
  oauth2Device() {
    return OAuth2DeviceService.getInstance(this.config);
  }
  oauth2Product() {
    return OAuth2ProductService.getInstance(this.config);
  }
  assetServer() {
    return AssetServerService.getInstance(this.config);
  }
  assetApplication() {
    return AssetApplicationService.getInstance(this.config);
  }
  dbAccount() {
    return DatabaseAccountService.getInstance(this.config);
  }
  dbCatalog() {
    return DatabaseCatalogService.getInstance(this.config);
  }
  dbInstance() {
    return DatabaseInstanceService.getInstance(this.config);
  }
  uaaConstant() {
    return UaaConstantService.getInstance(this.config);
  }
  upmsConstant() {
    return UpmsConstantService.getInstance(this.config);
  }
  sysOrganization() {
    return SysOrganizationService.getInstance(this.config);
  }
  sysDepartment() {
    return SysDepartmentService.getInstance(this.config);
  }
  sysEmployee() {
    return SysEmployeeService.getInstance(this.config);
  }
  sysEmployeeAllocatable() {
    return SysEmployeeAllocatableService.getInstance(this.config);
  }
  sysTenantDataSource() {
    return SysTenantDataSourceService.getInstance(this.config);
  }
  sysPermission() {
    return SysPermissionService.getInstance(this.config);
  }
  sysRole() {
    return SysRoleService.getInstance(this.config);
  }
  sysUser() {
    return SysUserService.getInstance(this.config);
  }
  sysAttribute() {
    return SysAttributeService.getInstance(this.config);
  }
  sysDefaultRole() {
    return SysDefaultRoleService.getInstance(this.config);
  }
  sysElement() {
    return SysElementService.getInstance(this.config);
  }
  dialogueContact() {
    return DialogueContactService.getInstance(this.config);
  }
  dialogueDetail() {
    return DialogueDetailService.getInstance(this.config);
  }
  notification() {
    return NotificationService.getInstance(this.config);
  }
  webSocketMessage() {
    return WebSocketMessageService.getInstance(this.config);
  }
  task() {
    return ExtendedTaskService.getInstance(this.config);
  }
};
__publicField(_ApiResources, "instance");
let ApiResources = _ApiResources;
const createApi = (project, clientId, clientSecret, http, oidc) => {
  const config = new HttpConfig(project, clientId, clientSecret, http, oidc);
  return ApiResources.getInstance(config);
};
export {
  ApplicationEnum,
  AssetApplicationService,
  AssetServerService,
  AuthorityTypeEnum,
  Axios,
  Base642 as Base64,
  BaseService2 as BaseService,
  CaptchaCategoryEnum,
  ConstantEnum,
  ContentTypeEnum2 as ContentTypeEnum,
  DatabaseAccountService,
  DatabaseCatalogService,
  DatabaseInstanceService,
  ExtendedTaskService,
  GenderEnum,
  HttpConfig2 as HttpConfig,
  IdentityEnum,
  NotificationCategoryEnum,
  OAuth2ApiService,
  OAuth2ApplicationService,
  OAuth2AuthorizationService,
  OAuth2ComplianceService,
  OAuth2DeviceService,
  OAuth2ProductService,
  OAuth2ScopeService,
  OpenApiService,
  Service,
  SocialSourceEnum,
  StatusEnum,
  SupplierType,
  SysAttributeService,
  SysDefaultRoleService,
  SysDepartmentService,
  SysElementService,
  SysEmployeeAllocatableService,
  SysEmployeeService,
  SysOrganizationService,
  SysPermissionService,
  SysRoleService,
  SysTenantDataSourceService,
  SysUserService,
  TechnologyEnum,
  UaaConstantService,
  UpmsConstantService,
  createApi,
  lodash,
  moment
};
