import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Collection } from './Dto/collection.dto';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectModel('Collection')
    private readonly collectionModel: Model<Collection>,
  ) {}

  async addCollection(collection: Collection): Promise<Collection> {
    const createdCollection = new this.collectionModel(collection);
    return await createdCollection.save();
  }

  async getCollections(): Promise<Collection> {
    return this.collectionModel.find();
  }
}
