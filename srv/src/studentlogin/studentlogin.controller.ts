import { Controller, Get, Post, Body, Patch, Param, Delete,Query, Headers } from '@nestjs/common';
import { StudentService } from './studentlogin.service';
import { CreateStudentDto,GetStudentrbcaDto, GetStudentIDDto } from './dto/create-studentfile.dto';
// import { UpdateStudentDto } from './dto/update-studentfile.dto';

@Controller('studentlogin')
export class SudentLoginController {
  constructor(private readonly StudentService: StudentService) {}

  @Post()
  create(@Body() CreateStudentDto: CreateStudentDto, @Headers() headers: Headers) {
    return this.StudentService.create(CreateStudentDto, headers);
  }

  @Get()
  findAll(@Headers() headers: Headers) {
    return this.StudentService.findAll(headers);
  }

  @Get('dataprivacy')
  getdataprivacy(@Headers() headers: Headers) {
    return this.StudentService.getdataprivacy(headers);
  }

  @Get('screenslocalization')
  getscreenslocalization(@Headers() headers: Headers) {
    return this.StudentService.getscreenslocalization(headers);
  }

  @Get('confignotification')
  getconfignotification(@Headers() headers: Headers) {
    return this.StudentService.getconfignotification(headers);
  }

  @Get(':rbacid')
  getrbacmenu(@Query('id') GetStudentrbcaDto:GetStudentrbcaDto, @Headers() headers: Headers) {
    return this.StudentService.getrbacmenu(GetStudentrbcaDto, headers);
  }

  @Get('studentdata')
  getStudentByID(@Query('stdid') GetStudentIDDto:GetStudentIDDto, @Headers() headers: Headers) {
    return this.StudentService.getStudentByID(GetStudentIDDto, headers);
  }
  
}
