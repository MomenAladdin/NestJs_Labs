/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private _tagsService: TagsService) {}
  @Get()
  getTags() {
    return this._tagsService.getAllTags();
  }
  @Get('/:id')
  getTag(@Param('id') id: number) {
    return this._tagsService.getTagById(id);
  }
  @Post()
  addTag(@Body() body: any) {
    return this._tagsService.addTag(body);
  }
  @Patch('/:id')
  updateTag(@Param('id') id: number, @Body() tag) {
    const updatedTag = this._tagsService.updateTag(id, tag);
    console.log(updatedTag);

    return this._tagsService.getAllTags();
  }

  @Delete('/:id')
  removeTag(@Param('id') id: number) {
    return this._tagsService.deleteTag(id);
  }
}
