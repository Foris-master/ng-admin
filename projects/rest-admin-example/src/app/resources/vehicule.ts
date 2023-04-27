import { RestResource, REST_FIELD_TYPES, TYPE_GROUP, TYPE_METHOD_REQUEST } from 'rest-admin';

const user = new RestResource(
  {
    name: "user",
    api: "users",
  },
  [],
  {},
  {
    api: "users",
  },
  {},
  {}
);
export const vehicule = new RestResource(
  {
    name: "vehicule",
  },
  [
    {
      name: "id",
      type: REST_FIELD_TYPES.NUMBER,
    },
    {
      name: "registration",
    },
    {
      name: "description",
    },
    {
      name: "picture",
      type: REST_FIELD_TYPES.IMAGE,
    },
    {
      name: "year",
      type: REST_FIELD_TYPES.DATE,
    },
    {
      name: "country_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        belongToSecondFieldLabel: 'name',
        addConfig: {
          belongToOptions: {
            resourceName: "country",
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
      name: "vehicule_model_id",
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        belongToSecondFieldLabel: 'name',
        addConfig: {
          belongToOptions: {
            resourceName: "vehiculeModel",
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
      name: "vehicule_model",
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
  ],
  {
    columns: [
      "id",
      "registration",
      "description",
      "picture",
      "year",
      "country",
      "vehicule_model",
    ],
    group: {
      name: "CAR_PART",
      type: TYPE_GROUP.MENU,
    },
    queryParams: {
      _includes: "vehicule_model,user,country",
    },
    searchFilter: {
      filterBy: [{name: "registration", value: "registration"}, {name: "description", value: "description"},
      {
        name: "user",
        value: 'id',
        resourceFieldName: 'full_name',
        resource: user,
        ressourceFilterName: 'user_id',
        type: REST_FIELD_TYPES.BELONG_TO_MANY
      }
    ],
    },
  },
  {
    api: "vehicules",
    title: "Add vehicule",
    inList: true,
  },
  {
    method: TYPE_METHOD_REQUEST.POST,
    body: {
      "_method": TYPE_METHOD_REQUEST.PUT,
    },
  },
  {
    queryParams: {
      _includes: "vehicule_model,user,country",
    },
  }
);
