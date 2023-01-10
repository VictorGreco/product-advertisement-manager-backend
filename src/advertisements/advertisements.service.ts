import { Injectable } from '@nestjs/common';
import { NewAdvertisementInput } from './dto/new-advertisement.input';
import { UpdateAdvertisementInput } from './dto/update-advertisement.input';
import { AdvertisementsArgs } from './dto/advertisements.args';
import { Advertisement } from './models/advertisement.model';

@Injectable()
export class AdvertisementsService {

  async create(data: NewAdvertisementInput): Promise<Advertisement> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Advertisement> {
    return {} as any;
  }

  async findAll(): Promise<Advertisement[]> {
    return [] as Advertisement[];
  }

  async update(id: string, data: UpdateAdvertisementInput): Promise<Advertisement> {
    return {} as any;
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}