import { Controller, Get, Post, Body, Patch, Param, Delete,Query, Headers } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { TableDto } from './dto/create-Testmenu.dto';


@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}


  @Get('parentdashboard')
  getparent():object{
    return this.dashboardService.getparent();
}


@Get('studentdashboard')
getstudent():object{
  return this.dashboardService.getstudent();
}
  

@Get('teacherdashboard')
getteacher():object{
  return this.dashboardService.getteacher();
}

  // @Get()
  // picklistall(@Param('picklist_title1') picklist_title1:getpicklistDto) {
  //   return this.picklistService.picklistall(picklist_title1);
  // }
  
  // @Get()
  // picklistall() {
  //   return this.picklistService.picklistall(picklist_tablename);
  // }
  // @Get()
  // findone() {
  //   return this.testmenuService.findone();
  // }

  @Get(':tabledata')
  getpicklist(@Query('Tablename') Tablename:TableDto, @Headers() headers: Headers) {
    return this.dashboardService.getpicklist(Tablename, headers);
  }
  
  // @Get(':picklist_tablename')
  // findone(@Param('picklist_tablename') picklist_tablename: string) {
  //   return this.dashboardService.getpicklistone(+picklist_tablename);
  // }

  
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTestmenuDto: UpdateTestmenuDto) {
  //   return this.picklistService.update(+id, updateTestmenuDto);
  // }


  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.picklistService.remove(+id);
  // }

  
 
}
