import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import {
  JwtConfigService,
  MongoConfigService,
  SettingService,
} from './services';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
import { GuidesProviderSchema, SettingProviderSchema } from './providers';
import { SettingController } from './controllers';

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
    MongooseModule.forFeatureAsync([
      SettingProviderSchema,
      GuidesProviderSchema,
    ]),
  ],
  controllers: [SettingController],
  providers: [ConfigService, SettingService],
  exports: [ConfigService],
})
export class AppModule {}
