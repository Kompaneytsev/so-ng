import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../_interfaces/question';
import { SearchService } from '../search.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  template: `
    <h2>Наиболее популярные вопросы автора</h2>
    <app-questions [questions]="questions$"></app-questions>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  questions$: Observable<Array<Question>>;

  constructor(private service: SearchService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.questions$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getUserPopularQuestions(+params.get('id')))
    );
  }
}
