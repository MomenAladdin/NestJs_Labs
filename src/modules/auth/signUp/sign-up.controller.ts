/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { SignUpDTO } from '../dto/aut.dto';

@Controller('sign-up')
export class SignUpController {
  constructor(private _signUpService: SignUpService) {}
  @Post()
  signUp(@Body() body: SignUpDTO) {
    return this._signUpService.signUp(body);
  }
}
