import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { QueueController } from './queue/queue.controller';

@Module({
  imports: [],
  controllers: [QueueController],
})
export class AppModule { }
