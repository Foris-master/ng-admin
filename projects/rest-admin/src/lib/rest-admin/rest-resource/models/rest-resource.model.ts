import { filter } from "rxjs/operators";
import { RestResource } from "./rest-resource";
export interface ResourceConfig {
  title?: string;
  api?: any;
  orderDirection?: DIRECTION;
  queryParams?: any;
}
export interface Field {
  label?: string;
  name: string;
  template?: string;
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
  SEPARATOR = "separator",
  MENU = "menu",
  DEFAULT = "default",
}

export enum TYPE_METHOD_REQUEST {
  POST = "POST",
  PUT = "PUT",
  GET = "GET",
  DELETE = "DELETE",
  PATCH = "PATCH",
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
  number?: Boolean,
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
      resourceName: string; // Le nom de la ressource a referencer
      filterKeys?: string[]; // Le nom du champs par lequel on va filtrer
      value?: string; // Le nom du champs de la valeur a retenir
      template?: string; // Le template a affciher
      queryParams?: any;
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
      queryParams?: any;
    };
  };
  detailConfig?: {
    restManyResources?: RestField | RestManyOptionsCustom;
  };
}

export interface RestManyOptionsCustom {
  resourceName: string;
  resource: RestResource;
  style?: string;
}

export enum DIRECTION {
  ASC = "ASCENDING",
  DESC = "DESCENDING",
}

export enum REST_FIELD_TYPES {
  STRING,
  TEXT,
  NUMBER,
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
}

interface StandartField extends Field {
  type: string;
  required: boolean;
}

export interface REST_AUTH {
  fields: StandartField[];
  formTitle: string;
}

export enum PERMISSION {
  C = "create",
  R = "read",
  U = "update",
  D = "delete",
  A = "all",
}
