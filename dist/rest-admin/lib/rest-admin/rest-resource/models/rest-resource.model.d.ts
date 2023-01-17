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
        filterBy?: string[];
    };
    hideAddSubHeader?: boolean;
    group?: GroupConfig;
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
            resourceName: string;
            filterKeys?: string[];
            value?: string;
            template?: string;
            queryParams?: any;
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
    };
    detailConfig?: {
        restManyResources?: RestField | RestManyOptionsCustom;
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
    PASSWORD = 3,
    COLOR = 4,
    BOOLEAN = 5,
    DATE = 6,
    DATETIME = 7,
    TIME = 8,
    IMAGE = 9,
    PDF = 10,
    FILE = 11,
    BELONG_TO = 12,
    HAS_ONE = 13,
    HAS_MANY = 14,
    BELONG_TO_MANY = 15,
    MORPH_MANY = 16,
    MORPH_ONE = 17,
    MORPH = 18,
    JSON = 19,
    MAP = 20,
    ENUM = 21,
    LINK = 22
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
    C = "create",
    R = "read",
    U = "update",
    D = "delete",
    A = "all"
}
