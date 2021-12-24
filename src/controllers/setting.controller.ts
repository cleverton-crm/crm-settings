import { Controller } from '@nestjs/common';
import { SettingService } from '../services';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Core } from 'crm-core';

@Controller()
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @MessagePattern('setting:set')
  async set(@Payload() options: Core.Settings.Schema): Promise<any> {
    return await this.settingService.set(options);
  }

  @MessagePattern('setting:list')
  async list(@Payload() data: Core.Settings.Filter) {
    return await this.settingService.list(data);
  }

  @MessagePattern('setting:get')
  async get(@Payload() data: Core.Settings.Filter): Promise<any> {
    return await this.settingService.get(data);
  }

  @MessagePattern('setting:remove')
  async remove(@Payload() data: Core.Settings.Filter): Promise<any> {
    return await this.settingService.remove(data);
  }
}
