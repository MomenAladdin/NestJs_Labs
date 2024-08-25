/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class SignUpService {
  users = [
    {
      username: 'Moamen Aladdin',
      password: '123',
    },
    {
      username: 'mohamed adel',
      password: '124',
    },
  ];
  signUp(username: string, password: string) {
    const existingUser = this.users.find((user) => user.username === username);
    console.log(existingUser);

    if (existingUser) {
      return 'User already exists';
    }

    // Create new user
    const newUser = { username, password };
    this.users.push(newUser);
    return newUser;
  }

  getAllUsers() {
    return this.users;
  }
}
