import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Advertisement, AdvertisementSchema } from './schemas/advertisement.schema';
import { DateScalar } from '../common/scalars/date.scalar';
import { AdvertisementsResolver } from './advertisements.resolver';
import { AdvertisementsService } from './advertisements.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [AdvertisementsResolver, AdvertisementsService, DateScalar],
})
export class AdvertisementsModule {}