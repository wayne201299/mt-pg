import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppKeycloakAuthGuard } from './guards/keycloak-auth.guard';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AppKeycloakAuthGuard],
})
export class CoreModule {}
