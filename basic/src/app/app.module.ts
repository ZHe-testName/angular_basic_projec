import { NgModule } from '@angular/core';
//ReactiveFormsModule для реактивных форм
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleDirectuve } from './directives/style.directive';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { StructDirective } from './directives/struct.directive';
import { PipesComponent } from './pipes/pipes.component';
import { MultByPipe } from './pipes/mult-by/mult-by.pipe';
import { ExMarks } from './pipes/exMarks/exMarks.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { LocalServiceComponent } from './service-component/local-service/local-service.component';
import { FormsComponent } from './form/forms/forms.component';
import { SwitchComponent } from './switch/switch/switch.component';
import { HttpComponent } from './http-client/http/http.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirectuve,
    StructDirective,
    PipesComponent,
    MultByPipe,
    ExMarks,
    FilterPipe,
    LocalServiceComponent,
    FormsComponent,
    SwitchComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
