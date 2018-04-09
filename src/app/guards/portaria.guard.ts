import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PortariaGuard implements CanActivateChild{

 
  constructor(
    private router: Router,
  ) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> {
      if (localStorage.getItem('currentUser')) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }

}
