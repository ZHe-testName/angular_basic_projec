import { Directive, ViewContainerRef } from "@angular/core";

//данная директива нужна для того чтобы проще указывать место в шаблоне
//куда нужно рендерить компонент
//она поможет находить элементы в шаблоне
@Directive({
  selector: '[appRef]',
})
export class RefDirective {
  constructor(
    public containerRef: ViewContainerRef,
  ) {}
};