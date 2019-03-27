import { Controller, Get } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || 6379;


@Controller('leave-request')
export class LeaveRequestController {

    count: number = 0;

    @Client({
        transport: Transport.REDIS,
        options: { url: `redis://${REDIS_HOST}:${REDIS_PORT}` }
    })
    client: ClientProxy;

    @Get()
    async findAll(): Promise<string> {
        this.count++;
        console.log("Leave Request recieved " + this.count)
        console.log("emitted: ", await this.client.emit<number>('create_queue', ''));
        return 'Leave Request success ' + this.count;
    }
}