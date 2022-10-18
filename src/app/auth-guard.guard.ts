import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {  Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router:Router, private socialAuthService:SocialAuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.socialAuthService.authState.pipe(
      map((socialUser:SocialUser)=>!!socialUser),
      tap((isLoggedIn:boolean)=>{
        if(!isLoggedIn){
          this.router.navigate(['login'])
        }
      })
      )
    
  }
  
}
