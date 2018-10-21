import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styleUrls: ['./grafica-dona.component.css']
})
export class GraficaDonaComponent implements OnInit {

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  @Input() chartLabels: string[] = [];
  @Input() chartData: number[]   = [];
  @Input() chartType: string     = '';


  constructor() { }

  ngOnInit() {
  }

}
