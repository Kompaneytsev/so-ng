import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Answer } from '../_interfaces/answer';

@Component({
  selector: 'app-question',
  template: `
    <div *ngFor="let answer of answers$ | async">
      <div class="card-body">
        <p [innerHTML]="answer.body"></p>
      </div>
    </div>
  `
})
export class QuestionComponent implements OnInit {

  answers$: Observable<Array<Answer>>;

  constructor(private service: SearchService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.answers$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getAnswersForQuestion(+params.get('id'))
      )
    );
  }

}
