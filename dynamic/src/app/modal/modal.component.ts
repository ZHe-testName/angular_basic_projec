import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
//ДИНАМИЧЕСКИЕ КОМПОНЕНТЫ - Ьэто компоненты котороые создаются не с помощю шаблона
//а при помощи кода в TS

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = 'Default title'
  @Output() close = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

}
