import { RestResource, REST_FIELD_TYPES, TYPE_GROUP, TYPE_METHOD_REQUEST } from "rest-admin";
import { user } from "./user";

export const product = new RestResource(
  {
    name: "product",
    api: "products",
    icon: {
      icon: "boxes-stacked",
      pack: "fas",
    },
  },
  [
    {
      name: "id",
      type: REST_FIELD_TYPES.NUMBER,
      inForm: false,
    },
    {
      name: "name",
      type: REST_FIELD_TYPES.JSON,
      i18n: true,
      metaData: {
        addConfig: {
          jsonConfig: {
            jsonFields: ["fr", "en"],
            // isOpen: true,
          },
        },
      },
    },
    {
      name: "price",
      type: REST_FIELD_TYPES.NUMBER,
    },
    {
      name: "description",
      // type: REST_FIELD_TYPES.TEXT,
      type: REST_FIELD_TYPES.JSON,
      i18n: true,
      metaData: {
        addConfig: {
          jsonConfig: {
            jsonFields: ["fr", "en"],
            // isOpen: true,
          },
        },
      },
    },
    {
      name: "picture_1",
      type: REST_FIELD_TYPES.IMAGE,
      metaData: {
        listConfig: {
          style:
            "max-width: 100px;border-radius: 5px;box-shadow: 5px 3px gray;",
        },
      },
    },
    {
      name: "picture_2",
      type: REST_FIELD_TYPES.IMAGE,
      metaData: {
        listConfig: {
          style:
            "max-width: 100px;border-radius: 5px;box-shadow: 5px 3px gray;",
        },
      },
    },
    {
      name: "picture_3",
      type: REST_FIELD_TYPES.IMAGE,
      metaData: {
        listConfig: {
          style:
            "max-width: 100px;border-radius: 5px;box-shadow: 5px 3px gray;",
        },
      },
    },
    {
      name: "picture_4",
      type: REST_FIELD_TYPES.IMAGE,
      metaData: {
        listConfig: {
          style:
            "max-width: 100px;border-radius: 5px;box-shadow: 5px 3px gray;",
        },
      },
    },
    {
      name: "metadata",
      type: REST_FIELD_TYPES.JSON,
      inForm: false,
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
      name: "created_at",
      type: REST_FIELD_TYPES.DATE,
      inForm: false,
    },
    {
      name: "updated_at",
      type: REST_FIELD_TYPES.DATE,
      inForm: false,
    },
    // {
    //   name: "categories",
    //   type: REST_FIELD_TYPES.HAS_MANY,
    //   metaData: {
    //     listConfig: {
    //       restManyResources: {
    //         label: "name",
    //         template: "<span> {{name}} </span>",
    //         name: "name",
    //       },
    //     },
    //     detailConfig: {
    //       restManyResources: {
    //         resourceName: "category",
    //         resource: category,
    //       },
    //     },
    //   },
    //   inForm: false,
    // },
  ],
  {
    columns: [
      "id",
      "name",
      "price",
      "description",
      "picture_1",
      "picture_2",
      "picture_3",
      "picture_4",
      "currency",
      "created_at",
      "updated_at",
    ],
    group: {
      name: "STORE",
      type: TYPE_GROUP.MENU, // Regroupe les ressources dans un menu deroulant
    },
    queryParams: {
      _includes: "currency",
    },
    searchFilter: {
      filterBy: [{name: "name", value: "name"}, { name: "description", value: "description"}],
    },
  },
  {
    api: "products",
    title: "Add product",
    inList: true,
  },
  {
    method: TYPE_METHOD_REQUEST.POST,
    body: {
      "_method": TYPE_METHOD_REQUEST.PUT,
    },
    header: {
      "Content-Type": "multipart/form-data"
    }
  },
  {
    queryParams: {
      _includes: "currency,categories",
    },
    tabsConfig: [
      {
        name: "Product",
        datas: [
          "id",
          "name",
          "price",
          "description",
          "picture_1",
          "picture_2",
          "picture_3",
          "picture_4",
          "currency",
          "created_at",
          "updated_at",
        ],
      },
      {
        name: "Categories",
        datas: ["categories"],
      },
    ],
  }
);
