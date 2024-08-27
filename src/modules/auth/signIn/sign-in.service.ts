/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInDTO } from '../dto/aut.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignInService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private _jwtService: JwtService
  ) {}
  async signIn(body: SignInDTO) {
    const loggedUser = await this.userModel.findOne({ email: body.email });

    if (
      loggedUser &&
      (await bcrypt.compare(body.password, loggedUser.password))
    ) {
      let userToken = this._jwtService.sign(
        {
          name: loggedUser.name,
          email: loggedUser.email
        },
        { secret: 'secretKey' }
      );
      return { message: 'Welcome', token: userToken };
    } else {
      throw new HttpException(
        'You should SignUp First',
        HttpStatus.BAD_REQUEST
      );
    }
  }
}
