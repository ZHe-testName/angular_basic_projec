import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/pipes/pipes.component';

@Pipe({
  name: 'filter',
  //есть одно условие по умолчанию вс пайпы 
  //работают в режиме 

  //pure: true

  //это значит что они оптимизированы и отрабатывают
  //только при изменении входных параметров
  //но огда при динамическом добавлении 
  //автомобилей в наш список
  //они не будут реактивно подвергатся фильтрации
  //а толко после отрабатывания действий с нашим инпутом например

  //чтобы поменять это поведение
  pure: false,
  //оптимизации будет меньше но 
  //мы получили нужное поведение
})
export class FilterPipe implements PipeTransform {

  transform(posts: Car[], search: string = '', filterCategoty: string = 'mark'): Car[] {
    if(!search.trim()) {
      return posts;
    };

    switch(filterCategoty){
      case 'mark':
        return posts.filter(p => p.mark.toLowerCase().includes(search.toLowerCase()));
      case 'price':
        return posts.filter(p => p.price <= +search);
      default:
        return posts;
    };
  }

}
