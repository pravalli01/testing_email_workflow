import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRollnotemplateDto } from './dto/create-rollnotemplate.dto';
import { UpdateRollnotemplateDto } from './dto/update-rollnotemplate.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';
import { getDBURL } from 'src/configUtils';

@Injectable()
export class RollnotemplateService {
  constructor(
    public httpService: HttpService,
    public configService: ConfigService,
  ) { }
  async create(createRollnotemplateDto: CreateRollnotemplateDto, headers: any) {
    console.log(createRollnotemplateDto)
    const url = headers?.origin ? getDBURL(headers?.origin) : this.configService.get('DATABASE_URL');
    console.log(url)
    try {
      return await this.httpService
        .post(`${url}rollno_templates`, createRollnotemplateDto)
        .subscribe((res) => {
          console.log(res),
          (error) => { console.log(error) }
        })
    } catch (e) {
      throw new HttpException(
        'rollno_templates  data not found',
        HttpStatus.NOT_FOUND,
      );
    }

  }

  async findAll(headers: any) {
    const url = headers?.origin ? getDBURL(headers?.origin) : this.configService.get('DATABASE_URL');
    try {
      return await this.httpService
        .get(`${url}rollno_templates`)
        .pipe(map((response) => response.data));
    } catch (e) {
      throw new HttpException(
        'rollno_templates  data not found',
        HttpStatus.NOT_FOUND,
      );
    }

  }

  findOne(id: number) {
    return `This action returns a #${id} rollnotemplate`;
  }

  update(id: number, updateRollnotemplateDto: UpdateRollnotemplateDto) {
    return `This action updates a #${id} rollnotemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} rollnotemplate`;
  }
}
