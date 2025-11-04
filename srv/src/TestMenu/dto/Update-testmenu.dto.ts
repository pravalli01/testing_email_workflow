import { PartialType } from '@nestjs/swagger';
import {TableDto } from './create-Testmenu.dto';
// import { CreateTestmenuDto } from './create-Testmenu.dto';


export class UpdateTestmenuDto extends PartialType(TableDto) {}
