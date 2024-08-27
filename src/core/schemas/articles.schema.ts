/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';

@Schema({ versionKey: false, timestamps: true })
export class Article {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  coverImg: string;

  @Prop({ required: true })
  images: string;

  @Prop({ required: true })
  likes: number;

  @Prop({ required: true })
  tagList: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;
}

export const ArticlesSchema = SchemaFactory.createForClass(Article);
