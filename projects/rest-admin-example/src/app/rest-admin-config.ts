import { REST_CONFIG, STRATEGY_AUTH } from 'rest-admin';
import { resources } from './resources';

export const RESOURCES_CONFIG: REST_CONFIG = {
  name: 'Mydashs',
  baseUrl: 'https://api.example.com/api',
  resources: resources,
  authConfig: {
    strategy: STRATEGY_AUTH.EMAIL,
    loginEndPoint: '/auth/signin',
    logoutEndPoint: '/auth/signout',
    redirectRouteAfterLogin: '/address', //juste mettre le nom de la ressource
  },
};
