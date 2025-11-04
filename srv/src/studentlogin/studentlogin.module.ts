import { Module } from '@nestjs/common';
import { StudentService } from './studentlogin.service';
import { SudentLoginController } from './studentlogin.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule,StudentLoginModule],
  controllers: [SudentLoginController],
  providers: [StudentService]
})
export class StudentLoginModule {}
