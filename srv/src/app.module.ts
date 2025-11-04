import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RollnotemplateModule } from './rollnotemplate/rollnotemplate.module';
import { PicklistModule } from './TestMenu/dashboard.module';
import { StudentLoginModule } from './studentlogin/studentlogin.module';
import { AppController } from './app.controller';  // Import the AppController

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RollnotemplateModule,
    PicklistModule,
    StudentLoginModule
  ],
  controllers: [AppController],  // Add the AppController to the controllers array
})
export class AppModule {}
