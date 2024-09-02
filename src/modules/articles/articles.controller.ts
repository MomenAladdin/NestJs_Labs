/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import ArticleDTO, { paramDTO } from './dto/article.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('articles')
@UseGuards(AuthGuard)
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async getArticles() {
    return this.articlesService.getArticles();
  }

  @Post()
  async postArticle(@Body() body: ArticleDTO, @Req() req: any) {
    body.authorId = req['authorId'];
    return this.articlesService.postArticle(body);
  }

  @Put(':id')
  updateArticle(@Body() body: ArticleDTO, @Param() param: paramDTO) {
    return this.articlesService.updateArticle(body, param.id);
  }

  @Delete(':id')
  deleteArticle(@Param() param: paramDTO) {
    return this.articlesService.deleteArticle(param.id);
  }
}

// test article data
// {
//   "title": "article 2",
//   "coverImg": "jkjkj.jpg",
//   "tagList":"tags",
//   "description": "descript article 1",
//   "content": "about article 1 , hi content",
//   "images": "articleksadf.jpg",
//   "likes": 50,
//   "author": "moamenAladdin"

// }
