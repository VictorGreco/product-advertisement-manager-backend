import { NewAdvertisementInput } from './dto/new-advertisement.input';
import { UpdateAdvertisementInput } from './dto/update-advertisement.input';
import { AdvertisementGraphQLModel } from './models/advertisement.model';
import { AdvertisementsService } from './advertisements.service';
export declare class AdvertisementsResolver {
    private readonly advertisementsService;
    constructor(advertisementsService: AdvertisementsService);
    advertisement(id: string): Promise<AdvertisementGraphQLModel>;
    advertisements(): Promise<AdvertisementGraphQLModel[]>;
    addAdvertisement(newAdvertisementData: NewAdvertisementInput): Promise<AdvertisementGraphQLModel>;
    updateAdvertisement(advertisementId: string, updateAdvertisementData: UpdateAdvertisementInput): Promise<boolean>;
    removeAdvertisement(id: string): Promise<boolean>;
}
