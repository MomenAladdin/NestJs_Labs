/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from 'src/core/schemas/articles.schema';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async getArticles() {
    return this.articlesService.getArticles();
  }

  @Post()
  async postArticle(@Body() body: Article) {
    return this.articlesService.postArticle(body);
  }
}
