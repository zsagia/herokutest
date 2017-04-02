import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(email: string, password: string) {
        let credentials = { email: email, password: window.btoa(password) };

        return this.http.post('/api/authenticate', credentials)
            .toPromise()
            .then((response: Response) => {
                let user = response.json();

                if (user && user.token) {
                     localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}

class Credentials {
    email: string;
    password: string;
}