import { REST_CONFIG, STRATEGY_AUTH } from 'rest-admin';
import { resources } from './resources';

export const RESOURCES_CONFIG: REST_CONFIG = {
  name: 'My project Name',
  baseUrl: 'https://api.marylis.com/api',
  resources: resources,
  authConfig: {
    strategy: STRATEGY_AUTH.EMAIL,
    loginEndPoint: '/auth/signin',
    logoutEndPoint: '/auth/logout',
    userInfoEndPoint: '/users/me',
    // profileNameEndPoint: 'name',
    // profilePictureEndPoint: 'picture',
    redirectRouteAfterLogin: '/address', //juste mettre le nom de la ressource
  },
};
