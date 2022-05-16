import { Post } from './../posts.service';
import {Component, OnInit} from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post = {
    title: '',
    text: '',
    id: 0,
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostsService) {} //данный объект позволяет нам работать с путем
                                                //получать от туда какие либо параметры

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => { //params по сути стрим
      this.post = this.postService.getById(+params['id']);
    });
  }

  loadPost() {
    this.router.navigate(['/posts', 44]);
  }
}
