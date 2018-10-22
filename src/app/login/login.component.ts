import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare function inica_plungin_leo();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
    inica_plungin_leo();
  }

  ingresar(){
        console.log("INgresando");
        this.router.navigate(['/dashboard']);

  }
}
