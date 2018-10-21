import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesModule } from './pages/pages.modules';
import { APP_ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';

/*
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ModalmessageComponent } from './shared/modalmessage/modalmessage.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { PagesComponent } from './pages/pages.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent

    //PagenotfoundComponent,
   // DashboardComponent,
    //ProgressComponent,
    //Graficas1Component,
    //HeaderComponent,
    //SidebarComponent,
    //ModalComponent,
    //ModalmessageComponent,
    //BreadcrumsComponent,
    //PagesComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
