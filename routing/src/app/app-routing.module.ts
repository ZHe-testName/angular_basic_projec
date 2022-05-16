import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuards } from './auth.guard';
import { PostResolver } from './post.resolver';

const routes: Routes = [  //переменная для хранения роутов
  {
    path: '', //роут представляет собой объект с полем path в котором прописан путь к компоненте
    component: HomeComponent, //и поле component в котором подключается сама компонента
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivateChild: [AuthGuards], //подключаем защитник дочеренего пути
    children: [ //для указания вложеных роутов используем свойство children
      {         //это массив который содержит точно такие же объекты роутов
        path: 'extra',
        component: AboutExtraComponent,
      },
    ],
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuards], //для защиты роута подклчаем гуард
  },
  {
    path: 'posts/:id', //данная запись позволяет динамически доьавлять параметры в маршрут
    component: PostComponent,
    resolve: {
      post: PostResolver, //подключаем резолвер к нужному пути чтобы перед загрузкой получать данные
    },
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  { //для редиректа кудато при попадании в адресной строке по не зарегестрированому пути
    path: '**', //указываем данный путь ВАЖНО!!! РЕДИРЕКТ ДОЛЖЕН БЫТЬ ОБЯВЛЕН ПОСЛЕДНИМ В СПИСКЕ РОУТОВ!!!
    redirectTo: '/error', //с помощю данного свойства указываем путь редиректа
  },
];  

//модуль роутера это просто модуль как и остальные
@NgModule({
  imports: [RouterModule.forRoot(routes)],  //данная сушьность делает из нашего модуля роутер тут мы регестрируем входящие величины
                                            //в метод forRoot передаем наш массив роутов
  exports: [RouterModule],  //ркгестрируем пудличный АПИ роутера
})
export class AppRoutingModule {

};