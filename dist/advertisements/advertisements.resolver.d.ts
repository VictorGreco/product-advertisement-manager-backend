import { NewAdvertisementInput } from './dto/new-advertisement.input';
import { UpdateAdvertisementInput } from './dto/update-advertisement.input';
import { AdvertisementGraphQlModel } from './models/advertisement.model';
import { AdvertisementsService } from './advertisements.service';
export declare class AdvertisementsResolver {
    private readonly advertisementsService;
    constructor(advertisementsService: AdvertisementsService);
    advertisement(id: string): Promise<AdvertisementGraphQlModel>;
    advertisements(): Promise<AdvertisementGraphQlModel[]>;
    addAdvertisement(newAdvertisementData: NewAdvertisementInput): Promise<AdvertisementGraphQlModel>;
    updateAdvertisement(advertisementId: string, updateAdvertisementData: UpdateAdvertisementInput): Promise<boolean>;
    removeAdvertisement(id: string): Promise<boolean>;
}
