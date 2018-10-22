import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'asstes/css/colors/default.css',
    tema:'default'
  };
  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }

  guardarAjustes(){
    console.log("Guardado en el local storage");
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
    if( localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log("Cargando de LocalStorage");
      console.log(this.ajustes.tema);
    }else{
      console.log("cargando valores por defecto");
    }
    let color: string = this.ajustes.tema;
     this.aplicarTema(color);
  }
aplicarTema(tema:string){
    console.log('------->'+tema);
  let url =`assets/css/colors/${tema}.css`; //es necesario declarar el path, si el css estuviera en style.css o junto a el, no sería necesario esta linea
  this._document.getElementById('theme').setAttribute('href', url);
  this.ajustes.tema = tema;
  this.ajustes.temaUrl = url;
  this.guardarAjustes();
}
aplicarVisto2(){

  let selector:any = document.getElementsByClassName('selector');
  let tema = this.ajustes.tema;
  for(let ref of selector){
    if( ref.getAttribute('data-theme') === tema){
      ref.classList.add('working');
      break;
    }

  }
}
aplicarVisto(link: any){
  // vanila javascript, no es recomendable, ya que no es codigo de angular ni typeScritp, pero son compatibles
  // genera un arreglo con todas las clases tipo selector
  let selectores: any = document.getElementsByClassName('selector'); // esto lo saco de... class="selector blue-theme"
  // console.log(selectores);
  for(let ref of selectores){
    //esto se llama vanila javascript
    ref.classList.remove('working');
  }
  link.classList.add('working');
}

}

interface Ajustes{
  temaUrl:string;
  tema:string;
}
