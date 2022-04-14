import { MyValidators } from './../../validators/my.validators';
import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { StateConditions } from 'src/app/switch/switch/switch.component';

interface CityMap { ru: string; ua: string; en: string; };

const cityMap: CityMap = {
  ru: 'moscow',
  ua: 'Kiev',
  en: 'London',
};

//возвращает тип ключа интерфейса
type cityMapKey = keyof CityMap;

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  formButtonState: StateConditions = 'off';

  form: FormGroup;
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
      //третий
        //это асинхронные валидаторы
        //также либо массив либо один

        //присутствует стандартный клас валидаторов
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ],
      [
        MyValidators.uniqEmail as AsyncValidatorFn,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      //для создания группы контролов
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('Kiev', Validators.required),
      }),
      //масив для динамических контролсов
      skills: new FormArray([

      ]),
    });
  }

  submit() {
    //также защитить отправку не валидной формы можно в методe submit
    if(this.form.valid) {
      console.log('Form submitted>>>', this.form);

      const formData = {...this.form.value};

      console.log('form data', formData);

      //метод для очистки полей формы
      this.form.reset();
    };
  };

  get countryValue(): cityMapKey {
    return this.form.get('address')?.get('country')?.value;
  }

  get skillsControlsArr(): FormArray {
    return (this.form.get('skills') as FormArray);
  };

  //метод динамического обновления поля формы
  setCapital() {
    const city = cityMap[this.countryValue];

    //обновляем значение поля по клику динамически
    this.form.patchValue({address: {city}});
  }; 

  addSkill() {
    //контролсы можно создавать динамически
    const control: FormControl = new FormControl('', Validators.required);

    //объяснить TS какой тип мы хотим ожидать
    //можно двумя способами
    // (<FormArray>this.form.get('skills')).push();

    //или...

    (this.form.get('skills') as FormArray).push(control);
  };
}
