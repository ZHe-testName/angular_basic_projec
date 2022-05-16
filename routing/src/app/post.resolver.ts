import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { delay, Observable, of } from "rxjs";
import { Post, PostsService } from "./posts.service";

//ресолверы нужны для того чтобы перед загрузкой какой то страницы
//загрузить нужный нам элемент
@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<Post> {
  constructor(
    private postsService: PostsService, //для получения нужного эллемента используем сервис
  ) {}
  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot,
    ): Post | Observable<Post> | Promise<Post> {
    //метод of делает Observable с переданых данных
    //тут мы это делаем для демонстрации работы резолвера
    //просто бывает полезно не рендерить страницу пока к нам не пришли какието данные
    //тут резолверы могут сильно упростить жизнь
    //так как страница не откроется пока резолвер не отработает
    return of(this.postsService.getById(+route.params['id'])) //передаем туда интересующий параметр
      .pipe(
        delay(1500),
      );
  }
  
};