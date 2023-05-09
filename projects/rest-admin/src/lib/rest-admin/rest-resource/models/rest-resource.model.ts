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

// export interface QUERY_PARAMS {
//   type:
//   params:
// }

export enum QUERY_PARAMS_TYPE {}

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
  authRequired?: boolean; // Savoir si on a besoin d'etre authentifier pour consulter la ressource
  showInMenu?: boolean; //Afficher dans le menu
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

export enum TYPE_GROUP {
  SEPARATOR = 'separator',
  MENU = 'menu',
  DEFAULT = 'default',
}

export enum TYPE_METHOD_REQUEST {
  POST = 'POST',
  PUT = 'PUT',
  GET = 'GET',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
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
      resourceName: string; // Le nom de la ressource a referencer
      filterKeys?: string[]; // Le nom du champs par lequel on va filtrer
      value?: string; // Le nom du champs de la valeur a retenir
      template?: string; // Le template a affciher
      queryParams?: any;
    };
    passwordOptions?: {
      isNeedConfirm?: boolean;
      confirmLabel?: string;
      confirmField?: string;
    };
    belongToManyOptions?: {
      relatedName: string; // Le nom des  ressources a referencer
      filterKeys?: string[];
      pivotName?: string;
      relatedIdName?: string;
      resourceIdName?: string;
      value?: string; // Le nom du champs de la valeur a retenir
      template?: string; // Le template a affciher
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
      filterKeys?: string[]; // Le nom du champs par lequel on va filtrer
      value?: string; // Le nom du champs de la valeur a retenir
      template?: string; // Le template a affciher
      queryParams?: any | PreparedStatementQuery;
    };
    mapConfig?: {
      lattiudeKeyField: string;
      longitudeKeyField: string;
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

export enum DIRECTION {
  ASC = 'ASCENDING',
  DESC = 'DESCENDING',
}

export enum REST_FIELD_TYPES {
  STRING,
  TEXT,
  NUMBER,
  COLOR,
  BOOLEAN,
  DATE,
  DATETIME,
  TIME,
  IMAGE,
  PDF,
  FILE,
  BELONG_TO,
  HAS_ONE,
  HAS_MANY,
  BELONG_TO_MANY,
  MORPH_MANY,
  MORPH_ONE,
  MORPH,
  JSON,
  MAP,
  ENUM,
  LINK,
  PASSWORD,
}

interface LINK {
  // DEFAULT;
  // LINK_PREVIEW;
  // LINK_VIEW;
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
  googleMapApiKey?: string; // Clef google map
}

interface StandartField extends Field {
  type: string;
  required: boolean;
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

export enum STRATEGY_AUTH {
  EMAIL = 'email',
}

export enum PERMISSION {
  C = 'create',
  R = 'read',
  U = 'update',
  D = 'delete',
  A = 'all',
}
