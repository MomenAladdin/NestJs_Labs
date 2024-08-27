/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticlesSchema } from 'src/core/schemas/articles.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticlesSchema }])
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService]
})
export class ArticlesModule {}
