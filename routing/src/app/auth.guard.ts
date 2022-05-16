import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

//для защиты роутов от скажем не зарегестрированных пользователей
//или по ряду какихто других причин
//в ангуляр можно организовать защитников
@Injectable({
  providedIn: 'root',   //инжектим чтобы мы могли использовать тут другие сервисы
})
export class AuthGuards implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean { //возвращаем данные для разных вариантов использования  на типе bpplean
    return this.authService.isAuthenticated() //изза настройки возвращаемиых значений можно сразу вернуть нащ промис
      .then(isAuth => { //также можно обработать наш промис и привнести любую логику
        if(isAuth) {
          return true;
        } else {
          this.router.navigate(['/'], { //в случае когда нет регестрации редиректим на домашнюю
            queryParams: {auth: false},
          });

          return false;
        };
      })
  }

  canActivateChild( //для защиты дочерних путей используется очень похожий метод
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
};