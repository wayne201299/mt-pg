import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { keycloakConfig } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppKeycloakAuthGuard
  extends KeycloakAuthGuard
  implements CanActivate
{
  constructor(
    protected override router: Router,
    protected override keycloakAngular: KeycloakService
  ) {
    super(router, keycloakAngular);
  }

  isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      this.roles =
        this.keycloakAngular.getKeycloakInstance().tokenParsed?.resource_access?.[
          keycloakConfig.clientId
        ]?.roles!;
      if (!this.authenticated) {
        this.keycloakAngular.login().catch((e) => console.error(e));
        return reject(false);
      }

      const requiredRoles: string[] = route.data['roles'];
      if (!requiredRoles || requiredRoles.length === 0) {
        return resolve(true);
      } else {
        if (!this.roles || this.roles.length === 0) {
          resolve(this.router.parseUrl('/error/access-denied'));
        }
        resolve(requiredRoles.every((role) => this.roles.indexOf(role) > -1));
      }
    });
  }
}
