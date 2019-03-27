import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaveRequestController } from './leaveRequest/leaveRequest.controller';

@Module({
  imports: [],
  controllers: [AppController, LeaveRequestController],
  providers: [AppService],
})
export class AppModule { }
