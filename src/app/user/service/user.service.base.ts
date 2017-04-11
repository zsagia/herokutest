import { Injectable } from '@angular/core';

import { ServiceBase } from '../../service/service.base';
import { User } from '../model/user.model';
import { UserService } from './user.service';

@Injectable()
export abstract class UserServiceBase extends ServiceBase implements UserService {
    abstract getUser(id: String): Promise<User>;
    abstract getUsers(): Promise<Array<User>>;
    abstract createUser(newUser: User): Promise<User>;
    abstract deleteUser(delUserId: String): Promise<String>;
    abstract updateUser(putUser: User): Promise<User>;
    abstract registerUser(newUser: User): Promise<User>;
}
