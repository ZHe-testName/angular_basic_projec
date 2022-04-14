import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
//в ангуляр можно создавать свои валидаторы
//по сути это обычные функции и мы можем их создавть  прямо в компоненте

type ValidatorResponse = {[key: string]: boolean} | null;

//а можно сделать отдельный класс с статическими методами
export class MyValidators {
    static restrictedEmails(control: FormControl): ValidatorResponse {
        //когда ввод не валидный нужно вернуть объект
        //с ныжным именем в состоянии true
        if(['ww@ru', 'qq@ru'].includes(control.value)) {
            return {restrictedEmail: true};
        };

        //когда все хорошо валидатор возвращает null
        return null;
    };

    //также можно создавать асинхронные валидаторы
    //например для запроса на сервак чтобы узнать занять ли имейл
    static uniqEmail(control: FormControl): Promise<ValidatorResponse | null> | Observable<ValidatorResponse | null> {
        return new Promise(resolve => {
            setTimeout(() => {
                if(control.value === 'async@ua') {
                    resolve({
                        uniqEmail: true,
                    });
                } else {
                    resolve(null);
                };
            }, 1500);
        });
    };
};