import { RestResource, REST_FIELD_TYPES, TYPE_GROUP } from 'rest-admin';

export const enterprise = new RestResource(
  {
    name: 'enterprise',
    api: 'enterprises',
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
    },
    {
      name: 'address',
    },
    {
      name: 'phone_number',
      type: REST_FIELD_TYPES.NUMBER,
    },

    {
      name: 'user',
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
      name: 'user_id',
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        belongToSecondFieldLabel: 'name',
        addConfig: {
          belongToOptions: {
            resourceName: 'user',
            filterKeys: ['name'],
            value: 'id',
            queryParams: {
              should_paginate: false,
            },
          },
        },
        listConfig: {
          restHasOneResources: {
            name: 'user.name',
          },
        },
      },
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
      name: 'description',
      type: REST_FIELD_TYPES.TEXT,
    },
    {
      name: 'web_site',
      type: REST_FIELD_TYPES.LINK,
      metaData: {
        detailConfig: {
          linkConfig: {
            disabledIframePreview: false,
          },
        },
      },
    },
  ],
  {
    columns: ['id', 'name', 'address', 'web_site'],
    group: {
      name: 'CLIENT',
      type: TYPE_GROUP.SEPARATOR, // Regroupe les ressources dans un menu deroulant
      priority: 8, // La priorité du group, plus elle est haute plus le group sera en haut du menu
    },
    queryParams: {
      _includes: 'user,town',
    },
    // searchFilter: {
    //   filterBy: ['name'],
    // },
  },
  {},
  {},
  {
    // tabsConfig: [
    //   {
    //     name: 'Address',
    //     datas: ['id', 'name', 'address', 'user_id', 'town_id', 'created_at'],
    //   },
    //   {
    //     name: 'User',
    //     datas: ['user', 'web_site'],
    //   },
    //   {
    //     name: 'Town',
    //     datas: [],
    //   },
    // ],
    queryParams: {
      _includes: 'user,town',
    },
  }
);
