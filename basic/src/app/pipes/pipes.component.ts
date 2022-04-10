import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Car {
  mark: string,
  price: number,
  cylinders: number,
};

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})

//пайпы это такие транмформеры которые применяются в шаблоне
//для того чтобы изменить отображение каких
//либо данных

//они доступны нам из BrowserModule
export class PipesComponent implements OnInit {
  cars : Car[] = [
    {mark: 'BMW', price: 10000, cylinders: 8},
    {mark: 'Ford', price: 8000, cylinders: 4},
    {mark: 'Tesla', price: 20000, cylinders: 0},
  ];

  search: string = '';
  filterCategoty = 'mark';

  e: number = Math.E;

  str: string = 'hellO pipeS';

  date: Date = new Date();

  float: number = 0.45;

  obj = {
    a: 1,
    b: {
      c: 2,
      b: 3,
      e: {
        f: 4,
      },
    },
  };

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promice Resolved!!!');
    }, 3000);
  });

  curentData: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  constructor() { }

  ngOnInit(): void {
  }

  addCar() {
    this.cars.unshift({
      mark: 'VW',
      price: 6000,
      cylinders: 4,
    });
  };

}
