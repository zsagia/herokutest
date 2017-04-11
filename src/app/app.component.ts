import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';

import { PermissionChecker } from './permission-checker/permission.checker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title: string = 'ZsBuildings';
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    isAdmin(): boolean {
        return PermissionChecker.isAdmin();
    }

    isLoggedIn(): boolean {
        return PermissionChecker.isLoggedIn();
    }

    signOut(): void {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('id_token');

        this.router.navigate([this.returnUrl]);

        this.notificationsService.info('Success', 'User is signed out.');
    }
}
