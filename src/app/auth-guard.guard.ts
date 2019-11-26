import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanActivateChild, CanLoad {
  user1 = ["opciones", "facultades", "bloques", "laboratorios", "docentes", "asignaturas", "listarusuarios", "listarsolicitudes"]
  user2 = ["opciones", "listarsolicitudes", "formulario"]
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (user == 2 && this.user2.indexOf(next.url.join()) != -1) {
      return true
    } else if (user == 1 && this.user1.indexOf(next.url.join()) != -1) {
      return true
    } else {
      this.router.navigate(['/login']);
      return false
    }

    // console.log(next.url.join().includes("listarsolicitudes"))
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(

    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
