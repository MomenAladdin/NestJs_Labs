/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { SignInService } from './sign-in.service';

@Controller('sign-in')
export class SignInController {
  constructor(private readonly _signInService: SignInService) {}

  @Post()
  signIn(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const user = this._signInService.signIn(username, password);
    if (!user) {
      return {
        message: 'Invalid username or password',
      };
    }

    return {
      message: 'Sign-in successful',
      user,
    };
  }
}
