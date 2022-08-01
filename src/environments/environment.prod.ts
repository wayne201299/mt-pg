import { KeycloakConfig } from 'keycloak-js';


declare const KEYCLOAK_URL: string;
declare const KEYCLOAK_REALM: string;
declare const KEYCLOAK_CLIENT_ID: string;
declare const CSP_END_POINT: string;
declare const DOCTOR_SEARCH_END_POINT: string;

export const keycloakConfig: KeycloakConfig = {
  url: KEYCLOAK_URL,
  realm: KEYCLOAK_REALM,
  clientId: KEYCLOAK_CLIENT_ID
};

export const environment = {
  production: true,
  API_END_POINT: '/api',
  keycloak: keycloakConfig,
  DOCTOR_SEARCH_END_POINT: DOCTOR_SEARCH_END_POINT,
  CSP_END_POINT: CSP_END_POINT,
};
