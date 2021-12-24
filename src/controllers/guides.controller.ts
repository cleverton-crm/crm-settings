import { Controller } from '@nestjs/common';
import { GuidesService } from '../services';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IGuides } from '../interfaces';

@Controller()
export class GuidesController {
  constructor(private readonly guidesService: GuidesService) {}

  @MessagePattern('setting:create')
  async set(@Payload() setting: IGuides.Schema): Promise<any> {
    return; //
  }

  @MessagePattern('setting:list')
  async list(@Payload() data: IGuides.Filter) {
    return; //
  }

  @MessagePattern('setting:get')
  async get(@Payload() data: IGuides.Filter): Promise<any> {
    return; //
  }

  @MessagePattern('setting:remove')
  async remove(@Payload() data: IGuides.Filter): Promise<any> {
    return; //
  }
}
