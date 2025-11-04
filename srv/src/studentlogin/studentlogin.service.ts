import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStudentDto, GetStudentrbcaDto ,GetStudentIDDto} from './dto/create-studentfile.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';
import { getDBURL } from 'src/configUtils';

@Injectable()
export class StudentService {
  constructor(
    public httpService: HttpService,
    public configService: ConfigService,
  ) { }
  async create(CreatestudentDto: CreateStudentDto, headers: any) {
    console.log(CreatestudentDto)
    const url = headers?.origin ? getDBURL(headers?.origin) : this.configService.get('DATABASE_URL');
    console.log(url)
    try {
      return await this.httpService
        .post(`${url}student`, CreatestudentDto)
        .subscribe((res) => {
          console.log(res),
          (error) => { console.log(error) }
        })
    } catch (e) {
      throw new HttpException(
        'student data not found',
        HttpStatus.NOT_FOUND,
      );
    }

  }

  async findAll(headers: any) {
    const url = headers?.origin ? getDBURL(headers?.origin) : this.configService.get('DATABASE_URL');
    console.log(url)
    try {
      return await this.httpService
        .get(`${url}student`)
        .pipe(map((response) => response.data));
    } catch (e) {
      throw new HttpException(
        'student  data not found',
        HttpStatus.NOT_FOUND,
      );
    }

  }

  
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

  async getconfignotification(headers: any) {
    const url = headers?.origin ? getDBURL(headers?.origin) : this.configService.get('DATABASE_URL');
    console.log(url)
    try {
      return await this.httpService
        .get(`${url}config_notification`)
        .pipe(map((response) => response.data));
    } catch (e) {
      throw new HttpException(
        'config_notification data not found',
        HttpStatus.NOT_FOUND,
      );
    }

  };

  async getrbacmenu(id: GetStudentrbcaDto, headers: any) {
    const url = headers?.origin ? getDBURL(headers?.origin) : this.configService.get('DATABASE_URL');
    console.log("id", id)
    try {
      return await this.httpService
        .get(`${url}rpc/rbac_get_menu?in_user_id=${id}`)
        .pipe(map((response) => response.data));
    } catch (e) {
      throw new HttpException(
        'rbac_get_menu data not found',
        HttpStatus.NOT_FOUND,
      );
    }

  };
  async getStudentByID(stdid: GetStudentIDDto, headers: any) {
    const url = headers?.origin ? getDBURL(headers?.origin) : this.configService.get('DATABASE_URL');
    console.log("stdid", stdid)
    try {
      return await this.httpService
        .get(`${url}student?select=*&id=eq.${stdid}`)
        .pipe(map((response) => response.data));
    } catch (e) {
      throw new HttpException(
        'student data not found',
        HttpStatus.NOT_FOUND,
      );
    }

  };
  
  
}
