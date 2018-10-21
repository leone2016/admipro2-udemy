import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

 progreso1:number = 50;
 progreso2:number = 20;
  ngOnInit() {
  }

  /*actualizar(event:number,bandera:number){
    if (bandera == 1)
        this.progreso1=event;
    else
        this.progreso2=event;
  }*/
}
