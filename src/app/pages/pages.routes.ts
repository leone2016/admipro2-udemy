import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import {AccountSetingsComponent} from './account-setings/account-setings.component';


const pagesRoutes: Routes = [
    {     path: '',
            component: PagesComponent,
                children: [
                { path: 'dashboard', component: DashboardComponent },
                { path: 'progress', component: ProgressComponent },
                { path: 'graficas', component: Graficas1Component },
                { path: 'settings', component: AccountSetingsComponent },
                { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
//forRoot se usa cuando es la ruta principal
//forChild se usa cuando tengo un router outlet dentro de otro router outlet 
