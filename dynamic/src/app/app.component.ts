import {Component, ViewChild} from '@angular/core'
import { Meta, Title } from '@angular/platform-browser';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './modal/ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(RefDirective) refDir: RefDirective //во ViewChild можно передавть как ссылку на контейнер ввиде строки так и клас за которым мы будем следить

  constructor(
    private title: Title, //данный тип дает нам доступ к управлению тайтлом
    private meta: Meta, //тип для управления метатегами
  ) {
    this.title.setTitle('Dynamic Components');

    this.meta.addTags([
      {name: 'keywords', content: 'angular, google, dynamic components'},//теперь можно програмно сетать мета тэги
      {name: 'description', content: 'this is angular app'},
    ]);
  }

  showModal() {
    //const modalFactory = this.viewContainerRef.createComponent(ModalComponent); //вызов данной функции возвращает нам фабрику компонент

    this.refDir.containerRef.clear(); //метод для очтски контейнера

    const component = this.refDir.containerRef.createComponent(ModalComponent); //создаем наш компонент динамически и этот метод возвращает нащ созданый компонент

    component.instance.title = 'My dynamic component'; //етот объект имеет поле instance в котором есть доступ к полям инстанса нашего компонента

    component.instance.close.subscribe(() => { //так как close это инстанс EventEmitter то мы можем подписатья на него еае на Observable
      this.refDir.containerRef.clear(); //по клику очищаем наш контейнер
    });
  }
}

