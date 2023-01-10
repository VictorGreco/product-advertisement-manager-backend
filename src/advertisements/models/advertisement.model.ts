import { Directive, Int, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'advertisement' })
export class AdvertisementGraphQLModel {

  @Field(type => ID)
  _id: any;

  @Field(type => Int)
  product_id: number;

  @Directive('@upper')
  title: string;

  @Field()
  valid_until: Date;

  @Field(type => Int)
  discount_percentage: number;
}