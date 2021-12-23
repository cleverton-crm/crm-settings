import { Controller, Get } from '@nestjs/common';
import { SettingService } from '../services/setting.service';

@Controller()
export class SettingController {
  constructor(private readonly appService: SettingService) {}

  @Get()
  getHello(): string {
    return; //
  }
}
