/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './modules/articles/articles.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/nest-iti'),
    ArticlesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
