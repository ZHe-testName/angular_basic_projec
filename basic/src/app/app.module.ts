import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
