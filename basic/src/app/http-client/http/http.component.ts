import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

interface ToDoList {
  completed: boolean,
  id?: number,
  title: string,
  userId?: number,
};

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  todos: ToDoList[] = [];

  todoTitle: string = '';

  loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //в ангуляр все запросы работают через стримы в RxJS
    //это очень оптимизированная технология
    //и запрос не бкдет отправлен пока не будет хоть одного слушателя
    this.fetchTodos();
  }

  addTodo() {
    const newTodo: ToDoList = {
      title: this.todoTitle,
      completed: false,
    };

    this.http.post<ToDoList>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(todo => {
        this.todos.push(todo);

        this.todoTitle = '';
      });
  };

  fetchTodos() {
    this.loading = true;

    this.http.get<ToDoList[]>('https://jsonplaceholder.typicode.com/todos?_limit=4')
      //в RxJS можно между запросом и слушателем
      //манипулировать стримом
      //например ставим задержку на срабатывание запроса
      .pipe(delay(1000))
      //вешаем слушатель
      .subscribe(todo => {
        this.todos = todo;

        this.loading = false;
      });
  };

  removeTodo(id: number | undefined) {
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  };
}
