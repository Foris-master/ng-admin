import { RestResource } from "../rest-admin/rest-resource/models/rest-resource";
import { REST_FIELD_TYPES } from "../rest-admin/rest-resource/models/rest-resource.model";

export const enterprise = new RestResource(
  {
    name: "enterprise",
    icon: {
      icon: "building",
      pack: "fas",
    },
  },
  [
    {
      name: "address",
    },
    {
      name: "type",
    },
    {
      name: "employees",
      type: REST_FIELD_TYPES.BELONG_TO_MANY,

      metaData: {
        listConfig: {
          restBelongToManyResources: {
            label: "name",
            template: "<span> {{name}} </span>",
            name: "name",
          },
        },
        addConfig: {
          belongToManyOptions: {
            relatedName: "user", //relatedName,
            pivotName: "enterprise_user",
            relatedIdName: "user_id",
            resourceIdName: "enterprise_id",
            value: "id",
            filterKeys: ["name"],
            queryParams: {
              should_paginate: false,
            },
          },
        },
      },
    },
    // {
    //   name: "client_accounts",
    //   type: REST_FIELD_TYPES.BELONG_TO_MANY,

    //   metaData: {
    //     listConfig: {
    //       restBelongToManyResources: {
    //         label: "name",
    //         template: "<span> {{name}} </span>",
    //         name: "name",
    //       },
    //     },
    //     addConfig: {
    //       belongToManyOptions: {
    //         relatedName: "user", //relatedName,
    //         pivotName: "client",
    //         relatedIdName: "user_id",
    //         resourceIdName: "enterprise_id",
    //         value: "id",
    //         filterKeys: ["name"],
    //         queryParams: {
    //           should_paginate: false,
    //         },
    //       },
    //     },
    //   },
    // },
    // {
    //   name: "logo",
    //   metaData: {
    //     listConfig: {
    //       class: "rest-list-img",
    //       style:
    //         "max-width: 100px;border-radius: 5px;box-shadow: 5px 3px gray;",
    //     },
    //   },
    //   type: REST_FIELD_TYPES.IMAGE,
    // },
    {
      name: "town_id",
      label: "town.name",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "town",
            filterKeys: ["name"],
            value: "id",
            queryParams: {
              should_paginate: false,
              "country-fk": "name=cameroon",
            },
          },
        },
      },
    },
    {
      name: "name",
    },

    {
      name: "phone_number",
      type: REST_FIELD_TYPES.NUMBER,
    },
    {
      name: "description",
      type: REST_FIELD_TYPES.TEXT,
    },
  ],
  {
    columns: [
      "employees",
      "name",
      "phone_number",
      "description",
      "type",
      "address",
      "town_id",
    ],
    perPage: 10,
    queryParams: {
      _includes: "employees,client_accounts",
    },
    title: "Enterprise",
  },
  {
    api: "enterprises",
    title: "Add Enterprises",
    inList: true,
  },
  {
    title: "edit enterprise",
    queryParams: {
      _includes: "employees,client_accounts",
    },
  },
  {
    title: "enterprise detail",
    queryParams: {
      _includes: "employees,client_accounts",
    },
  }
);
