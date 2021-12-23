import { Injectable } from '@nestjs/common';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SettingService {
  //private readonly companyModel: CompanyModel<Companies>;

  constructor(
    @InjectConnection() private connection: Connection,
    private jwtService: JwtService,
  ) {
    // this.companyModel = this.connection.model(
    //   'Companies',) as CompanyModel<Companies>;
  }
}
