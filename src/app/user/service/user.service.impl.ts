import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';

import { User } from '../model/user.model';
import { UserServiceBase } from './user.service.base';

@Injectable()
export class UserServiceImpl extends UserServiceBase {
    private usersUrl = '/api/users';
    private privateUsersUrl = '/api/private/users';

    constructor(private authHttp: AuthHttp) {
        super();
    }

    // get("/api/user")
    getUser(id: String): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user._id === id));
    }

    // get("/api/users")
    getUsers(): Promise<Array<User>> {
        return this.authHttp.get(this.privateUsersUrl)
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    }

    // post("/api/users")
    createUser(newUser: User): Promise<User> {
        newUser.password = window.btoa(newUser.password.toString());

        return this.authHttp.post(this.privateUsersUrl, newUser)
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handleError);
    }

    // delete("/api/users/:id")
    deleteUser(delUserId: String): Promise<String> {
         return this.authHttp.delete(this.privateUsersUrl + '/' + delUserId)
            .toPromise()
            .then(response => response.json() as String)
            .catch(this.handleError);
    }

    // put("/api/users/:id")
    updateUser(putUser: User): Promise<User> {
        var putUrl = this.privateUsersUrl + '/' + putUser._id;

        return this.authHttp.put(putUrl, putUser)
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handleError);
    }

    // post("/api/users")
    registerUser(newUser: User): Promise<User> {
        newUser.password = window.btoa(newUser.password.toString());

        return this.authHttp.post(this.usersUrl, newUser)
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handleError);
    }

}