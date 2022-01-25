import { Controller, Logger } from '@nestjs/common';
import { MicroserviceTcpService } from './microservice-tcp.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MicroserviceTcpController {
  private logger = new Logger();

  constructor(
    private readonly microserviceTcpService: MicroserviceTcpService,
  ) {}

  @MessagePattern('getRooster')
  getRooster(): string {
    this.logger.log(`Microservice called`);
    return this.microserviceTcpService.getRooster();
  }
}
