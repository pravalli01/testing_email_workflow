import { Module } from '@nestjs/common';
import { RollnotemplateService } from './rollnotemplate.service';
import { RollnotemplateController } from './rollnotemplate.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule,RollnotemplateModule],
  controllers: [RollnotemplateController],
  providers: [RollnotemplateService]
})
export class RollnotemplateModule {}
