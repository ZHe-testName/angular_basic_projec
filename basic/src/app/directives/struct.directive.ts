import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStruct]'
})

//мы ьакже можем писать свои структурные директивы
//создадим директиву противоположную *ngIf

//когда ангуляр видит директивы со звездочкой
//то он просто оборачивает тег
//в <ng-template>
//и к нему применяет директивы

//мы тоде можем использовать етот механизм
export class StructDirective {

  //сеттер для доступа к приватнм свойствам
  @Input('appStruct') set ifNot(condition: boolean) {
    if(!condition) {
      //рендерит элемент по ссылке в контейнер
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      //очищает контейнер
      this.viewContainer.clear();
    };
  };

  constructor(
    //тут содержимое  <ng-template>
    private templateRef: TemplateRef<any>,
    //тут ссыдка на сам  <ng-template>
    private viewContainer: ViewContainerRef,
  ) { }

}
