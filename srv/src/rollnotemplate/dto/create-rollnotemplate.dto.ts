import { ApiProperty } from "@nestjs/swagger";

export class CreateRollnotemplateDto {
   /*  @ApiProperty({ description: 'Post Rollnumber Parameter With id',required:false })
    rollno_format_id: number; */
    @ApiProperty({ description: 'Post Rollnumber Parameter With rollno_format_name' })
    rollno_format_name: string;
    @ApiProperty({ description: 'Post Rollnumber Parameter With rollno_format_description' })
    rollno_format_description: string;
    @ApiProperty({ description: 'Post Rollnumber Parameter With rollformat_attributes' })
    roll_format_attributes: object;
}
