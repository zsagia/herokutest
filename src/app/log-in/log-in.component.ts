import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './service/authentication.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
    authenticationForm: FormGroup;
    submitted: boolean = false;
    returnUrl: string;

    private _titles: Object = {
        input_email: 'Email',
        input_password: 'Password',
        button_login: 'Log in'
    };
    get titles(): Object {
        return this._titles;
    }
    @Input('titles')
    set titles(titles: Object) {
        this._titles = Object.assign(this._titles, titles);
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private notificationsService: NotificationsService) { }

    ngOnInit() {
        this.authenticationForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.authenticationService.clearUser();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login(credentials: Object) {
        this.authenticationService.login(credentials['email'], credentials['password'])
            .then(
            data => {
                this.notificationsService.info('Success', 'User is logged in.');
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.submitted = false;
                this.notificationsService.error(error.statusText, JSON.parse(error._body).error);
            });
    }

    onSubmit(credentials): void {
        this.submitted = true;

        this.login(credentials);
    }

}
