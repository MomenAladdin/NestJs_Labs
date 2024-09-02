/* eslint-disable prettier/prettier */
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';

/* eslint-disable prettier/prettier */
export class SignUpDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;
}
export class SignInDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
