import { PartialType } from '@nestjs/swagger';
import { CreateStudentDto } from './create-studentfile.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {}