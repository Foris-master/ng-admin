import { RestResource, REST_FIELD_TYPES, TYPE_GROUP } from 'rest-admin';

export const address = new RestResource(
  {
    name: 'address',
    api: 'addresses',
    icon: {
      icon: 'at',
      pack: 'fas',
    },
  },
  [
    {
      name: 'id',
      type: REST_FIELD_TYPES.NUMBER,
      inForm: false,
    },
    {
      name: 'name',
      type: REST_FIELD_TYPES.COLOR,
      // metaData: {
      //   attributes: {
      //     style: 'color: red; font-weight: bold;',
      //     type: 'password',
      //   },
      // },
    },
    {
      name: 'zip_code',
      type: REST_FIELD_TYPES.STRING,
    },
    {
      name: 'user_id',
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        // belongToSecondFieldLabel: 'full_name',
        addConfig: {
          belongToOptions: {
            // secondField: true,
            resourceName: 'user',
            filterKeys: ['full_name', 'email'],
            value: 'id',
            queryParams: {
              should_paginate: false,
            },
          },
        },
        listConfig: {
          restHasOneResources: {
            name: 'user.full_name',
          },
        },
      },
    },
    {
      name: 'user',
      type: REST_FIELD_TYPES.HAS_ONE,
      metaData: {
        listConfig: {
          restHasOneResources: {
            name: 'full_name',
          },
        },
      },
      inForm: false,
    },
    {
      name: 'town_id',
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        belongToSecondFieldLabel: 'name',
        addConfig: {
          belongToOptions: {
            resourceName: 'town',
            filterKeys: ['name'],
            value: 'id',
            queryParams: {
              should_paginate: false,
            },
          },
        },
        listConfig: {
          restHasOneResources: {
            name: 'town.name',
          },
        },
      },
    },
    {
      name: 'town',
      type: REST_FIELD_TYPES.HAS_ONE,
      metaData: {
        listConfig: {
          restHasOneResources: {
            name: 'name',
          },
        },
      },
      inForm: false,
    },
    {
      name: 'created_at',
      type: REST_FIELD_TYPES.DATE,
      inForm: false,
    },
    {
      name: 'updated_at',
      type: REST_FIELD_TYPES.DATE,
      inForm: false,
    },
  ],
  {
    columns: ['id', 'name', 'zip_code', 'user', 'town', 'created_at'],
    group: {
      name: 'CLIENT',
      type: TYPE_GROUP.SEPARATOR, // Regroupe les ressources dans un menu deroulant
      priority: 8, // La priorité du group, plus elle est haute plus le group sera en haut du menu
    },
    queryParams: {
      _includes: 'user,town',
    },
    searchFilter: {
      filterBy: ['name', 'zip_code'],
    },
  },
  {},
  {},
  {
    tabsConfig: [
      {
        name: 'Address',
        datas: ['id', 'name', 'zip_code', 'user_id', 'town_id', 'created_at'],
      },
      {
        name: 'User',
        datas: ['user'],
      },
      {
        name: 'Town',
        datas: [],
      },
    ],
    // queryParams: {
    //   _includes: 'user,town',
    // },
  }
);
