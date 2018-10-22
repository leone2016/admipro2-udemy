## hello, this a udemy's course whern I've practice angular advanced 
##### important to remaind 

* ng g c --help   this is important if You don't remenber, what is come after? 
* ng serve -o --port  Deploid the app and added a different port


##### codes that I've used 

* ng g c login --spec=false -is
* ng g c pages/dashboard --spec=false -is
* ng g c pages/progress --spec=false -is
* ng g c pages/graficas1 --spec=false -is
* ng g c shared/pagenotfound --spec=false -is
* ng g c shared/header --spec=false -is
* ng g c shared/sidebar --spec=false -is
* ng g c shared/modal --spec=false -is
* ng g c shared/modalmessage --spec=false -is
* ng g c shared/breadcrums --spec=false -is
* ng g s services/shared --spec=false -is
* ng g s services/sidebar --spec=false -is 
* ng g s services/settings -m="app.module.ts" --spec=false
* ng g c pages/accountSetings -is --spec=false -m="pages/pages.module.ts"



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

## secction 7 video 58 change dynamic the css principal
* In this section did 2 manner to change the css principal
 
## secction 7 video 60 guarda color en el localStorage (Spanish explication)
* primero: creamos un nuevo servicio (settings.service.ts)
* Setting.service 
  * Se crea un Interface con tema y temaurl 
  * Se realiza una inicialización de esta interface, para tener un color por defecto
  * Se crea una función para guardar la Interface(JSON) en formato string en el LocalStorage
  * Se crea una función para cargar del localStorage de string se transforma a Json
  * en account-setings se hace una llamado (constructor) y se carga en interfase TEMA - TEMAURL - GuardaLocalStorage
  * en el caso que se ACTUALIZE la pagina es necesarios hacer el llamado al servicio (setting.service) en el constructor
  * en el constructor de setting.service inicializar cargarAjustes(), para que cuanto se actualize o se carge la aplicacion se utilize esta función y elija el color del LocalSotrage o a su vez pidría ser el color por defecto

## seccion 7 video 62 
> Agrupar los servicios en un modulo y en un solo archivo
esto sirve en el caso que se desee mover los servicios y para que no afecte en donde se lo haya importado
se centraliza todo en el archivo **service.index**
* Primero se crea un modulo de servicios:
  * ng g m services/service --spec=false --flat
  * en este archivo (**service.module**)
    * hacer un llamado de service.index en providers:[ ... , ... , ... ]
* se crea una carpeta settings/settigs.service
* se crea una carpeta shared/shared.service y shared 
* se crea un archivo **service.index**
  * se **export** los servicios SettingService, SharedService, SidebarService
* en **app.module** en imports:[ ServiceModule ], todos los servicios van en *imports*
## trabajar con RouterLink
* es necesario import en el modulo que fuera necesario (shared.modulo):: imports:[ RouterModule]
## trabajar con ngIf - ngFor - pippes  
* es necesario importar en el modulo necesario :: imports:[ CommonModule ] 

## Plugging fuera de angular

> hay dos ejemplos en login.component.ts y pages.component.ts
* en  login.component se lo agrego ya que despues de dar click en login carga el archvo .js (inica_plungin_leo)
* tambien se lo agrego en pages.component.ts ya que es el contiene todas las demas paginas

  
