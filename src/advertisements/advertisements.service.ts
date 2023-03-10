import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Advertisement, AdvertisementDocument } from './schemas/advertisement.schema';
import { NewAdvertisementInput } from './dto/new-advertisement.input';
import { UpdateAdvertisementInput } from './dto/update-advertisement.input';
import { AdvertisementGraphQLModel } from './models/advertisement.model';

@Injectable()
export class AdvertisementsService {
  constructor(@InjectModel(Advertisement.name) private advertisementModel: Model<AdvertisementDocument>) {}

  async create(data: NewAdvertisementInput): Promise<AdvertisementGraphQLModel> {
    const createAdvertisement = new this.advertisementModel(data);

    return createAdvertisement.save();
  }

  async findOneById(id: string): Promise<AdvertisementGraphQLModel> {

    return this.advertisementModel.findById(id).exec();
  }

  async findAll(): Promise<AdvertisementGraphQLModel[]> {

    console.log(await this.advertisementModel.find().exec());
    return this.advertisementModel.find().exec();
  }

  async update(id: any, data: UpdateAdvertisementInput): Promise<boolean> {
    await this.advertisementModel.updateOne({ id }, data);
  
    return true;
  }

  async remove(id: string): Promise<boolean> {
    await this.advertisementModel.deleteOne({ id });

    return true;
  }
}