import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../model/user.model';
import { UserServiceBase } from '../service/user.service.base';

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
    submitted: boolean = false;
    userForm: FormGroup;

    private _user: User;
    get user(): User {
        return this._user;
    }
    @Input('user')
    set user(user: User) {
        this._user = user;
        this.submitted = false;
    }

    private _titles: Object = {
        input_firstName: 'First Name',
        input_lastName: 'Last Name',
        input_userName: 'User Name',
        input_email: 'Email',
        input_password: 'Password',
        button_create: 'Create',
        button_update: 'Update',
        button_delete: 'Delete'
    };
    get titles(): Object {
        return this._titles;
    }
    @Input('titles')
    set titles(titles: Object) {
        this._titles = Object.assign(this._titles, titles);
    }

    @Input()
    createHandler: Function;
    @Input()
    updateHandler: Function;
    @Input()
    deleteHandler: Function;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserServiceBase) { }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            _id: '',
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            roles: {}
        });
    }

    createUser(user: User) {
        this.userService.createUser(user).then((newUser: User) => {
            this.createHandler(newUser);
        });
    }

    updateUser(user: User): void {
        this.userService.updateUser(user).then((updatedUser: User) => {
            this.updateHandler(updatedUser);
        });
    }

    deleteUser(userId: String): void {
        this.userService.deleteUser(userId).then((deletedUserId: String) => {
            this.deleteHandler(deletedUserId);
        });
    }

    onSubmit(user): void {
        this.submitted = true;

        if (this.user._id) {
            this.updateUser(user);
        }
        else {
            this.createUser(user);
        }
    }
}
