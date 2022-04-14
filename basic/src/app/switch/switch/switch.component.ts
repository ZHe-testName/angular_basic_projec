import { Component, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
//в ангуляр можно создавать свое кастомные ngModel

export type StateConditions = 'on' | 'off';

//ЭТО спецыальный тип констант который служит провайда разных сущностей
const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true,
}; 

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  //регестрируем аксесор как провайдер
  providers: [
    VALUE_ACCESSOR,
  ],
})

//ЧТОБЫ СТАТЬ ПОЛНОЦЕННОЙ МОДЕЛЬЮ НУЖНО РЕАЛИЗОВАТЬ этот интерфейс

export class SwitchComponent implements ControlValueAccessor{
  private onChange = (value: any) => {};

  writeValue(state: StateConditions): void {
    this.state = state;
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  };

  registerOnTouched(fn: any): void {
  };

  setDisabledState(isDisabled: boolean): void {
  };

  state: StateConditions = 'off';

  setState(state: StateConditions) {
    this.state = state;

    this.onChange(this.state);
  };

}
