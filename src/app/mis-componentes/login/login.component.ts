import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private rutalogin:Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm)
  {
    console.log(form.value);
    if (form.value.email === 'brian@gmail.com' && form.value.contra === '123') {
      localStorage.setItem('email', form.value.email);
      this.rutalogin.navigate(['']);
      const ocultar = document.getElementById('session');
      ocultar.style.display = 'none';
      const mostrar = document.getElementById('cuenta');
      mostrar.style.display = 'block';

      console.log('hola');
    }
    else{
      console.log('adios');
    }
  }
}