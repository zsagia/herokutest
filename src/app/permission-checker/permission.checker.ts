import { tokenNotExpired } from 'angular2-jwt'; 

export class PermissionChecker {
    static isAdmin() {
        var userData = JSON.parse(localStorage.getItem('currentUser'));
    
        if (userData && userData.roles.admin) {
            return true;
        }

        return false;
    }

    static isLoggedIn() {
        return tokenNotExpired();
    }
}