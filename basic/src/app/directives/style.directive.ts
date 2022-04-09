//по мимо основных директив в ангуляр
//можно писать свои

import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

//в ангилар все сушности - классы
//директивы не исключение

//для указания директивы нужен данный декоратор

//не забываем подключать в модуле
@Directive({
    selector: '[appStyle]',
})

//чтобы директива работала
//в нее в конструктор нужно передать ссылку на элемент
export class StyleDirectuve {
    constructor(
        private elRef: ElementRef,
        private r: Renderer2
        ) {
        //мы получаем ссылку на элемент
        //т можем с ни делать все 

        //мы можем поступить так

        // elRef.nativeElement.style.color = 'red';

        //и это будет работать
        //но так как ангуляр работает не только в браузере
        //лутше все делать через рендерер

        //так будет правельнее и оптимизированее

        //порядок аргументов
            //ссылка на нативный элемент
            //название свойства
            //новое значение
        r.setStyle(elRef.nativeElement, 'color', 'blue');
      }

    //в директивы также можно передавать параметры
    @Input('appStyle') color: string = 'black';
    @Input() dStyles: {border?: string, borderRadius?: string};

      
    //чтобы добавить динамику в работу директивы
    //допустим пррослушку собитий
    //нужен дикоратор

    //в конструктор передаес название собития
    //и дкларируем в масиве объект ивента 
    //для использования в обработчике
    //и декорируем функцию обработчик
    @HostListener('click', ['$event.target'])
    onClick(event: Event) {
        console.log(event);
    };

    //есть прикольный декоратор для работы с
    //входнымы параментрами

    //он принимает имя параметра элемента
    //к которому применен дикоратор
    @HostBinding('style.color') elColor: string | null = null;

    @HostListener('mouseenter')
    onEnter() {
        //@HostBinding помогает проще рпботать
        this.elColor = this.color;
        this.r.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border);
        this.r.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius);
    };

    @HostListener('mouseout')
    onLeave() {
        this.elColor = null;
        this.r.setStyle(this.elRef.nativeElement, 'border', null);
        this.r.setStyle(this.elRef.nativeElement, 'borderRadius', null);
    };
};