import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

//интерсепторы это такие сушности которые позволяют перехватывать http запросы
//и чтото с ними делать
//при подключении к приложению все запросы будут перехвачены ним
export class AuthInterceptor implements HttpInterceptor { //имплементируемся от HttpInterceptor
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { //клас вынуждает нас реализовать метод intercept
    console.log('Intercept', req);                                                  //он принимает два параметра
                                                                                    //объект запроса и объект хендлера для работы с ним

    const clone = req.clone({ //чтобы работать и модифицировать реквест важно помнит что сам реквест МУТИРОВАТЬ НЕЛЬЗЯ
                              //для этого в нем реализован метод clone для создания копии
      headers: req.headers.append('Auth', 'SOME RUNDOM TOKEN')  //тут можно добавлять хедеры в запрос
    });  

    return next.handle(clone)  //handle это тоже стрим и мы с ним можем очень гибко работать
      .pipe(
        tap(e => {
          if(e.type === HttpEventType.Response) {
            console.log('AuthInterceptor', e);
          };
        }),
      );
  }                                                                                 
};                                                                                