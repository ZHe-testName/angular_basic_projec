import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AboutExtraPageComponent } from "./about-extra-page/about-extra-page.component";
import { AboutPageComponent } from './about-page.component';
//для декомпозиции приложения каждую страницу мы виносим в отдельный модуль
//и уже тут подключаем наши компоненты
@NgModule({
  declarations: [
    AboutPageComponent,
    AboutExtraPageComponent
  ],
  imports: [
    CommonModule, //нужен для того чтобы импортировать фичи из BrowserModule
    SharedModule, //сюда также подключаем наш модуль с функционалом
    RouterModule.forChild([ //метод RouterModule forChild определяет роуты дочерних компонент
      {                      //по тому что логично что в основном роут модуле эти пути будут не видны
        //path: 'about', так как для ленивой загрузки мы в главном модуле пишем часть пути
        path: '',   //то в дочернем нужно убрать данный префикс
        component: AboutPageComponent, 
        children: [
          {path: 'extra', component: AboutExtraPageComponent}
        ]
      }
    ]),
  ],
  exports: [
    RouterModule, //экспортируем чтобы в главном модуле было понятно что мы экспортируем дочерние роуты
  ],
})
export class AboutPageModule {};