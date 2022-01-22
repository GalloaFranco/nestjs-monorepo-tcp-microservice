import { Module } from '@nestjs/common';
import { MicroserviceTcpController } from './microservice-tcp.controller';
import { MicroserviceTcpService } from './microservice-tcp.service';

@Module({
  imports: [],
  controllers: [MicroserviceTcpController],
  providers: [MicroserviceTcpService],
})
export class MicroserviceTcpModule {}
