import { Model } from 'mongoose';
import { AdvertisementDocument } from './schemas/advertisement.schema';
import { NewAdvertisementInput } from './dto/new-advertisement.input';
import { UpdateAdvertisementInput } from './dto/update-advertisement.input';
import { AdvertisementGraphQlModel } from './models/advertisement.model';
export declare class AdvertisementsService {
    private advertisementModel;
    constructor(advertisementModel: Model<AdvertisementDocument>);
    create(data: NewAdvertisementInput): Promise<AdvertisementGraphQlModel>;
    findOneById(id: string): Promise<AdvertisementGraphQlModel>;
    findAll(): Promise<AdvertisementGraphQlModel[]>;
    update(id: any, data: UpdateAdvertisementInput): Promise<boolean>;
    remove(id: string): Promise<boolean>;
}
