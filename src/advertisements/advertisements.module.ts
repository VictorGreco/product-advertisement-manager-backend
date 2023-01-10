import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { AdvertisementsResolver } from './advertisements.resolver';
import { AdvertisementsService } from './advertisements.service';

@Module({
  providers: [AdvertisementsResolver, AdvertisementsService, DateScalar],
})
export class AdvertisementsModule {}