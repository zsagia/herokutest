import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminAuthGuard implements CanActivate {
    constructor(private router: Router) { }
 
    canActivate() {
        var userData = JSON.parse(localStorage.getItem('currentUserData'));
    
        if (userData && userData.user.roles.admin) {
            return true;
        }
 
        this.router.navigate(['/login']);

        return false;
    }
}