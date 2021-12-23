import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtConfigService } from './services/jwt.services';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigService } from './services/mongo.service';

import { ConfigService } from './config/config.service';
import { SettingController } from './controllers/setting.controller';
import { SettingService } from './services/setting.service';
import { SettingProviderSchema } from './providers/setting.provider';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    MongooseModule.forFeatureAsync([SettingProviderSchema]),
  ],
  controllers: [SettingController],
  providers: [ConfigService, SettingService],
  exports: [ConfigService],
})
export class AppModule {}
