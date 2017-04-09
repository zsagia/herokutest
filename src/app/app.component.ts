import { Component } from '@angular/core';
import { PermissionChecker } from './permission-checker/permission.checker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'ZsBuildings';

    isAdmin(): boolean {
        return PermissionChecker.isAdmin();
    }

    isLoggedIn(): boolean {
        return PermissionChecker.isLoggedIn();
    }

    signOut(): void {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('id_token');
    }
}
