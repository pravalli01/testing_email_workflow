import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { RollnotemplateService } from './rollnotemplate.service';
import { CreateRollnotemplateDto } from './dto/create-rollnotemplate.dto';
import { UpdateRollnotemplateDto } from './dto/update-rollnotemplate.dto';

@Controller('rollnotemplate')
export class RollnotemplateController {
  constructor(private readonly rollnotemplateService: RollnotemplateService) {}

  @Post()
  create(@Body() createRollnotemplateDto: CreateRollnotemplateDto, @Headers() headers: Headers) {
    return this.rollnotemplateService.create(createRollnotemplateDto, headers);
  }

  @Get()
  findAll(@Headers() headers: Headers) {
    return this.rollnotemplateService.findAll(headers);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rollnotemplateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRollnotemplateDto: UpdateRollnotemplateDto) {
    return this.rollnotemplateService.update(+id, updateRollnotemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rollnotemplateService.remove(+id);
  }
}
