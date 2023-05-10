import { RestResource, REST_FIELD_TYPES, TYPE_GROUP } from 'rest-admin';

export const vehiculeModel = new RestResource(
  {
    name: "vehiculeModel",
    api: "vehicule_models",
  },
  [
    {
      name: "name",
    },
    {
      name: "year",
    },
    {
      name: "brand_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        belongToSecondFieldLabel: 'name',
        addConfig: {
          belongToOptions: {
            resourceName: "brand",
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
      name: "brand",
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
  ],
  {
    columns: [
      "name",
      "year",
      "brand",
    ],
    group: {
      name: "CAR_PART",
      type: TYPE_GROUP.MENU,
    },
    queryParams: {
      _includes: "brand",
    },
    searchFilter: {
      filterBy: [{name: "name", value: "name"}],
    },
  },
  {
    api: "vehicule_models",
    title: "Add Vehicule Models",
    inList: true,
  },
  {},
  {
    queryParams: {
      _includes: "brand",
    },
  }
);
