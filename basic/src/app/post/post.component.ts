import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  //для передачи данных с наружи компонента
  @Input() post: Post;

  //дает доступ к дочерним элементам
  //переданым в html родителем
  //при помощи ссылки #имя ссылки
  @ContentChild('info', {static: true}) infoRef: ElementRef; 

  constructor() { }

  ngOnInit(): void {
    console.log(this.infoRef.nativeElement);
  }

}
