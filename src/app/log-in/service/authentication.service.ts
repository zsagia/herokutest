import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { AuthConfigConsts } from 'angular2-jwt';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(email: string, password: string) {
        let credentials = { email: email, password: window.btoa(password) };

        return this.http.post('/api/authenticate', credentials)
            .toPromise()
            .then((response: Response) => {
                let data = response.json();

                if (data && data.user) {
                     localStorage.setItem('currentUser', JSON.stringify(data.user));
                }

                 if (data && data.token) {
                     localStorage.setItem(AuthConfigConsts.DEFAULT_TOKEN_NAME, JSON.stringify(data.token));
                }
            });
    }

    clearUser() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem(AuthConfigConsts.DEFAULT_TOKEN_NAME);
    }
}

class Credentials {
    email: string;
    password: string;
}