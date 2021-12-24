import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Setting } from '../schemas';
import { Core } from 'crm-core';

@Injectable()
export class SettingService {
  private readonly settingModel: Model<Setting>;

  constructor(
    @InjectConnection() private connection: Connection,
    private jwtService: JwtService,
  ) {
    this.settingModel = this.connection.model('Setting');
  }

  async set(options: Core.Settings.Schema) {
    try {
      const settingData = await this.settingModel.create(options);
      return settingData
        ? Core.ResponseDataAsync('Создана новая настройка', settingData)
        : Core.ResponseDataAsync(
            'Сохранена новая запись в настройках',
            settingData,
            HttpStatus.NOT_FOUND,
            true,
            'Not Found',
          );
    } catch (e) {
      return Core.ResponseError(
        'Попытка создать дубликат',
        HttpStatus.BAD_REQUEST,
        e.message,
      );
    }
  }

  async list(data: Core.Settings.Filter) {
    let result;
    let filter = {};
    filter = data.type
      ? (filter = Object.assign({}, { type: data.type }))
      : filter;
    filter = data.object
      ? (filter = Object.assign({}, { object: data.object }))
      : filter;

    try {
      const setting = await this.settingModel.find(filter).exec();
      result = setting
        ? Core.ResponseDataAsync('Найдено записей', setting)
        : Core.ResponseDataAsync(
            'Запись не найдена',
            setting,
            HttpStatus.NOT_FOUND,
            true,
            'Not Found',
          );
    } catch (e) {
      result = {
        statusCode: HttpStatus.NOT_FOUND,
        message: e.message,
        errors: 'Not Found',
      };
    }
    console.log(result);
    return result;
  }

  async get(data: Core.Settings.Filter) {
    let result,
      filter = {};
    filter = data.name
      ? (filter = Object.assign({}, { name: data.name }))
      : filter;
    filter = data.type
      ? (filter = Object.assign({}, { type: data.type }))
      : filter;
    filter = data.object
      ? (filter = Object.assign({}, { object: data.object }))
      : filter;
    filter = data.property
      ? (filter = Object.assign({}, { property: data.property }))
      : filter;

    try {
      if (!Object.keys(filter).length) {
        throw new Error('Не указан не один параметр для поиска!');
      }
      const setting = await this.settingModel.findOne(filter).exec();
      result = setting
        ? Core.ResponseDataAsync('Найдена запись', setting)
        : Core.ResponseDataAsync(
            'Запись не найдена',
            setting,
            HttpStatus.NOT_FOUND,
            true,
            'Not Found',
          );
    } catch (e) {
      result = {
        statusCode: HttpStatus.NOT_FOUND,
        message: e.message,
        errors: 'Not Found',
      };
    }
    console.log(result);
    return result;
  }

  async remove(data: Core.Settings.Filter) {}
}
