import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ModalmessageComponent } from './modalmessage/modalmessage.component';


@NgModule({
  imports:[
    RouterModule,
    CommonModule
  ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent,
        PagenotfoundComponent,
        ModalmessageComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent,
        PagenotfoundComponent,
        ModalmessageComponent
    ]
})
export class SharedModule {}
