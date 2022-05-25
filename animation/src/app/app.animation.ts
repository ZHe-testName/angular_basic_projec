//в компоненте держать все огромные анимации не очень удобно по этому

import { animate, state, style, transition, trigger, group, keyframes, query } from "@angular/animations";

//можно вынести ф-ю тригер в отдельную константу
export const boxAnimation = trigger('box', [  //с начала нужно создать тригер который будет запускать наши анимации
                  //первым параметром он принимает название, а вторым масив состояний анимации
  state('start', style({background: 'blue'})), //каждое состояние описывает функция state она первым параметром принимает название
                                               //а вторым функцию style в которой и описываются нужные стили
  state('end', style({
    background: 'tomato',
    transform: 'scale(1.3)',
  })),   
  transition('start => end', animate(500)), //для задания плавности у нас есть ф-я transition
                                //первый параметр это стейтЧенжЭкспрешн направление к которому применяем transition
                                //второй - время за которое прйдет переход. передаем в функцию animate
  transition('end => start', animate('800ms ease-in-out')),//в animate можно передавать и более детальные настройки в виде строки

  state('special', style({
    background: 'orange',
    transform: 'scale(0.5)',
    borderRadius: '50%',  //для другого состояния
  })),
  // transition('special <=> *', animate(600)), //чтобы не дублировать код для перехода из спешл в любое состояние и на оборот
                                //можно применить крутой экспрешн 'special <=> *'
  transition('special <=> *', [ //так же вторым параметром можно передать массив шагов анимации
    group([
      style({background: 'green'}),//указываем начальное состояние
      animate('1s', style({ 
        background: 'pink', //по завершению меняем стили еще
      })),
      animate(750), //задаем им время

      query('h4', animate(1500, style({ //чтобы в нутри текущей анимации иметь доступ к дочерним элеиентам мы запускаем ф-ю query
        fontSize: '0.5rem',
      }))),
    ]),
  ]),
  //в ангуляр можно работать с анимациями даже когда элемент удален из ДОМ дерева
  //void => * такое очень часто встречается по этому в ангуляр есть специальное выражение чтобы ето описать
  transition(':enter', [  //ключевое слово void как раз и описывает переход из отсутствующего состояния
    animate('4s', keyframes([ //для более сложного пошагового управления анимациями есть метод keyframes
      style({background: 'red', offset: 0}), //по умолчанию кейфреймс десит время поравну между количеством шагов
      style({background: 'black', offset: 0.3}), //не этим можно управлять с помощю offset который мы задаем в процентах от 
      style({background: 'pink', offset: 0.5}),  //общего времени
      style({background: 'blue', offset: 1}),
    ])),
    // style({ 
    //   opacity: '0',
    // }),
    // animate('800ms ease-out'),
  ]),
  
  //* => void
  transition(':leave', [
    style({
      opacity: 1,
    }),
    group([ //для запуска анимаций паралельно их нужно объединить в групуу для избежания конфликтов
      animate(700, style({
        opacity: 0,
        transform: 'scale(1.4)',
      })),
      animate(300, style({
        color: '#000',
        fontWeight: 'bolder',
      })),
    ]),
  ]),
]) 