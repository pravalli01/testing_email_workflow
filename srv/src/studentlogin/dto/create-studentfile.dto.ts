import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentDto {
   /*  @ApiProperty({ description: 'Post Rollnumber Parameter With id',required:false })
    rollno_format_id: number; */
    @ApiProperty({ description: 'student full_name' })
    full_name: string;
    @ApiProperty({ description: 'Post Rollnumber Parameter With rollno_format_description' })
    rollno_format_description: string;
    @ApiProperty({ description: 'Post Rollnumber Parameter With rollformat_attributes' })
    roll_format_attributes: object;
}

export class GetStudentrbcaDto {
    @ApiProperty({ description: 'RBCA from Student ID Parameter'})
     id: number;
 }

 export class GetStudentIDDto {
    @ApiProperty({ description: 'Student ID Parameter'})
    id: number;
 }
