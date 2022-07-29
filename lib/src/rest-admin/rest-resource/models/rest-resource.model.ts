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
}

export interface MainConfig {
  name: string;
  icon?: string | CustomIcon;
  api?: string;
  description?: string;
  authRequired?: boolean; // Savoir si on a besoin d'etre authentifier pour consulter la ressource
  showInMenu?: boolean;
}
export interface CustomIcon {
  icon?: string;
  pack?: string;
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
  group?: {
    name: string;
    priority?: number;
  };
}

export interface AddConfig extends ResourceConfig {
  inList?: boolean;
}

export interface EditConfig extends ResourceConfig {
  inList?: boolean;
}

export interface DetailConfig extends ResourceConfig {}

export interface REST_FIELD_METADATA {
  format?: string;
  listConfig?: {
    class?: string;
    style?: string;
    restManyResources?: RestField;
    restBelongToManyResources?: RestField;
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
  };
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
}

export interface REST_CONFIG {
  name: string;
  resources: RestResource[];
  baseUrl: string;
}

interface StandartField extends Field {
  type: string;
  required: boolean;
}

export interface REST_AUTH {
  fields: StandartField[];
  formTitle: string;
}
