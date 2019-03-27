import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('queue')
export class QueueController {
    @EventPattern('create_queue')
    public async queueMoneyTransfer(data: string) {
        console.log("create_queue run ========================================>")
        return 'queue created';
    }
}
