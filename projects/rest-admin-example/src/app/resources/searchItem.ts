import { RestResource, REST_FIELD_TYPES, TYPE_GROUP, TYPE_METHOD_REQUEST } from "rest-admin";
import { user } from "./user";

export const searchItem = new RestResource(
  {
    name: "searchItem",
    api: "search_items",
    icon: "search",
  },
  [
    {
      name: "id",
      type: REST_FIELD_TYPES.NUMBER,
      inForm: false,
    },
    {
      name: "name",
    },
    {
      name: "details",
      type: REST_FIELD_TYPES.JSON,
      // i18n: true,
      metaData: {
        addConfig: {
          jsonConfig: {
            jsonFields: ["description", "quantity", "color"],
            // isOpen: true,
          },
        },
      },
    },
    {
      name: "url",
      type: REST_FIELD_TYPES.LINK,
    },
    {
      name: "price",
      type: REST_FIELD_TYPES.NUMBER,
    },
    {
      name: "currency_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        belongToSecondFieldLabel: 'symbol',
        addConfig: {
          belongToOptions: {
            resourceName: "currency",
            filterKeys: ["symbol"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
      },
    },
    {
      name: "currency",
      type: REST_FIELD_TYPES.HAS_ONE,
      metaData: {
        listConfig: {
          restHasOneResources: {
            name: "symbol",
          },
        },
      },
      inForm: false,
    },
    {
      name: "user_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        belongToSecondFieldLabel: 'full_name',
        addConfig: {
          belongToOptions: {
            resourceName: "user",
            filterKeys: ["full_name", "email"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
        listConfig: {
          restHasOneResources: {
            name: "user.full_name",
          },
        },
      },
    },
    {
      name: "user",
      type: REST_FIELD_TYPES.HAS_ONE,
      metaData: {
        listConfig: {
          restHasOneResources: {
            name: "full_name",
          },
        },
      },
      inForm: false,
    },
    {
      name: "picture",
      type: REST_FIELD_TYPES.IMAGE,
      metaData: {
        listConfig: {
          style:
            "max-width: 100px;border-radius: 5px;box-shadow: 5px 3px gray;",
        },
      },
    },
    {
      name: "created_at",
      type: REST_FIELD_TYPES.DATE,
      inForm: false,
    },
    {
      name: "updated_at",
      type: REST_FIELD_TYPES.DATE,
      inForm: false,
    },
  ],
  {
    columns: [
      "id",
      "name",
      "url",
      "details",
      "price",
      "user",
      "picture",
      "currency_id",
      "created_at",
    ],
    group: {
      name: "STORE",
      type: TYPE_GROUP.MENU,
    },
    queryParams: {
      _includes: "user,currency",
      _sortDir: 'desc',
      _sort: 'updated_at',
    },
    searchFilter: {
      filterBy: [{name: "name", value: "name"},{
        name: "user",
        value: 'id',
        resourceFieldName: 'full_name',
        resource: user,
        ressourceFilterName: 'user_id',
        type: REST_FIELD_TYPES.BELONG_TO_MANY
      }],
    },
  },
  {},
  {
    method: TYPE_METHOD_REQUEST.POST,
    body: {
      _method: TYPE_METHOD_REQUEST.PUT,
    },
  },
  {
    queryParams: {
      _includes: "user,currency",
    },
  }
);
