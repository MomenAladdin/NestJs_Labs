/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO } from '../dto/aut.dto';
import { SignInService } from './sign-in.service';

@Controller('sign-in')
export class SignInController {
  constructor(private _signInService: SignInService) {}
  @Post()
  signIn(@Body() body: SignInDTO) {
    return this._signInService.signIn(body);
  }
}
