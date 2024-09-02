/* eslint-disable prettier/prettier */

import { IsMongoId, IsNumber, IsOptional, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export default class ArticleDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  content: string;

  @IsString()
  coverImg: string;

  @IsString()
  images: string;

  @IsNumber()
  likes: number;

  @IsString()
  tagList: string;

  @IsString()
  author: string;

  @IsMongoId()
  @IsOptional()
  authorId: string;
}

export class paramDTO {
  @IsMongoId()
  id: string;
}
