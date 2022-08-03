import { REST_FIELD_TYPES } from "../../../../../lib/src/rest-admin/rest-resource/models/rest-resource.model";
import { RestResource } from "./../rest-admin/rest-resource/models/rest-resource";

export const adresses = new RestResource(
  {
    name: "addresse",
    api: "addresses",
    icon: {
      icon: "address-book",
      pack: "fas",
    },
  },
  [
    {
      name: "name",
    },

    {
      name: "zip_code",
    },
    {
      name: "town_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
            resourceName: "town",
            filterKeys: ["district"],
            value: "id",
            // template: "name",
            queryParams: {
              should_paginate: false,
            },
          },
        },
      },
    },
  ],
  {},
  {},
  {},
  {}
);
