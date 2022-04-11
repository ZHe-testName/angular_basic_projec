import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class LocalCounterService {
  counter: number = 0;

  increase() {
    this.counter++;
    this.logService.log(this.counter);
  };

  decrease() {
    this.counter--;
    this.logService.log(this.counter);
  };

  //чтобы заюзать сервис в сервисе его можно инжектить
  //как в компоненте
  constructor(
    private logService: LogService,
  ) { }
}
