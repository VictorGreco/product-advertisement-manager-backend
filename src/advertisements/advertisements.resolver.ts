import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewAdvertisementInput } from './dto/new-advertisement.input';
import { UpdateAdvertisementInput } from './dto/update-advertisement.input';
import { Advertisement } from './models/advertisement.model';
import { AdvertisementsService } from './advertisements.service';

@Resolver(of => Advertisement)
export class AdvertisementsResolver {
  constructor(private readonly advertisementsService: AdvertisementService) {}

  @Query(returns => Advertisement)
  async advertisement(@Args('id') id: string): Promise<Advertisement> {
    const advertisement = await this.advertisementsService.findOneById(id);

    if (!advertisement) {
      throw new NotFoundException(id);
    }

    return advertisement;
  }

  @Query(returns => [Advertisement])
  advertisements(): Promise<Advertisement[]> {

    return this.advertisementsService.findAll();
  }

  @Mutation(returns => Advertisement)
  async addAdvertisement(
    @Args('newAdvertisementData') newAdvertisementData: NewAdvertisementInput,
  ): Promise<Advertisement> {
    const advertisement = await this.advertisementService.create(newAdvertisementData);

    return advertisement;
  }

  @Mutation(returns => Advertisement)
  async updateAdvertisement(
    @Args('advertisementId') advertisementId: string,
    @Args('updateAdvertisementData') updateAdvertisementData: UpdateAdvertisementInput,
  ): Promise<Advertisement> {
    const advertisement = await this.advertisementService.update(advertisementId, updateAdvertisementData);

    return advertisement;
  }

  @Mutation(returns => Boolean)
  async removeAdvertisement(@Args('id') id: string) {
    return this.advertisementService.remove(id);
  }
}