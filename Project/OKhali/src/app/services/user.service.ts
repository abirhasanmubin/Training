import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    new User("1", "test", "test@test.com", "token1", new Date(new Date().getTime() + 86400 * 1000), "01521428041", 5, 2, true, [], []),
    new User("2", "demo", "demo@test.com", "token2", new Date(new Date().getTime() + 86400 * 1000), "01788878220", 4, 3, true, [], []),
    new User("3", "trial", "trial@test.com", "token3", new Date(new Date().getTime() + 86400 * 1000), "01961661284", 4.5, 2, true, [], []),
  ]

  constructor() { }

  getUsers() {
    return this.users.slice();
  }
  getUser(id: number) {
    return this.users.slice()[id];
  }
}
