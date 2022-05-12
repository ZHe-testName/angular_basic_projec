import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { ToDoList, TodosService } from 'src/app/services/todos.service';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  todos: ToDoList[] = [];

  todoTitle: string = '';

  loading: boolean = false;

  error: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    //в ангуляр все запросы работают через стримы в RxJS
    //это очень оптимизированная технология
    //и запрос не бкдет отправлен пока не будет хоть одного слушателя
    this.fetchTodos();
  }

  addTodo() {
    //используем лггику из нашегш сервиса
    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false,
    })
    .subscribe(
    todo => {  //метод сабскрайб принимает три колбека
      this.todos.push(todo);  //первый - вызывается когда все хорошо отработало
                              //второй - когда есть ошибка
      this.todoTitle = '';    //третий - когда завршится работа метода 
    },
    error => {
      console.log(error.message);
    });
      
  };

  fetchTodos() {
    this.loading = true;

    this.todosService.fetchTodos()
      .subscribe(
      todo => {
        this.todos = todo;

        this.loading = false;
      },
      error => {
        this.error = error.message;
      });
  };

  removeTodo(id: number | undefined) {
      this.todosService.removeTodo(id)
        .subscribe(() => {
          this.todos = this.todos.filter(t => t.id !== id);
        });
  };

  completeTodo(id: number | undefined) {
    this.todosService.completeTodo(id)
      .subscribe(todo => {
        const curTodo = this.todos.find(t => t.id === todo.id);

        if(curTodo) {
          curTodo.completed = true;
        }
      });
  };
}
