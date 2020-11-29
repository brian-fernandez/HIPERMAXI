import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavVarComponent } from './mis-componentes/nav-var/nav-var.component';
import { InicioComponent } from './mis-componentes/inicio/inicio.component';
import { FooterComponent } from './mis-componentes/footer/footer.component';
import { LoginComponent } from './mis-componentes/login/login.component';
import { RegistroComponent } from './mis-componentes/registro/registro.component';
import { Seccion1Component } from './mis-componentes/seccion1/seccion1.component';
import { Seccion2Component } from './mis-componentes/seccion2/seccion2.component';
import { Seccion3Component } from './mis-componentes/seccion3/seccion3.component';
import { OpcionesComponent } from './mis-componentes/opciones/opciones.component';
import { OpcionesadminComponent } from './mis-componentes/opcionesadmin/opcionesadmin.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './seguridad/login.guard';


const routes: Routes = [
  { path: 'frutasyverduras',
   component: Seccion1Component

  },
  {
    path: 'bebidas',
    component: Seccion2Component
  },
  {
    path: 'carne-embutido',
    component: Seccion3Component
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'registre',
    component: RegistroComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'

  }
  ,
  {
    path: 'inicio',
   component: InicioComponent,canActivate:[LoginGuard]
  },
  { path: 'opciones',
   component: OpcionesComponent

  },
  { path: 'opcionesadmin',
  component: OpcionesadminComponent

 }
];

@NgModule({
  declarations: [
    AppComponent,
    NavVarComponent,
    InicioComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    OpcionesComponent,
    OpcionesadminComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)




  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

