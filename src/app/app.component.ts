import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';
import { AuthenticationService } from './log-in/service/authentication.service';

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
        private authenticationService: AuthenticationService,
        private notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        if (!PermissionChecker.isAdmin() || !PermissionChecker.isLoggedIn()) {
            this.clearUser();
        }
    }

    isAdmin(): boolean {
        return PermissionChecker.isAdmin();
    }

    isLoggedIn(): boolean {
        return PermissionChecker.isLoggedIn();
    }

    private clearUser(): void {
        this.authenticationService.clearUser();
    }

    signOut(): void {
        this.clearUser();

        this.router.navigate([this.returnUrl]);

        this.notificationsService.info('Success', 'User is signed out.');
    }
}
