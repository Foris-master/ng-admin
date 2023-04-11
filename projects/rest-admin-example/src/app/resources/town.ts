import { RestResource, REST_FIELD_TYPES, TYPE_GROUP } from "rest-admin";

export const town = new RestResource(
  {
    name: "town",
    icon: {
      icon: "city",
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
    },
    {
      name: "district",
    },
    {
      name: "code",
    },
    {
      name: "country_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "country",
            filterKeys: ["name", "country_code", "capital", "calling_code"],
            value: "id",
            queryParams: {
              should_paginate: false,
            },
          },
        },
      },
    },
    {
      name: "country",
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
      "district",
      "code",
      "country",
      "created_at",
      "user",
    ],
    group: {
      name: "OTHERS",
      type: TYPE_GROUP.SEPARATOR,
    },
    queryParams: {
      _includes: "country",
    },
    // searchFilter: {
    //   filterBy: ["name", "district", "code"],
    // },
  },
  {},
  {},
  {}
);
