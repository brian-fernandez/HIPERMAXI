import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import { CargarScriptsService } from "src/app/cargar-scripts.service";
declare  var jQuery:  any;




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hipermaxi';

  login =
  {
    usuario: null,
    contraseña: null,
    cargo: null
  }


  constructor( private _CargaScripts:CargarScriptsService) {
    _CargaScripts.Carga([' carrito '] )



  }

  ngOnInit(){

  }







}
