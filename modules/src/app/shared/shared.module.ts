import { NgModule } from "@angular/core";
import { ColorDirective } from "./color.directive";
import { PageNamePipe } from "./page-name.pipe";
//SharedModule используем для того чтобы использовать нужный нам функционал
//в тех модулях где это ноужно
//тут мы просто собираем нужный для нас функционал
@NgModule({
  declarations: [
    ColorDirective,
    PageNamePipe,
  ],
  exports: [
    ColorDirective, //в силу того что все сто мы регестрируем в declarations будет приватным для модуля
    PageNamePipe, //то нам нужно экспортировать интересующий функционал для работы в компонентах
  ],
})
export class SharedModule {};