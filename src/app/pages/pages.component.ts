import { Component, OnInit } from '@angular/core';
declare function inica_plungin_leo();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    inica_plungin_leo();
  }

}
