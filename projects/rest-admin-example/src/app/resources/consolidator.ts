import { RestResource, REST_FIELD_TYPES, TYPE_GROUP } from 'rest-admin';
import { user } from './user';

export const consolidator = new RestResource(
  {
    name: 'consolidator',
    icon: {
      icon: 'cubes',
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
      name: 'label',
    },
    {
      name: 'is_recommended',
      type: REST_FIELD_TYPES.BOOLEAN,
    },
    {
      name: 'has_accept_disclaimer',
      type: REST_FIELD_TYPES.BOOLEAN,
    },
    {
      name: 'user_id',
      type: REST_FIELD_TYPES.BELONG_TO,
      metaData: {
        addConfig: {
          belongToOptions: {
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
      name: 'status',
      type: REST_FIELD_TYPES.ENUM,
      metaData: {
        addConfig: {
          enumOptions: [
            {
              label: 'new',
              value: 'new',
            },
            {
              label: 'enabled',
              value: 'enabled',
            },
            {
              label: 'disabled',
              value: 'disabled',
            },
          ],
        },
      },
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
    columns: ['id', 'label', 'user', 'status', 'created_at'],
    group: {
      name: 'CONSOLIDATOR',
      type: TYPE_GROUP.SEPARATOR, // Regroupe les ressources dans un menu deroulant
      priority: 7, // La priorité du group, plus elle est haute plus le group sera en haut du menu
    },
    queryParams: {
      _includes: 'user',
    },
    searchFilter: {
      filterBy: [{
        name: "status",
        value: 'status',
      },{
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
  {},
  {
    tabsConfig: [
      {
        name: 'Informations',
        datas: [
          'id',
          'label',
          'is_recommended',
          'has_accept_disclaimer',
          'user_id',
          'status',
          'updated_at',
          'created_at',
        ],
      },
      {
        name: 'Consolidator Users',
        datas: [],
      },
    ],
    preparedStatementQuery: {
      api: '/users/me',
      fieldForNextQuery: ['original.id'],
      queryParamsComplete: [
        {
          label: 'id',
          value: '',
          isPreparedStatement: true,
        },
      ],
    },
  }
);
