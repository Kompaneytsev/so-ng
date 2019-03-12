import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs';
import { Question } from '../_interfaces/question';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-result',
  template: `
    <div class="row" *ngIf="questions$ | async; else loading">
      <div class="col">
        <app-questions [questions]="questions$"></app-questions>
      </div>
      <div class="col">
        <router-outlet name="detail"></router-outlet>
      </div>
    </div>
    <ng-template #loading>
      <div class="lds-circle"><div></div></div>
    </ng-template>
  `
})
export class ResultComponent implements OnInit {

  questions$: Observable<Array<Question>>;

  constructor(private service: SearchService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.questions$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getQuestionsByPhrase(params.get('alias'))
      )
    );
  }

}
