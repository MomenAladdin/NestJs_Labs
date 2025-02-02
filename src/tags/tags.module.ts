import { Module } from '@nestjs/common';
import { TagsController } from './tags/tags.controller';
import { TagsService } from './tags/tags.service';

@Module({
  imports: [],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
