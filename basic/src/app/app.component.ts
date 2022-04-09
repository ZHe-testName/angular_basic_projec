import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
