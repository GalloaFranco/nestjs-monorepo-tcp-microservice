import {Controller} from '@nestjs/common';
import {MicroserviceTcpService} from './microservice-tcp.service';
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class MicroserviceTcpController {
  constructor(private readonly microserviceTcpService: MicroserviceTcpService) {}

  @MessagePattern('getRooster')
  getRooster(): string {
    return this.microserviceTcpService.getRooster();
  }
}
