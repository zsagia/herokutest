import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from '../model/user.model';
import { UserServiceBase } from './user.service.base';

@Injectable()
export class UserServiceImpl extends UserServiceBase {
    private usersUrl = '/api/users';

    constructor(private http: Http) {
        super();
    }

    // get("/api/user")
    getUser(id: String): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user._id === id));
    }

    // get("/api/users")
    getUsers(): Promise<Array<User>> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    }

    // post("/api/users")
    createUser(newUser: User): Promise<User> {
        newUser.password = window.btoa(newUser.password.toString());

        return this.http.post(this.usersUrl, newUser)
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handleError);
    }

    // delete("/api/users/:id")
    deleteUser(delUserId: String): Promise<String> {
         return this.http.delete(this.usersUrl + '/' + delUserId)
            .toPromise()
            .then(response => response.json() as String)
            .catch(this.handleError);
    }

    // put("/api/users/:id")
    updateUser(putUser: User): Promise<User> {
        var putUrl = this.usersUrl + '/' + putUser._id;

        return this.http.put(putUrl, putUser)
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handleError);
    }

}