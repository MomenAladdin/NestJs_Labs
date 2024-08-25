/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignUpService } from './sign-up.service';

@Controller('sign-up')
export class SignUpController {
  constructor(private readonly _signUpService: SignUpService) {}
  @Post()
  signUp(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const newUser = this._signUpService.signUp(username, password);

    return {
      user: newUser,
    };
  }
  @Get('all')
  getAllUsers() {
    return this._signUpService.getAllUsers();
  }
}
