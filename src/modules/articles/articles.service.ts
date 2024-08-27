/* eslint-disable prettier/prettier */
import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/core/schemas/articles.schema';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<Article>
  ) {}

  async getArticles() {
    return this.articleModel.find().exec();
  }

  async postArticle(body: Article) {
    const newArticle = new this.articleModel(body);
    return newArticle.save();
  }
}
