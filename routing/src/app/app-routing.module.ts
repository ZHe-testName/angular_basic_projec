import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [  //переменная для хранения роутов
  {
    path: '', //роут представляет собой объект с полем path в котором прописан путь к компоненте
    component: HomeComponent, //и поле component в котором подключается сама компонента
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'posts/:id', //данная запись позволяет динамически доьавлять параметры в маршрут
    component: PostComponent,
  }
];  

//модуль роутера это просто модуль как и остальные
@NgModule({
  imports: [RouterModule.forRoot(routes)],  //данная сушьность делает из нашего модуля роутер тут мы регестрируем входящие величины
                                            //в метод forRoot передаем наш массив роутов
  exports: [RouterModule],  //ркгестрируем пудличный АПИ роутера
})
export class AppRoutingModule {

};