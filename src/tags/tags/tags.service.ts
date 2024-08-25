/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsService {
  tags = [
    {
      id: 1,
      name: 'tag1',
      description: 'Description for tag1',
    },
    {
      id: 2,
      name: 'tag2',
      description: 'Description for tag2',
    },
    {
      id: 3,
      name: 'tag3',
      description: 'Description for tag3',
    },
  ];
  getAllTags() {
    return this.tags;
  }
  getTagById(id: number) {
    return this.tags.find((t) => t.id === +id);
  }
  addTag(body) {
    this.tags.push(body);
    return this.tags;
  }
  updateTag(id, updatedTag) {
    const index = this.tags.findIndex((t) => t.id === +id);

    this.tags[index] = { ...this.tags[index], ...updatedTag };
    return this.tags[index];
  }
  deleteTag(id) {
    const index = this.tags.findIndex((t) => t.id === +id);
    this.tags.splice(index, 1);
    return this.tags;
  }
}
