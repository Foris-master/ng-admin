import { RestResource, REST_FIELD_TYPES, TYPE_GROUP } from "rest-admin";
import { address } from "./address";

export const user = new RestResource(
  {
    name: "user",
    icon: "person",
  },
  [
    {
      name: "id",
      type: REST_FIELD_TYPES.NUMBER,
      inForm: false,
    },
    {
      name: "full_name",
    },
    {
      name: "email",
    },
    {
      name: "phone",
    },
    {
      name: "alternative_phone",
      inForm: false,
    },
    {
      name: "status",
      type: REST_FIELD_TYPES.ENUM,
      metaData: {
        addConfig: {
          enumOptions: [
            {
              label: "new",
              value: "new",
            },
            {
              label: "enabled",
              value: "enabled",
            },
            {
              label: "disabled",
              value: "disabled",
            },
          ],
        },
      },
    },
    {
      name: "addresses",
      type: REST_FIELD_TYPES.HAS_MANY,
      metaData: {
        listConfig: {
          restManyResources: {
            label: "name",
            template: "<span> {{name}} </span>",
            name: "name",
          },
        },
        detailConfig: {
          restManyResources: {
            resourceName: "address",
            resource: address,
          },
        },
        // addConfig: {
        //   belongToManyOptions: {
        //     relatedName: "user", //relatedName,
        //     pivotName: "address",
        //     relatedIdName: "user_id",
        //     resourceIdName: "address",
        //     value: "id",
        //     filterKeys: ["name"],
        //     queryParams: {
        //       should_paginate: false,
        //     },
        //   },
        // },
      },
      inForm: false,
    },
    {
      name: "google_oauth_id",
      inForm: false,
    },
    {
      name: "has_accept_disclaimer",
      type: REST_FIELD_TYPES.BOOLEAN,
      inForm: false,
    },
    {
      name: "email_activated",
      type: REST_FIELD_TYPES.BOOLEAN,
    },
    {
      name: "phone_activated",
      type: REST_FIELD_TYPES.BOOLEAN,
      inForm: false,
    },
    {
      name: "device_tokens",
      inForm: false,
    },
    {
      name: "settings",
      inForm: false,
    },
    {
      name: "address_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "address",
            filterKeys: ["name"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
      },
    },
    {
      name: "address",
      type: REST_FIELD_TYPES.HAS_ONE,
      metaData: {
        listConfig: {
          restHasOneResources: {
            name: "name",
          },
        },
      },
      inForm: false,
    },
    {
      name: "invite_by",
      inForm: false,
    },
    {
      name: "password",
    },
    {
      name: "is_consolidator",
      type: REST_FIELD_TYPES.BOOLEAN,
    },
    {
      name: "is_enterprise",
      type: REST_FIELD_TYPES.BOOLEAN,
    },
    {
      name: "is_service_provider",
      type: REST_FIELD_TYPES.BOOLEAN,
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
      "full_name",
      "email",
      "phone",
      "addresses",
      "address",
      "status",
      "is_consolidator",
      "is_enterprise",
      "is_service_provider",
      "created_at",
    ],
    group: {
      name: "ACL",
      type: TYPE_GROUP.MENU,
    },
    queryParams: {
      _includes: "address,addresses",
    },
    searchFilter: {
      filterBy: ["full_name", "email", "phone"],
    },
  },
  {
    api: "users",
    title: "Add user",
    inList: true,
  },
  {},
  {
    // tabsConfig: [
    //   {
    //     name: "Info",
    //     datas: [
    //       "id",
    //       "full_name",
    //       "email",
    //       "phone",
    //       "is_consolidator",
    //       "is_enterprise",
    //       "is_service_provider",
    //     ],
    //   },
    //   {
    //     name: "Addresses",
    //     datas: ["addresses"],
    //   },
    // ],
    // queryParams: {
    //   _includes: "address,addresses",
    // },
  }
);
