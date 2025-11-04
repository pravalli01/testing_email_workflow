import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';
import { getDBURL } from 'src/configUtils';

@Injectable()
export class GeneralDataService {
  constructor(
    public httpService: HttpService,
    public configService: ConfigService,
  ) { }

  async getdataprivacy(headers: any) {
    const url = headers?.origin ? getDBURL(headers?.origin) : this.configService.get('DATABASE_URL');
    console.log(url)
    try {
      return await this.httpService
        .get(`${url}data_privacy`)
        .pipe(map((response) => response.data));
    } catch (e) {
      throw new HttpException(
        'data_privacy data not found',
        HttpStatus.NOT_FOUND,
      );
    }

  }

  async getscreenslocalization(headers: any) {
    const url = headers?.origin ? getDBURL(headers?.origin) : this.configService.get('DATABASE_URL');
    console.log(url)
    try {
      return await this.httpService
        .get(`${url}screens_localization`)
        .pipe(map((response) => response.data));
    } catch (e) {
      throw new HttpException(
        'screens_localization data not found',
        HttpStatus.NOT_FOUND,
      );
    }

  }
}
