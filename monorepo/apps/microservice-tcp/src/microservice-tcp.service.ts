import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceTcpService {
  getRooster(): string {
    return "Hello World, I'm a rooster 🐔 !";
  }
}
