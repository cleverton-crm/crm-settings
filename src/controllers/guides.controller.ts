import { Controller } from '@nestjs/common';
import { GuidesService } from '../services/guides.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Guides } from '../interfaces/guides.interface';

@Controller()
export class GuidesController {
  constructor(private readonly guidesService: GuidesService) {}

  @MessagePattern('setting:create')
  async set(@Payload() setting: Guides.Schema): Promise<any> {
    return; //
  }

  @MessagePattern('setting:list')
  async list(@Payload() data: Guides.Filter) {
    return; //
  }

  @MessagePattern('setting:get')
  async get(@Payload() data: Guides.Filter): Promise<any> {
    return; //
  }

  @MessagePattern('setting:remove')
  async remove(@Payload() data: Guides.Filter): Promise<any> {
    return; //
  }
}
