import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { 

}


// const APP_ROUTES: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'notAllowed', component: NotAllowedComponent },
//   { path: 'accounts', component: AccountsComponent, canActivate: [AuthGuard] },
//   { path: 'eos-tokens', component: EosTokenComponent, canActivate: [AuthGuard] },
//   { path: 'erc20-tokens', component: Erc20TokenComponent, canActivate: [AuthGuard] },
//   { path: 'qrc20-tokens', component: Qrc20TokenComponent, canActivate: [AuthGuard] },
//   { path: 'versions', component: AppVersionComponent, canActivate: [AuthGuard] }

// ];

// export const RoutingModule = RouterModule.forRoot(APP_ROUTES);
