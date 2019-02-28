import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Question } from '../_interfaces/question';

@Component({
  selector: 'app-tag',
  template: `
    <h2>Наиболее популярные вопросы по этому тегу</h2>
    <app-questions [questions]="questions$"></app-questions>
  `,
  styles: []
})
export class TagComponent implements OnInit {

  questions$: Observable<Array<Question>>;

  constructor(private service: SearchService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.questions$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getPopularQuestionsOfTag(params.get('alias')))
    );
  }
}
