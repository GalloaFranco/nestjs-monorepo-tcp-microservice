import { NestFactory } from '@nestjs/core';
import { MicroserviceTcpModule } from './microservice-tcp.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3001,
    },
  };
  const app = await NestFactory.createMicroservice(
    MicroserviceTcpModule,
    microserviceOptions,
  );
  await app.listen();
}
bootstrap();
