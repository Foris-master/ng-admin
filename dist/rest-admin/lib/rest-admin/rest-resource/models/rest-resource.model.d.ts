import { Type } from '@angular/core';
import { RestResource } from './rest-resource';
export interface ResourceConfig {
    title?: string;
    api?: any;
    orderDirection?: DIRECTION;
    queryParams?: any;
    preparedStatementQuery?: PreparedStatementQuery;
}
export interface Field {
    label?: string;
    name: string;
    template?: string;
    note?: string;
}
export declare enum QUERY_PARAMS_TYPE {
}
export interface RestField extends Field {
    metaData?: REST_FIELD_METADATA;
    type?: REST_FIELD_TYPES;
    template?: string;
    inForm?: boolean;
    i18n?: boolean;
}
export interface MainConfig {
    name: string;
    icon?: string | CustomIcon;
    api?: string;
    description?: string;
    authRequired?: boolean;
    showInMenu?: boolean;
    permissions?: PermissionConfig[];
}
export interface CustomIcon {
    icon?: string;
    pack?: string;
}
export interface GroupConfig {
    name: string;
    icon?: string | CustomIcon;
    description?: string;
    type: TYPE_GROUP;
    priority?: number;
}
export declare enum TYPE_GROUP {
    SEPARATOR = "separator",
    MENU = "menu",
    DEFAULT = "default"
}
export declare enum TYPE_METHOD_REQUEST {
    POST = "POST",
    PUT = "PUT",
    GET = "GET",
    DELETE = "DELETE",
    PATCH = "PATCH"
}
export interface ListConfig extends ResourceConfig {
    columns?: string[];
    perPage?: number;
    orderBy?: string;
    detailsUrl?: any;
    foreignConfig?: any;
    addManyConfig?: any;
    manyToManyConfig?: any;
    belongToConfig?: any;
    description?: string;
    searchFilter?: {
        filterBy?: filterSearchConfig[];
    };
    hideAddSubHeader?: boolean;
    group?: GroupConfig;
}
export interface filterSearchConfig {
    name: string;
    value: string;
    type?: REST_FIELD_TYPES;
    resourceFieldName?: string;
    ressourceFilterName?: string;
    resource?: RestResource;
}
export interface AddConfig extends ResourceConfig {
    inList?: boolean;
    method?: TYPE_METHOD_REQUEST;
    body?: any;
    header?: any;
}
export interface EditConfig extends ResourceConfig {
    isLaravel?: boolean;
    method?: TYPE_METHOD_REQUEST;
    body?: any;
    header?: any;
}
export interface DetailConfig extends ResourceConfig {
    tabsConfig?: TabsOptions[];
}
export interface TabsOptions {
    name: string;
    datas: string[];
}
export interface REST_FIELD_METADATA {
    format?: string;
    number?: Boolean;
    attributes?: any;
    belongToSecondFieldLabel?: string;
    listConfig?: {
        class?: string;
        style?: string;
        restManyResources?: RestField;
        restBelongToManyResources?: RestField;
        restHasOneResources?: RestField;
    };
    addConfig?: {
        enumOptions?: {
            value: string;
            label: string;
        }[];
        belongToOptions?: {
            secondField?: Boolean;
            resourceName: string;
            filterKeys?: string[];
            value?: string;
            template?: string;
            queryParams?: any;
        };
        passwordOptions?: {
            isNeedConfirm?: boolean;
            confirmLabel?: string;
            confirmField?: string;
        };
        belongToManyOptions?: {
            relatedName: string;
            filterKeys?: string[];
            pivotName?: string;
            relatedIdName?: string;
            resourceIdName?: string;
            value?: string;
            template?: string;
            queryParams?: any;
        };
        /**
         * add pivotName(enterprise_users){
         * relatedIdName:string
         * resourceIdName:string
         * }
         * e.g relatedName(user), pivotName(enterprise_user),
         * relatedIdName(user_id),resourceIdName(enterprise_id)
         */
        uploadOptions?: {
            multipleFiles?: boolean;
        };
        jsonConfig?: {
            jsonFields?: string[];
            isOpen?: boolean;
        };
        morphConfig?: {
            related?: {
                label: string;
                value: string;
            }[];
            filterKeys?: string[];
            value?: string;
            template?: string;
            queryParams?: any | PreparedStatementQuery;
        };
        mapConfig?: {
            lattiudeKeyField: string;
            longitudeKeyField: string;
        };
    };
    detailConfig?: {
        restManyResources?: RestField | RestManyOptionsCustom;
        linkConfig?: {
            disabledIframePreview?: boolean;
        };
    };
}
export interface PreparedStatementQuery {
    api: string;
    fieldForNextQuery: string[];
    queryParams?: any;
    queryParamsComplete?: QueryParamsPreparedStatement[];
}
export interface QueryParamsPreparedStatement {
    label: string;
    value: string;
    isPreparedStatement?: boolean;
}
export interface RestManyOptionsCustom {
    resourceName: string;
    resource: RestResource;
    style?: string;
}
export declare enum DIRECTION {
    ASC = "ASCENDING",
    DESC = "DESCENDING"
}
export declare enum REST_FIELD_TYPES {
    STRING = 0,
    TEXT = 1,
    NUMBER = 2,
    COLOR = 3,
    BOOLEAN = 4,
    DATE = 5,
    DATETIME = 6,
    TIME = 7,
    IMAGE = 8,
    PDF = 9,
    FILE = 10,
    BELONG_TO = 11,
    HAS_ONE = 12,
    HAS_MANY = 13,
    BELONG_TO_MANY = 14,
    MORPH_MANY = 15,
    MORPH_ONE = 16,
    MORPH = 17,
    JSON = 18,
    MAP = 19,
    ENUM = 20,
    LINK = 21,
    PASSWORD = 22
}
export interface REST_CONFIG {
    name: string;
    resources: RestResource[];
    baseUrl: string;
    translate?: {
        filePath?: string;
        languages?: {
            value: string;
            text: string;
        }[];
    };
    authConfig?: REST_AUTH;
    googleMapApiKey?: string;
    permissions?: PermissionConfig[];
    externPages?: EXTERN_PAGES[];
}
export interface REST_AUTH {
    strategy?: STRATEGY_AUTH;
    baseEndpoint?: string;
    loginEndPoint?: string;
    logoutEndPoint?: string;
    userInfoEndPoint?: string;
    profileNameEndPoint?: string;
    profilePictureEndPoint?: string;
    redirectRouteAfterLogin?: string;
    tokenLocationInResponse?: string;
}
export declare enum STRATEGY_AUTH {
    EMAIL = "email"
}
export declare enum PERMISSION {
    CREATE = "create",
    READ = "read",
    UPDATE = "update",
    DELETE = "delete",
    CANLOGIN = "CANLOGIN"
}
export interface PermissionConfig {
    type: PERMISSION;
    fieldKey: PreparedStatementQuery;
    name?: string;
}
export interface EXTERN_PAGES {
    api?: any;
    path: string;
    icon?: string;
    name: string;
    showInMenu?: boolean;
    renderComponent: Type<any>;
    group?: GroupConfig;
    authRequired?: boolean;
}
