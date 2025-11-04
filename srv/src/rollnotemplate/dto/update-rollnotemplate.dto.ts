import { PartialType } from '@nestjs/swagger';
import { CreateRollnotemplateDto } from './create-rollnotemplate.dto';

export class UpdateRollnotemplateDto extends PartialType(CreateRollnotemplateDto) {}
