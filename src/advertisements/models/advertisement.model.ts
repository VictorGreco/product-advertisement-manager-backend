import { Directive, Int, Field, ID, ObjectType } from '@nestjs/graphql';
import { ObjectId, Types } from 'mongoose';

@ObjectType({ description: 'advertisement' })
export class AdvertisementGraphQLModel {

  @Field()
  _id: Types.ObjectId;

  @Field(type => Int)
  product_id: number;

  @Directive('@upper')
  title: string;

  @Field()
  valid_until: Date;

  @Field(type => Int)
  discount_percentage: number;
}