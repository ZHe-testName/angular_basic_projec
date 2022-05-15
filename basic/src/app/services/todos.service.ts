import { Observable, delay, catchError, throwError, map, tap } from 'rxjs';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
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

	fetchTodos(): Observable<ToDoList[] | null> {
		let params = new HttpParams();

		params = params.append('_limit', '6');	//еще один способ добавления кюери параметров
		params = params.append('custom', 'anything');	//он не мутирует наш инстанс а возвращает новый
		return this.http.get<ToDoList[] | null>('https://jsonplaceholder.typicode.com/todos', {
			// params: new HttpParams().set('_limit', '5'), //для работы с кюери параметрами также предусмотрен класс
			params,
			observe: 'response',	//observe это поле позволяет настраивать тип данных получаемых в ответе
														//по умолчанию имеет тип "body"
														//также есть ваоианты "response", "events"
		})
			//в RxJS можно между запросом и слушателем
			//манипулировать стримом
			//например ставим задержку на срабатывание запроса
			.pipe(
				map(res => {
					return res.body;
				}),
				delay(1000),
				catchError(error => {	//еще один способ отлова ошибок из rxJs
					console.log('Error', error.message);
					return throwError(error); //он должен вернуть новый Observable
				})													//делаем это с помощю специального метода
				);
			//вешаем слушатель;
	}

	removeTodo(id: number | undefined): Observable<any> {
		return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			observe: 'events', //так мы получаем доступ до всех асинхронных запросов
													//и можем обрабатывать и отслеживать данные на каждом этапе запроса	
		})
			.pipe(
				tap(e => {	//для промежуточной обработки данных
					if(e.type === HttpEventType.Sent) {	//HttpEventType это enum возможных стадий запросов
						console.log('Sent', e);
					}; 
					
					if(e.type === HttpEventType.Response) {
						console.log('Responce', e);
					};
				}), 
				catchError(error => {
					console.log('Error', error.message);
					return throwError(error);
				}),
				);
	}

	completeTodo(id: number | undefined): Observable<ToDoList> {
		return this.http.put<ToDoList>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			completed: true,
		},
		{
			responseType: 'json',	//можно укацывать ип фозвращаемых данных
													//по умолчанию json так как данные по сети передаютвя в нем
													//так же есть форматы "arrayBuffer", "text", "blob"
		})
	};
};