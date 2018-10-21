import {Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress')  txtProgress: ElementRef;// recibe una referencia tipo HTML

  @Input() progreso: number = 50;
  @Input() leyenda = 'Legend';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {

  }

  ngOnInit() {
    console.log(this.leyenda);
    console.log(this.progreso);
  }
  cambiarValor(valor) {
    if ((this.progreso + valor) >= 0 && (this.progreso + valor) <= 100) {
      this.progreso = this.progreso + valor;
    }
    this.cambioValor.emit(this.progreso);

  }
  onChange( newValue:number ){
    // let elemtHTML : any = document.getElementsByName('progreso')[0]; //vanilla js

    if(newValue>=100){
      this.progreso=100;
    }else if(newValue<+0){
      this.progreso=0
    }else{
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
    // elemtHTML.value = this.progreso;

  }
}
