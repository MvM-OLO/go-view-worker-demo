import { cloneDeep } from "lodash-es";

// UUID Generator
export function getUUID() {
  if (typeof crypto === "object" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Enums from go-view-worker (simplified if necessary)
export enum BaseEvent {
  ON_CLICK = "click",
  ON_DBL_CLICK = "dblclick",
  ON_MOUSE_ENTER = "mouseenter",
  ON_MOUSE_LEAVE = "mouseleave",
}

export enum EventLife {
  VNODE_MOUNTED = "vnodeMounted",
  VNODE_BEFORE_MOUNT = "vnodeBeforeMount",
}

export enum RequestDataTypeEnum {
  STATIC = 0,
  AJAX = 1,
  POND = 2,
}

export enum RequestHttpEnum {
  GET = "get",
  POST = "post",
  PATCH = "patch",
  PUT = "put",
  DELETE = "delete",
}

export enum RequestContentTypeEnum {
  DEFAULT = 0,
  SQL = 1,
}

export enum RequestBodyEnum {
  NONE = "none",
  FORM_DATA = "form-data",
  X_WWW_FORM_URLENCODED = "x-www-form-urlencoded",
  JSON = "json",
  XML = "xml",
}

export enum RequestHttpIntervalEnum {
  SECOND = "second",
  MINUTE = "minute",
  HOUR = "hour",
  DAY = "day",
}

// Chart Init Config
export const chartInitConfig = {
  x: 50,
  y: 50,
  w: 500,
  h: 300,
  offsetX: 0,
  offsetY: 0,
};

// Request Config
export const requestConfig = {
  requestDataType: RequestDataTypeEnum.STATIC,
  requestHttpType: RequestHttpEnum.GET,
  requestUrl: "",
  requestInterval: undefined,
  requestIntervalUnit: RequestHttpIntervalEnum.SECOND,
  requestContentType: RequestContentTypeEnum.DEFAULT,
  requestParamsBodyType: RequestBodyEnum.NONE,
  requestSQLContent: {
    sql: "select * from  where",
  },
  requestParams: {
    Body: {
      "form-data": {},
      "x-www-form-urlencoded": {},
      json: "",
      xml: "",
    },
    Header: {},
    Params: {},
  },
};

// Public Config Class
export class PublicConfigClass {
  public id = getUUID();
  public isGroup = false;
  // 基本信息
  public attr = { ...chartInitConfig, zIndex: -1 };
  // 基本样式
  public styles = {
    filterShow: false,
    hueRotate: 0,
    saturate: 1,
    contrast: 1,
    brightness: 1,
    opacity: 1,
    rotateZ: 0,
    rotateX: 0,
    rotateY: 0,
    skewX: 0,
    skewY: 0,
    blendMode: "normal",
    animations: [],
  };
  // 预览
  public preview = {
    overFlowHidden: false,
  };
  // 状态
  public status = {
    lock: false,
    hide: false,
  };
  // 请求
  public request = cloneDeep(requestConfig);
  // 数据过滤
  public filter = undefined;
  // 事件
  public events = {
    baseEvent: {
      [BaseEvent.ON_CLICK]: undefined,
      [BaseEvent.ON_DBL_CLICK]: undefined,
      [BaseEvent.ON_MOUSE_ENTER]: undefined,
      [BaseEvent.ON_MOUSE_LEAVE]: undefined,
    },
    advancedEvents: {
      [EventLife.VNODE_MOUNTED]: undefined,
      [EventLife.VNODE_BEFORE_MOUNT]: undefined,
    },
    interactEvents: [],
  };
}
