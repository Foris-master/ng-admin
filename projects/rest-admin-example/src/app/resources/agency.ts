import { RestResource, REST_FIELD_TYPES, TYPE_GROUP } from 'rest-admin';

export const agency = new RestResource(
  {
    name: 'agency',
    api: 'agencies',
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
      // metaData: {
      //   attributes: {
      //     style: 'color: red; font-weight: bold;',
      //     type: 'password',
      //   },
      // },
    },
    {
      name: 'email',
    },
    {
      name: 'address',
    },
    {
      name: 'position',
      type: REST_FIELD_TYPES.MAP,
      metaData: {
        addConfig: {
          mapConfig: {
            lattiudeKeyField: 'latitude',
            longitudeKeyField: 'longitude',
          },
        },
      },
    },
  ],
  {
    columns: ['id', 'name', 'address'],
    group: {
      name: 'CLIENT',
      type: TYPE_GROUP.SEPARATOR, // Regroupe les ressources dans un menu deroulant
    },
    // queryParams: {
    //   _includes: 'user,town',
    // },
    searchFilter: {
      filterBy: ['name', 'address'],
    },
  },
  {},
  {},
  {
    tabsConfig: [
      {
        name: 'Basic',
        datas: ['id', 'name'],
      },
      {
        name: 'Position',
        datas: ['address', 'latitude', 'longitude'],
      },
    ],
    // queryParams: {
    //   _includes: 'user,town',
    // },
  }
);
