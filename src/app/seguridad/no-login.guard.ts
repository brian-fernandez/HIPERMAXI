import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {

  constructor(private rutaLogin: Router)
{

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('email') === null) {
        return true;

      }else{
        this.rutaLogin.navigate(['inicio']);
        return false;
       }
  }

}
