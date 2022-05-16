import {Component, OnInit} from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import {PostsService} from '../posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  showIds = false;

  constructor( 
    public postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {  //в this.route нам также доступны и кюери параметры
      this.showIds = !!params['showIds'];
    });

    this.route.fragment.subscribe(fragment => { //так же можно следить за изминениями фрагментов
      console.log('Fragment', fragment);
    });
  }

  showIdsProgram() {  //второй способ передачи кюери параметров
    this.router.navigate(['/posts'], {  //вторым параметром navigate принимает объект в свойсво которого
      queryParams: {showIds: true}, //queryParams мы передаем объект с параметрами
      fragment: 'program-fragment', //так же фрагменты можно задавать програмно
    });
  }
}
