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
  tab1() {


    console.log(1);
    document.getElementById('usuario-caja').style.display = 'block';
    console.log(2);
    document.getElementById('compra-caja').style.display = 'none';
    console.log(3);
    document.getElementById('editar-caja').style.display = 'none';
    console.log(4);
    document.getElementById('tarjeta-caja').style.display = 'none';
    console.log(5);
    document.getElementById('añadir-caja').style.display = 'none';
    console.log(6);
    document.getElementById('lista-producto-caja').style.display = 'none';
    console.log(7);

    document.getElementById('tab-1').style.backgroundColor = '#ff7712';
    console.log(8);
    document.getElementById('tab-2').style.backgroundColor = 'white';
    console.log(9);
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = 'white';
    document.getElementById('tab-5').style.backgroundColor = 'white';
    document.getElementById('tab-6').style.backgroundColor = 'white';








  }


  tab2() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = '#ff7712';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = 'white';
    document.getElementById('tab-5').style.backgroundColor = 'white';
    document.getElementById('tab-6').style.backgroundColor = 'white';



    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'block';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'none';
    document.getElementById('añadir-caja').style.display = 'none';
    document.getElementById('lista-producto-caja').style.display = 'none';



  }

  tab3() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = '#ff7712';
    document.getElementById('tab-4').style.backgroundColor = 'white';
    document.getElementById('tab-5').style.backgroundColor = 'white';
    document.getElementById('tab-6').style.backgroundColor = 'white';



    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'block';
    document.getElementById('tarjeta-caja').style.display = 'none';
    document.getElementById('añadir-caja').style.display = 'none';
    document.getElementById('lista-producto-caja').style.display = 'none';




  }
  tab4() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = '#ff7712';
    document.getElementById('tab-5').style.backgroundColor = 'white';
    document.getElementById('tab-6').style.backgroundColor = 'white';



    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'block';
    document.getElementById('añadir-caja').style.display = 'none';
    document.getElementById('lista-producto-caja').style.display = 'none';



  }
  boton5() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = 'white';
    document.getElementById('tab-5').style.backgroundColor = '#ff7712';
    document.getElementById('tab-6').style.backgroundColor = 'white';



    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'none';
    document.getElementById('añadir-caja').style.display = 'block';
    document.getElementById('lista-producto-caja').style.display = 'none';



  }

  boton6() {
    document.getElementById('tab-1').style.backgroundColor = 'white';
    document.getElementById('tab-2').style.backgroundColor = 'white';
    document.getElementById('tab-3').style.backgroundColor = 'white';
    document.getElementById('tab-4').style.backgroundColor = 'white';
    document.getElementById('tab-5').style.backgroundColor = 'white';
    document.getElementById('tab-6').style.backgroundColor = '#ff7712';




    document.getElementById('usuario-caja').style.display = 'none';
    document.getElementById('compra-caja').style.display = 'none';
    document.getElementById('editar-caja').style.display = 'none';
    document.getElementById('tarjeta-caja').style.display = 'none';
    document.getElementById('añadir-caja').style.display = 'none';
    document.getElementById('lista-producto-caja').style.display = 'block';



  }


  edit1() {
    document.getElementById('content-1').style.display = 'none';
    document.getElementById('content-2').style.display = 'none';
    document.getElementById('content-3').style.display = 'none';
    document.getElementById('content-4').style.display = 'none';
    document.getElementById('content-5').style.display = 'none';
    document.getElementById('content-6').style.display = 'none';




    document.getElementById('nombre').style.display = 'block';
    document.getElementById('apellp').style.display = 'block';
    document.getElementById('apellm').style.display = 'block';
    document.getElementById('tel').style.display = 'block';
    document.getElementById('vivienda').style.display = 'block';
    document.getElementById('numvivienda').style.display = 'block';


    document.getElementById('exampleFormControlFile1').style.display = 'block';

    document.getElementById('form2').style.display = 'block';
    ;
    document.getElementById('edit').style.display = 'none';
    document.getElementById('fin').style.display = 'block';
    document.getElementById('cancelar').style.display = 'block';
  }



  fin() {
    location.reload();
    alert('CAMBIO REALIZADO');
  }
  cancelar() {
    location.reload();
  }

  tarjeta() {
    document.getElementById('contenedor-form').style.display = 'block';
    document.getElementById('tarjetanombre').style.display = 'block';
    document.getElementById('tarjetaapellidop').style.display = 'block';
    document.getElementById('tarjetaapellidom').style.display = 'block';
    document.getElementById('tarjetacvc').style.display = 'block';
    document.getElementById('tarjetaf').style.display = 'block';
    document.getElementById('tarjetatipo').style.display = 'block';
    document.getElementById('tarjetanum').style.display = 'block';

  }

  anadir() {
    location.reload();
    alert('TARJETA AÑADIDA');
  }


}
