import { Injectable } from '@angular/core';
import { User } from './user/user.model';

@Injectable()
export class UsersService {
  users: User[] = [
    { name: 'Sajjad', pass: '123', id: 1 },
    { name: 'Rey ', pass: '444', id: 2 },
  ];

  addNewUser(user: User) {
    this.users.push(user)
  }

  getUser(id: number){
    return this.users.filter((us) => us.id === +id)[0];
  }

  editUser(id: number){
    const user = this.getUser(id)

    
  }
}
