import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  //для передачи данных и собитй наружу из компонента
  //использовать данный декоратор
  @Output()
  //для создания сответствующего объекта
  //используй данный конструктор
  onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  //чтобы иметь возможность оптимизировано
  //обращатся к элементам через локальную ссылку нужен данный декоратор 

  //первый аргумент - имя переменной
  //второй аргумент - объект с настройками
  
  //static - false если не используем ссылку в ngOnInit
  //true - если используем
  @ViewChild('titleInput', {static: false})
  //в этой ссылке хранится объект в котором по 
  //определенному свойсву есть ссылка на обычную дом-ноду

  //такие мутки есть изза того 
  //что ангуляр работает не толко в браузерах
  //по этому в объекте могут быт и другие элементы
  elementRef: ElementRef

  title: string = '';
  text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if(this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };

      //метод передачи данных на верх
      this.onAdd.emit(post)

      this.title = this.text = '';
    };
  };

  focusTitle() {
    this.elementRef.nativeElement.focus();
  };
}
