import { Types } from 'mongoose';
export declare class AdvertisementGraphQLModel {
    _id: Types.ObjectId;
    product_id: number;
    title: string;
    valid_until: Date;
    discount_percentage: number;
}
