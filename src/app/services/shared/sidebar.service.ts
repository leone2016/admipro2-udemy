import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any=[
    {
      titulo:'principal',
      icono: 'mdi mdi-guage',
      submenu: [
        {titulo:'DashBoard', url:'/dashboard'},
        {titulo:'ProgressBar', url:'/progress'},
        {titulo:'Graphics', url:'/graficas'},
        {titulo:'Settings', url:'/settings'},
        {titulo:'Promesas', url:'/promesas'},
        {titulo:'RxJs', url:'/rxjs'},
      ]

    }
  ];
  constructor() { }
}
