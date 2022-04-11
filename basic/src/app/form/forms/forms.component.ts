import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
    this.form = new FormGroup({

    });
  }

  submit() {
    console.log('Form submitted>>>', this.form);
  };

}
