import { Observable, delay, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
//на данном этапе логика сохранена и работает из апп компонента
//на более больших проектах лутше виносить логику в сервисы
export interface ToDoList {
    completed: boolean,
    id?: number,
    title: string,
    userId?: number,
  };

@Injectable({providedIn: 'root',})
export class TodosService {
    constructor(private http: HttpClient) {}

    addTodo(todo: ToDoList): Observable<ToDoList> {
		//мы можем инитить стрим но нам не обязательно его запускать
		//это можна сделать где угодно в прилл=ожении

		//тип стрима задаем Observble
        return this.http.post<ToDoList>('https://jsonplaceholder.typicode.com/todos', todo, {
					headers: new HttpHeaders({	//для работы с хедерами запроса в ангуляре есть специальный клас 
						'MyCustomAwesomeHeader': Math.random().toString(),
					}),
				});
                // .subscribe(todo => {
                //     this.todos.push(todo);

                //     this.todoTitle = '';
                // });
    }

	fetchTodos(): Observable<ToDoList[]> {
		let params = new HttpParams();

		params = params.append('_limit', '6');	//еще один способ добавления кюери параметров
		params = params.append('custom', 'anything');	//он не мутирует наш инстанс а возвращает новый
		return this.http.get<ToDoList[]>('https://jsonplaceholder.typicode.com/todos', {
			// params: new HttpParams().set('_limit', '5'), //для работы с кюери параметрами также предусмотрен класс
			params,
		})
			//в RxJS можно между запросом и слушателем
			//манипулировать стримом
			//например ставим задержку на срабатывание запроса
			.pipe(
				delay(1000),
				catchError(error => {	//еще один способ отлова ошибок из rxJs
					console.log('Error', error.message);
					return throwError(error); //он должен вернуть новый Observable
				})													//делаем это с помощю специального метода
				);
			//вешаем слушатель;
	}

	removeTodo(id: number | undefined): Observable<void> {
		return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
	}

	completeTodo(id: number | undefined): Observable<ToDoList> {
		return this.http.put<ToDoList>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			completed: true,
		})
	};
};