import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {SettingsService} from '../../services/service.index';

@Component({
  selector: 'app-account-setings',
  templateUrl: './account-setings.component.html',
  styles: []
})
export class AccountSetingsComponent implements OnInit {

  constructor( public _ajustes:SettingsService) { }

  ngOnInit() {
    this._ajustes.aplicarVisto2();
  }

  cambiarColor(tema:string, link: any){
    //MUY IMPORTANTE TOMAR EN CUENTA ESTA ESTRUCTURA ------------------
    //#link1 (click)="cambiarColor('default',link1)"
    this._ajustes.aplicarVisto(link);
    this._ajustes.aplicarTema(tema);

  }



}

