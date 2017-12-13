import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  SimpleLayoutComponent,
  HomeLayoutComponent
} from './containers';



const APP_CONTAINERS = [
  SimpleLayoutComponent,
  HomeLayoutComponent
] ;

import {
 HomeHeaderComponent,
 HomeFooterComponent
} from './components';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

const APP_COMPONENTS = [
  HomeHeaderComponent,
  HomeFooterComponent
];


@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS
  ],
  imports: [
  AppRoutingModule ,
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
