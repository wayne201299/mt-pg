// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { KeycloakConfig } from 'keycloak-js';


export const keycloakConfig: KeycloakConfig = {
  url: 'https://keycloak-test.umhgp.com/auth',
  realm: 'umh_internal',
  clientId: 'doctor-referral'
};

export const environment = {
  production: false,
  API_END_POINT: 'http://sit_doctor_referral/doctor-referral/api',
  keycloak: keycloakConfig,
  DOCTOR_SEARCH_END_POINT: 'https://doctor-referraluat.echealthcare.com/referral-system/',
  CSP_END_POINT: 'https://csp-uat.echealthcare.com/index.php/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
