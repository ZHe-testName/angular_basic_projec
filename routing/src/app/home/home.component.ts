import {Component} from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {} //чтобы реализовать роутинг програмно на мпонадобится специальный класс Router

  goToPosts() {
    this.router.navigate(['/posts']); //данный метод объекета router позволяет програмно изменять маршрут
                                      //он принимает массив команд
  }
}
