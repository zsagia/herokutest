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
                let data = response.json();

                if (data && data.user) {
                     localStorage.setItem('currentUser', JSON.stringify(data.user));
                }

                 if (data && data.token) {
                     localStorage.setItem('id_token', JSON.stringify(data.token));
                }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('id_token');
    }
}

class Credentials {
    email: string;
    password: string;
}