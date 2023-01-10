import { Directive, Int, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'advertisement' })
export class Advertisement {
  @Field(type => ID)
  id: string;

  @Field(type => Int)
  product_id: number;

  @Directive('@upper')
  title: string;

  @Field()
  valid_until: Date;

  @Field(type => Int)
  discount_percentage: number;
}