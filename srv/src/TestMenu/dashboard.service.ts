import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TableDto } from './dto/create-Testmenu.dto';
// import { UpdateTestmenuDto } from './dto/update-testmenu.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
// import FormData from 'form-data'


import { map } from 'rxjs';
import { getDBURL } from 'src/configUtils';

@Injectable()
export class DashboardService {
  constructor(
    public httpService: HttpService,
    public configService: ConfigService,
  ) { }
  async create(getpicklistDto: TableDto, headers: any) {
    console.log(getpicklistDto)
    const url = headers?.origin ? getDBURL(headers?.origin) : this.configService.get('DATABASE_URL');
    console.log(url)
    try {
      return await this.httpService
        .post(`${url}picklist_title`, getpicklistDto)
        .subscribe((res) => {
          console.log(res),
            (error) => { console.log(error) }
        })
    } catch (e) {
      throw new HttpException(
        'picklist  data not found',
        HttpStatus.NOT_FOUND,
      );
    }

  }


  async getpicklist(Tablename: TableDto, headers: any) {
    const url = headers?.origin ? getDBURL(headers?.origin) : this.configService.get('DATABASE_URL');
    try {
      return await this.httpService
        .get(`${url}${Tablename}`)
        .pipe(map((response) => response.data));
    } catch (e) {
      throw new HttpException(
        'picklist  data not found',
        HttpStatus.NOT_FOUND,
      );
    }
  }


  getparent(): object {
    return {
      "tiles": [
        {
          "label": "Notifications",
          "count": "20",
          "icon": "Bellicon",
          "color": "red"
        },
        {
          "label": "Total Kids",
          "count": "2",
          "icon": "personicon",
          "color": "red"
        },
        {
          "label": "Total Classes",
          "count": "87",
          "icon": "percentageicon",
          "color": "yellow"
        }
      ]
    }
  }

  getstudent(): object {
    return {
      "tiles": [
        {
          "label": "Notifications",
          "count": "10",
          "icon": "Bellicon",
          "color": "red"
        },
        {
          "label": "Attendencs",
          "count": "1",
          "icon": "personicon",
          "color": "yellow"
        },
        {
          "label": "Events",
          "count": "1",
          "icon": "calendericon",
          "color": "green"
        },
        {
          "label": "Assessments",
          "count": "1",
          "icon": "bookicon",
          "color": "green"
        }
      ],

      "table": {
        name: ['All Exam Results'],
        columns: ['ID,Exam Name,Subject,Grade,Date'],
       
      },
      "notifications": {
        "key": "value"
      }
    }
  }


  getteacher(): object {
    return {
      "tiles": [
        {
          "label": "Notifications",
          "count": "20",
          "icon": "Bellicon",
          "color": "red"
        },
        {
          "label": "Total Students",
          "count": "714",
          "icon": "papericon",
          "color": "red"
        },
        {
          "label": "Total Classes",
          "count": "87",
          "icon": "percentageicon",
          "color": "yellow"
        },
        {
          "label": "Graduate Student",
          "count": "2396",
          "icon": "graduateicon",
          "color": "green"
        }
      ],
      "table": {
        name: ['My Class List'],
        columns: ['Roll Number,Name,Class,Section'],
      },
      "notifications": {
        "key": "value"
      }
    }
  }

}
