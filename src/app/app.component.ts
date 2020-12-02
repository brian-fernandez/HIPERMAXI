import { Component } from '@angular/core';
import { CargarScriptsService } from "src/app/cargar-scripts.service";
declare  var jQuery:  any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hipermaxi';
  constructor( private _CargaScripts:CargarScriptsService) {
    _CargaScripts.Carga(["carrito"])
  }

  ngOnInit (){
    (function ($) {
      $(document).ready(function(){
        console.log('Hello from jQuery!');
      });
    })(jQuery);
  }

  
}
