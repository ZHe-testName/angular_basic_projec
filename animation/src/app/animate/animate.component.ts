import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bounce, jello} from 'ng-animate';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounce)),
      transition('* => void', useAnimation(jello, {
        params: {
          timing: 2,
          delay: 0.5,
        },
      })),
    ]),
  ],
})
export class AnimateComponent implements OnInit {
  visible = true

  constructor() { }

  ngOnInit(): void {
  }

}
