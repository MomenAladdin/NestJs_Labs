/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignUpDTO } from '../dto/aut.dto';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignUpService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async signUp(body: SignUpDTO) {
    const user = await this.userModel.findOne({ email: body.email });
    if (user) {
      throw new HttpException('user already registerd', HttpStatus.CONFLICT);
    }

    body.password = await bcrypt.hash(body.password, 8);
    const newUser = await this.userModel.insertMany(body);
    return { message: 'successfully Registered', newUser };
  }
}
