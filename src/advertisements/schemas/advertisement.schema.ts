import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdvertisementDocument = HydratedDocument<Advertisement>;

@Schema()
export class Advertisement {
  @Prop({ required: true })
  product_id: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  valid_until: Date;

  @Prop({ required: true })
  discount_percentage: number;
}

export const AdvertisementSchema = SchemaFactory.createForClass(Advertisement);