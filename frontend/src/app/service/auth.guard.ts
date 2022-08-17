import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public token: TokenService,
    private router: Router) { }
  canActivate(
    
    route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        var isAuthenticated = this.token.isLoggedIn();
        if (!isAuthenticated) {
            this.router.navigate(['/login']);
        }
        return true;
        // return isAuthenticated;
  }
  
}
