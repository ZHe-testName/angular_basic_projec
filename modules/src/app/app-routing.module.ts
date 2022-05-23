import {NgModule} from '@angular/core'
import {PreloadAllModules, RouterModule} from '@angular/router'
import {HomePageComponent} from './home-page/home-page.component'

@NgModule({
  imports: [RouterModule.forRoot([ //forRoot же используется только для подключения голобальных модулей
    {
      path: '', 
      component: HomePageComponent, 
      pathMatch: 'full',
    },
    {                 //в действительности разбивка приложения на модули полезна не только чистотой и структурированием кода
      path: 'about',  //так же нам становится доступна ленивая загрузка модулей
                      //которая будет подгружать нужный модуль только в случае необходимости что существенно ускоряет приложение

      loadChildren: () => import('./about-page/about-page.module')//в поле loadChildren передается колбек с аргументом пути к модулю
        .then(m => m.AboutPageModule),  //далее в метод then передаем имя как свойство возвращаемого обьекта
    }
  ],
  {                                       //вторым параметром метод forRoot принимает объект с настройками
    preloadingStrategy: PreloadAllModules,//данная настройка помагает оптимизировать еще более загрузку модулей
  })],                                    //такая оптимизация с начала грузит чанки нужные для старта приложения
  exports: [RouterModule]                 //и когда все готово в фоновом режиме грузит остальные чанки модулей 
                                          //чтобы потом не тратить на это время
})
export class AppRoutingModule {

}
