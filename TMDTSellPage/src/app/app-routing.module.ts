import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {
    SimpleLayoutComponent,
    HomeLayoutComponent
  } from './containers';
import { LoginTestComponent } from './login-test/login-test.component';

const routes: Routes = [
  {
    path: '' , redirectTo: 'home/main',
    pathMatch: 'full',
  },
  { path: '', component: HomeLayoutComponent,
   loadChildren: './view/home/home.module#HomeModule'
},
  {
      path: 'pages',
      component: SimpleLayoutComponent,
      loadChildren: './view/pages/pages.module#PagesModule'
  },
  {
    path: 'login',
    component: LoginTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

