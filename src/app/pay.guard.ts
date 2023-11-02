import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutsGardService } from './auts-gard.service';
@Injectable({
  providedIn: 'root'
})

export class PayGuard implements CanActivate {
  constructor(private gardService:AutsGardService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var isAuth;
    this.gardService.IsAuth$.subscribe(y=> {isAuth=y;})
    if(isAuth)
      return true;
      else
      return this.router.parseUrl('/login');
  }
  
} 
