import { AboutPageModule } from './about-page/about-page.module';
import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {HomePageComponent} from './home-page/home-page.component'
import {AppRoutingModule} from './app-routing.module'
import { SharedModule } from './shared/shared.module';
// import {AboutPageComponent} from './about-page/about-page.component'
// import {AboutExtraPageComponent} from './about-page/about-extra-page/about-extra-page.component'
// import {ColorDirective} from './shared/color.directive'
// import {PageNamePipe} from './shared/page-name.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    // AboutPageComponent,  теперь когда у нас отдельный модуль для страницы с главного можно убрать лишнее
    // AboutExtraPageComponent,
    // ColorDirective,
    // PageNamePipe //теперы когда у нас есть SharedModule то можно избавится от ненужных импортов
  ],
  imports: [
    BrowserModule, //этот модуль содержит базовый функционал для Angular (ngFor, ngStyle, ngIf...)
    FormsModule,
    AppRoutingModule,
    AboutPageModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
