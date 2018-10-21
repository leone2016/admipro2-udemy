## hello, this a udemy's course whern I've practice angular advanced 
##### important to remaind 

* ng g c --help   this is important if You don't remenber, what is come after? 
* ng serve -o --port  Deploid the app and added a different port


##### codes that I've used 

* ng g c login --spec=false --is
* ng g c pages/dashboard --spec=false --is
* ng g c pages/progress --spec=false --is
* ng g c pages/graficas1 --spec=false --is
* ng g c shared/pagenotfound --spec=false --is
* ng g c shared/header --spec=false --is
* ng g c shared/sidebar --spec=false --is
* ng g c shared/modal --spec=false --is
* ng g c shared/modalmessage --spec=false --is
* ng g c shared/breadcrums --spec=false --is
* ng g s services/shared --spec=false --is
* ng g s services/sidebar --spec=false --is 

## After create all compotents and services

* create a app/app.routes.ts
* import app.routes.ts into app/app.module.ts

## how to implement login page 

* ng g c pages/pages --flat -is --spec=false | flat: not creating a new folder
* all app.compotent.html content cut and past into pages.component.html
    * app.componet.html had every components such as progress, dashboard but It's dificult to implement in the same page (app.component.html) the LOGIN for this reason we've let's create a new component (pages.component.html)

## LIBS 
* animate.css  let's have more information about animate 
* shearch animate.css and change 1s to 0.3s 
## Tslint.json
* normally this (val:number = 50;) is a mistake for tslint, for resolve to put on no-inferrable-types = false
## install ng-chart 
* npm install ng2-charts --save
* npm install chart.js --save
