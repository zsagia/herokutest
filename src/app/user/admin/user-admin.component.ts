import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";

import { User } from '../model/user.model';
import { UserServiceBase } from '../service/user.service.base';

@Component({
    selector: 'user-admin',
    templateUrl: './user-admin.component.html',
    styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

    users: User[];
    selectedUser: User;

    constructor(private userService: UserServiceBase) { }

    ngOnInit() {
        this.userService
            .getUsers()
            .then((users: User[]) => {
                this.users = users.map((user) => {

                    return user;
                });
            });
    }

    private getIndexOfUser = (userId: String) => {
        return this.users.findIndex((user) => {
            return user._id === userId;
        });
    }

    selectUser(user: User) {
        this.selectedUser = user
    }

    createNewUser() {
        var user: User = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            roles: {}
        };

        this.selectUser(user);
    }

    deleteUser = (userId: String) => {
        var idx = this.getIndexOfUser(userId);

        if (idx !== -1) {
            this.users.splice(idx, 1);
            this.selectUser(null);
        }

        return this.users;
    }

    addUser = (user: User) => {
        this.users.push(user);
        this.selectUser(user);

        return this.users;
    }

    updateUser = (user: User) => {
        var idx = this.getIndexOfUser(user._id);

        if (idx !== -1) {
            this.users[idx] = user;
            this.selectUser(user);
        }

        return this.users;
    }

}
