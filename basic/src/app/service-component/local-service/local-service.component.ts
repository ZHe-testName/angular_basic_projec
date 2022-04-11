import { Component, OnInit } from '@angular/core';
import { AppCounterService } from 'src/app/services/app-counter.service';
import { LocalCounterService } from 'src/app/services/local-counter.service';

@Component({
  selector: 'app-local-service',
  templateUrl: './local-service.component.html',
  styleUrls: ['./local-service.component.scss'],
  providers: [
    LocalCounterService,
  ],
})
export class LocalServiceComponent implements OnInit {
  //сервисы имеют области видимости
  //когда сервис подключен в компонет то создается его копия
  //и он существует только для этой компоненты

  //если его подключать в модуль то сервис будет 
  //один общий для всех дочерних модулей и компонент

  //по сути сервисиы могут заменять такие штуки
  //как стейт менджеры

  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService,
  ) { }

  ngOnInit(): void {
  }

}
