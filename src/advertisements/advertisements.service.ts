import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Advertisement, AdvertisementDocument } from './schemas/advertisement.schema';
import { NewAdvertisementInput } from './dto/new-advertisement.input';
import { UpdateAdvertisementInput } from './dto/update-advertisement.input';
import { Advertisement } from './models/advertisement.model';

@Injectable()
export class AdvertisementsService {
  constructor(@InjectModel(Advertisement.name) private advertisementModel: Model<AdvertisementDocument>) {}

  async create(data: NewAdvertisementInput): Promise<Advertisement> {
    const createAdvertisement = new this.advertisementModel(data);

    return createAdvertisement.save();
  }

  async findOneById(id: string): Promise<Advertisement> {

    return this.advertisementModel.findOneById(id).exec();
  }

  async findAll(): Promise<Advertisement[]> {

    return this.advertisementModel.find().exec();
  }

  async update(id: string, data: UpdateAdvertisementInput): Promise<Advertisement> {
    return this.advertisementModel.findOneAndUpdate(id, data);
  }

  async remove(id: string): Promise<boolean> {
    await this.advertisementModel.deleteOne(id);

    return true;
  }
}