import { Model } from 'mongoose';
import { AdvertisementDocument } from './schemas/advertisement.schema';
import { NewAdvertisementInput } from './dto/new-advertisement.input';
import { UpdateAdvertisementInput } from './dto/update-advertisement.input';
import { AdvertisementGraphQLModel } from './models/advertisement.model';
export declare class AdvertisementsService {
    private advertisementModel;
    constructor(advertisementModel: Model<AdvertisementDocument>);
    create(data: NewAdvertisementInput): Promise<AdvertisementGraphQLModel>;
    findOneById(id: string): Promise<AdvertisementGraphQLModel>;
    findAll(): Promise<AdvertisementGraphQLModel[]>;
    update(id: any, data: UpdateAdvertisementInput): Promise<boolean>;
    remove(id: string): Promise<boolean>;
}
