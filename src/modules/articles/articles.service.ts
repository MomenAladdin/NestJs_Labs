/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/core/schemas/articles.schema';
import ArticleDTO from './dto/article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<Article>
  ) {}

  async getArticles() {
    const allArticles = await this.articleModel.find();
    return { message: 'done', allArticles };
  }

  async postArticle(body: ArticleDTO) {
    const newArticle = await this.articleModel.insertMany(body);
    return { message: 'article added successfully', newArticle };
  }
  async updateArticle(body: ArticleDTO, id: string) {
    const updatedArticle = await this.articleModel.findByIdAndUpdate(id, body, {
      new: true
    });
    return { message: 'article updated successfully', updatedArticle };
  }

  async deleteArticle(id: string) {
    const deletedArticle = await this.articleModel.findByIdAndDelete(id);
    return { message: 'article deleted successfully', deletedArticle };
  }
}
