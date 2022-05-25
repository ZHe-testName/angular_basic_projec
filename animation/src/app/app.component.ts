import { Component } from '@angular/core';
import { boxAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [boxAnimation], //тут объявляем анимации
})
export class AppComponent {
  boxState = 'start' //переменная для хранения состояния анимации
  visible = true

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  animationStarted(e: any) {
    console.log('Animation Sterted', e);
  }

  animationDone(e: any) {
    console.log('Animation Endede', e);
  }
}
