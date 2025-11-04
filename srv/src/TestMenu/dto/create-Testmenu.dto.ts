import { ApiProperty } from "@nestjs/swagger";

// export class CreateTestmenuDto {
  
//     @ApiProperty({ description: 'Post picklist Parameter With description' })
//     description: string;
//     @ApiProperty({ description: 'Post picklist Parameter With custom_description' })
//     custom_description: string;
//     @ApiProperty({ description: 'Post picklist Parameter With lang_description' })
//     lang_description: string;
//     @ApiProperty({ description: 'Post picklist Parameter With created_time' })
//     created_time: string;
//     @ApiProperty({ description: 'Post picklist Parameter With created_user' })
//     created_user: object;
//     @ApiProperty({ description: 'Post picklist Parameter With last_modified_time' })
//     last_modified_time: string;
//     @ApiProperty({ description: 'Post picklist Parameter With last_modified_user' })
//     last_modified_user: string;
  


// }


export class TableDto {
    @ApiProperty({ description:'get by table record'} )
    Tablename: string;
}