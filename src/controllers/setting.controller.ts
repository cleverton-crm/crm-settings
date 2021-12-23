import { Controller, Get } from '@nestjs/common';
import { SettingService } from '../services/setting.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Setting } from '../interfaces/setting.interface';

@Controller()
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @MessagePattern('setting:create')
  async set(@Payload() setting: Setting.Schema): Promise<any> {
    return; //
  }

  @MessagePattern('setting:list')
  async list(@Payload() data: Setting.Filter) {
    return; //
  }

  @MessagePattern('setting:get')
  async get(@Payload() data: Setting.Filter): Promise<any> {
    return; //
  }

  @MessagePattern('setting:remove')
  async remove(@Payload() data: Setting.Filter): Promise<any> {
    return; //
  }
}
