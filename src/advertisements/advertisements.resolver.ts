import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewAdvertisementInput } from './dto/new-advertisement.input';
import { UpdateAdvertisementInput } from './dto/update-advertisement.input';
import { AdvertisementGraphQLModel } from './models/advertisement.model';
import { AdvertisementsService } from './advertisements.service';

@Resolver(of => AdvertisementGraphQLModel)
export class AdvertisementsResolver {
  constructor(private readonly advertisementsService: AdvertisementsService) {}

  @Query(returns => AdvertisementGraphQLModel)
  async advertisement(@Args('id') id: string): Promise<AdvertisementGraphQLModel> {
    const advertisement = await this.advertisementsService.findOneById(id);

    if (!advertisement) {
      throw new NotFoundException(id);
    }

    return advertisement;
  }

  @Query(returns => [AdvertisementGraphQLModel])
  advertisements(): Promise<AdvertisementGraphQLModel[]> {

    return this.advertisementsService.findAll();
  }

  @Mutation(returns => AdvertisementGraphQLModel)
  async addAdvertisement(
    @Args('newAdvertisementData') newAdvertisementData: NewAdvertisementInput,
  ): Promise<AdvertisementGraphQLModel> {
    const advertisement = await this.advertisementsService.create(newAdvertisementData);

    return advertisement;
  }

  @Mutation(returns => Boolean)
  async updateAdvertisement(
    @Args('advertisementId') advertisementId: string,
    @Args('updateAdvertisementData') updateAdvertisementData: UpdateAdvertisementInput,
  ) {

    return this.advertisementsService.update(advertisementId, updateAdvertisementData);
  }

  @Mutation(returns => Boolean)
  async removeAdvertisement(@Args('id') id: string) {
    return this.advertisementsService.remove(id);
  }
}