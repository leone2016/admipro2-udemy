import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
import {ChartsModule} from 'ng2-charts';
import {BrowserModule} from '@angular/platform-browser';
import {RegisterComponent} from '../login/register.component';
import {GraficaDonaComponent} from '../components/grafica-dona/grafica-dona.component';
import { AccountSetingsComponent } from './account-setings/account-setings.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
      GraficaDonaComponent,
      AccountSetingsComponent

    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent
    ],
    imports:[SharedModule, PAGES_ROUTES, FormsModule, ChartsModule,BrowserModule ]
})
export class PagesModule{}

