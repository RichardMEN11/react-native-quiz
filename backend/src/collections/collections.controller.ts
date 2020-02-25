import {
  Controller,
  Post,
  Get,
  Put,
  Body,
  Param,
  Logger,
} from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { Collection } from './Dto/collection.dto';

@Controller('collections')
export class CollectionsController {
  private logger = new Logger('QuestionController');

  constructor(private collectionService: CollectionsService) {}

  @Post()
  async addCollection(@Body() collection: Collection): Promise<Collection> {
    this.logger.verbose(
      `Creating a new collection: ${JSON.stringify(collection)}`,
    );
    return await this.collectionService.addCollection(collection);
  }

  @Get()
  async getCollections(): Promise<Collection> {
    return this.collectionService.getCollections();
  }
}
