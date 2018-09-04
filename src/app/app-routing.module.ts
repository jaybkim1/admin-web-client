import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // pathMatch is used to specify the matching strategy full or prefix. full means that the whole URL's path needs to match by the matching algorithm. prefix means the first route where path matches the start of the URL will be chosen. In the case of empty path if we don't set the full matching strategy then we won't get the desired behavior as any path starts with an empty path.
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { 

}
