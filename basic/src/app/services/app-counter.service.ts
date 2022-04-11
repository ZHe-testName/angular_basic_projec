import { Injectable } from '@angular/core';
//сервисы используются для работы с данными
//мы можем объеденять тут логику
//и переиспользовать ее

//данный декоратор нужен всем сервисам
//он позволяет внедрять в него другие сервисы и тп

//еще даным способом можно подключать сервис в главный модуль
//без импорта туда и без использования провайдерс
@Injectable({
  providedIn: 'root'
})
export class AppCounterService {
  counter: number = 0;

  increase() {
    this.counter++;
  };

  decrease() {
    this.counter--;
  };

  constructor() { }
}
