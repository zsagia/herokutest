import { User } from '../model/user.model';

export interface UserService {
    getUser(id: String): Promise<User>;
    getUsers(): Promise<Array<User>>;
    createUser(newUser: User): Promise<User>;
    deleteUser(delUserId: String): Promise<String>;
    updateUser(putUser: User): Promise<User>;
    registerUser(newUser: User): Promise<User>;
}
