/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SignInController } from './signIn/sign-in.controller';
import { SignUpController } from './signUp/sign-up.controller';
import { SignInService } from './signIn/sign-in.service';
import { SignUpService } from './signUp/sign-up.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [SignInController, SignUpController],
  providers: [SignInService, SignUpService, JwtService]
})
export class AuthModule {}
