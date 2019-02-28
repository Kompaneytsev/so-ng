import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../_interfaces/question';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-questions',
  template: `
    <div class="table-responsive">
      <table class="table">
        <tr *ngFor="let question of questions | async">
          <td><a [routerLink]="[{ outlets: { detail: ['u', question.owner.user_id] } }]">{{ question.owner.display_name }}</a></td>
          <td><a [routerLink]="'/s/q/' + question.question_id" >{{ question.title }}</a></td>
          <td><a [routerLink]="'/s/q/' + question.question_id" >{{ question.answer_count }}</a></td>
          <td>
            <a *ngFor="let tag of question.tags" [routerLink]="[{ outlets: { detail: ['t', tag] } }]">{{ tag }}</a>
          </td>
        </tr>
      </table>
    </div>
  `,
  styles: ['a:after{content:" "}']
})
export class QuestionsComponent implements OnInit {
  @Input() questions: Observable<Array<Question>>;

  constructor() { }

  ngOnInit() {
  }

}
