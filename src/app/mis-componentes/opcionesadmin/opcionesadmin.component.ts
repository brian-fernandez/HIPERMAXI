import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcionesadmin',
  templateUrl: './opcionesadmin.component.html',
  styleUrls: ['./opcionesadmin.component.css']
})
export class OpcionesadminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tab1()
  {
    console.log(1);
    document.getElementById("usuariocaja").style.display = "block";
    document.getElementById("compra-caja").style.display="none";
    document.getElementById("editar-caja").style.display = "none";
    document.getElementById("tarjeta-caja").style.display = "none";
    document.getElementById("añadir-caja").style.display = "none";
    document.getElementById("lista-producto-caja").style.display = "none";
    document.getElementById("tab-1").style.backgroundColor = " #ff7712";
     document.getElementById("tab-2").style.backgroundColor = "white";
     document.getElementById("tab-3").style.backgroundColor = "white";
     document.getElementById("tab-4").style.backgroundColor = "white";
     document.getElementById("tab-5").style.backgroundColor = "white";
     document.getElementById("tab-6").style.backgroundColor = "white";
     console.log(13);







  }
}
