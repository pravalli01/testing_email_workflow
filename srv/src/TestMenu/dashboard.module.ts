import { Module } from '@nestjs/common';
import {DashboardService } from './dashboard.service';
import {  DashboardController } from './dashboard.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule,PicklistModule],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class PicklistModule {}
