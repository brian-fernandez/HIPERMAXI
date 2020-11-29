import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.css']
})
export class NavVarComponent implements OnInit {

  constructor(private rutalogin: Router) { }

  ngOnInit(): void {
  }

salir()
{



      this.rutalogin.navigate(['login']);

      localStorage.removeItem('email');
      console.log(localStorage);
      return
}

}
