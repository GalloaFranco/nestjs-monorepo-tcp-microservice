import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Observable} from "rxjs";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('rooster')
  getRooster(): Observable<string> {
    return this.appService.getRooster();
  }
}