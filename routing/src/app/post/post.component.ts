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
    //с резолвером но статичный
    //поле data содержит то что мы подключили в объекте роутов
    //this.post = this.route.snapshot.data['post']; //не самый лутщий выбор так как snapshot это просто снимок пути и он статичен

    this.route.data.subscribe(data => { //в этом варианте объект data динамично изменяется
      this.post = data['post'];
    });

    //вариант без резолверов
    // this.route.params.subscribe((params: Params) => { //params по сути стрим
    //   this.post = this.postService.getById(+params['id']);
    // });
  }

  loadPost() {
    this.router.navigate(['/posts', 44]);
  }
}
