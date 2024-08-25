/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class SignInService {
  private users = [{ username: 'user1', password: '123' }];
  signIn(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );
    return user;
  }
}
