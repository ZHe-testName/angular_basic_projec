import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

//сервис для авторизации
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth = false

  constructor(
    private router: Router,
  ) {}

  logIn() {
    this.isAuth = true;
  }

  logOut() {
    this.isAuth = false;

    this.router.navigate(['/']);
  }

  isAuthenticated(): Promise<boolean>{ //эмулируем запрос на сервер
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 1000);
    });
  }
};