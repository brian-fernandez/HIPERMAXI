import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private rutalogin: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm)
  {
    console.log(form.value);
    if (form.value.email === 'brian@gmail.com' && form.value.contra === '123') {
      localStorage.setItem('email', form.value.email);
      this.rutalogin.navigate(['']);
      const ocultar = document.getElementById('navv');
      ocultar.style.display = 'flex';
      const mostrar = document.getElementById('foot');
      mostrar.style.display = 'block';

      console.log('hola');
      console.log(localStorage);

    }
    else{
      alert("No existe el usuario");
    }

  }

  registro()
  {
    this.rutalogin.navigate(['registre']);
  }

}
