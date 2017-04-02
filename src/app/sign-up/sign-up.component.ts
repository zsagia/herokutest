import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user/model/user.model';
import { UserServiceBase } from '../user/service/user.service.base';

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
        private userService: UserServiceBase) {

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
            password: ''
        };

        this.user = user;
    }

    register() {
        this.loading = true;
        this.userService.createUser(this.user)
            .then(
            data => {
                this.router.navigate([this.loginPath]);
            },
            error => {
                this.loading = false;
            });
    }

    addUser() {
        
    }

}
