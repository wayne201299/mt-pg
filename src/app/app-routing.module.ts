import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppKeycloakAuthGuard } from './core/guards/keycloak-auth.guard';

export const globalRoutes: Routes = [
  {
    path: '',
    canActivate: [AppKeycloakAuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'referral-system',
      },
      {
        path: 'referral-system',
        data: { breadcrumb: { alias: 'referral-system' } },
        loadChildren: () =>
          import('src/app/pages/referral/referral.module').then(
            (m) => m.ReferralModule
          ),
      },
      {
        path: 'transaction',
        data: { breadcrumb: { alias: 'transaction' } },
        loadChildren: () =>
          import('src/app/pages/transaction/transaction.module').then(
            (m) => m.TransactionModule
          ),
      },
      {
        path: 'report',
        data: { breadcrumb: { alias: 'report' } },
        loadChildren: () =>
          import('src/app/pages/report/report.module').then(
            (m) => m.ReportModule
          ),
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(globalRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
