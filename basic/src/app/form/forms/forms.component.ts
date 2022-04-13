import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  form: FormGroup
  constructor() { }

  //так как формы реактивны то вся работа с ними будет из сомпонента а не шаблона
  ngOnInit(): void {
    //инитим форму
    //констуктор принимает объект с конролами
    this.form = new FormGroup({
      //каждый конрол это екземпляр соответствующего класса
      //первый параметр конструктора 
        //стартовое знаачение
      //второй
        //валидаторы
        //может быть один
        //можеет быть массив ч набором

        //присутствует стандартный клас валидаторов
      email: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  submit() {
    //также защитить отправку не валидной формы можно в методe submit
    if(this.form.invalid) {
      console.log('Form submitted>>>', this.form);

      const formData = {...this.form.value};

      console.log('form data', formData);
    };
  };

}
