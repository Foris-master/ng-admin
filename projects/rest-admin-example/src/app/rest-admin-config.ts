import { PERMISSION, REST_CONFIG, STRATEGY_AUTH, TYPE_GROUP } from 'rest-admin';
import { resources } from './resources';
import { AdditionalComponent } from './additionalcomponent/additional.component';

export const RESOURCES_CONFIG: REST_CONFIG = {
  name: 'My admin!',
  baseUrl: 'https://api.marylis.com/api',
  resources: resources,
  authConfig: {
    strategy: STRATEGY_AUTH.EMAIL,
    loginEndPoint: '/auth/signin',
    logoutEndPoint: '/auth/logout',
    // userInfoEndPoint: '/users/me',
    // profileNameEndPoint: 'name',
    // profilePictureEndPoint: 'picture',
    redirectRouteAfterLogin: '/address', //just put the resource name
  },
  googleMapApiKey: 'googleMaspKeyss',
  // permissions: [
  //   {
  //     type: PERMISSION.CANLOGIN,
  //     fieldKey: {
  //       api: '/users/me',
  //       fieldForNextQuery: ['original.is_co'],
  //     },
  //   },
  // ],
  externPages: [{
    api: 'test',
    path: 'tests',
    name: 'tests',
    icon: 'search',
    renderComponent: AdditionalComponent,
    // group: {
    //   name: 'CLIENT',
    //   type: TYPE_GROUP.SEPARATOR, // Regroupe les ressources dans un menu deroulant
    //   priority: 8, // La priorité du group, plus elle est haute plus le group sera en haut du menu
    // },
    authRequired: false,
    showInMenu: true
  }]
};
