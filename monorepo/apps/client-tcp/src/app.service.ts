import {Injectable} from '@nestjs/common';
import {ClientProxy, ClientProxyFactory, Transport} from "@nestjs/microservices";
import {Observable, tap} from "rxjs";

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3001,
      }
    })

  }


  getRooster(): Observable<string> {
    return this.client.send('getRooster', 'void')
        .pipe( tap((value => console.log(value))));
  }
}
