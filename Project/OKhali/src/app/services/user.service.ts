import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  constructor() { }

  getUsers() {
    return this.users.slice();
  }
  getUser(id: number) {
    return this.users.slice()[id];
  }
}
