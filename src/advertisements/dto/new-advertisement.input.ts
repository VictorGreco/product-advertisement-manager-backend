import { Field, Int, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class NewAdvertisementInput {
  @Field(type => Int)
  product_id: number;

  @Field()
  @MaxLength(30)
  title: string;

  @Field()
  valid_until: Date;

  @Field(type => Int)
  discount_percentage: number;
}