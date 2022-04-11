import { Component } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';

export interface Post {
  title: string,
  text: string,
  id?: number,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //чтобы зарегестрировать сервис локально для компоненты
  providers: [
    LocalCounterService,
  ],
})
export class AppComponent {
  isVisible: boolean = true;
  
  posts: Post[] = [
    {
      title: 'Angular Components',
      text: 'Want to learn Angular Components',
      id: 1,
    },
    {
      title: 'Angular Mdules',
      text: 'Want to learn Angular Modules',
      id: 2,
    },
  ];

  constructor(
    //чтобы юзать сервис нужно его заинжектить
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService,
  ) {};

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
