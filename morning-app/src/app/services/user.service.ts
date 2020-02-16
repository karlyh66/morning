import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { User } from '../model/user';
import { AuthService } from '../auth.service';

@Injectable()
export class UserService {

    usersRef: AngularFireList<any>;      // Reference to users list, Its an Observable
    userRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too

    constructor(private db: AngularFireDatabase, private authService: AuthService) { }

    // Add user
    AddUser(user: User) {
        this.userRef = this.db.object('user-list/' + user.id);
        this.userRef.set({
            id: user.id,
            name: user.name,
            email: user.email
        })
    }

    // Read User
    GetUser(id: string) {
        this.userRef = this.db.object('user-list/' + id);
        return this.userRef;
    }

    // Read User List
    GetUserList() {
        this.usersRef = this.db.list('user-list');
        return this.usersRef;
    }

    // Update User
    UpdateUser(user: User) {
        this.userRef = this.db.object('user-list/' + user.id);
        this.userRef.update({
            id: user.id,
            name: user.name,
            email: user.email,
        })
    }

    // Delete Student
    DeleteStudent(id: string) {
        this.userRef = this.db.object('students-list/' + id);
        this.userRef.remove();
    }
}