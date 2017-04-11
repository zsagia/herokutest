import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user/model/user.model';
import { UserServiceBase } from '../user/service/user.service.base';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    user: User;
    loading = false;
    loginPath: String;

    constructor(
        private router: Router,
        private userService: UserServiceBase,
        private notificationsService: NotificationsService) {

    }

    ngOnInit() {
        this.initNewUser();
    }

    initNewUser() {
        var user: User = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            roles: {}
        };

        this.user = user;
    }

    register() {
        this.loading = true;
        this.userService.registerUser(this.user)
            .then(
            data => {
                this.notificationsService.info('Success', 'User is registered.');
                this.router.navigate([this.loginPath]);
            },
            error => {
                this.notificationsService.error(error.statusText, JSON.parse(error._body).error);
                this.loading = false;
            });
    }

}
