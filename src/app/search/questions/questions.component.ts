import { Component, Input } from '@angular/core';
import { Question } from '../_interfaces/question';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  template: `
    <div *ngFor="let question of questions | async">
      <div class="card-body">
        <h5 class="card-title"><a (click)="showQuestion(question)">{{ question.title }}</a></h5>
        <p class="card-text">Ask
          <a (click)="showUser(question)" class="text-success">{{ question.owner.display_name }}</a> and
          receive <a class="text-success" (click)="showQuestion(question)">{{ question.answer_count }} answers</a>
        </p>
        <a *ngFor="let tag of question.tags" class="btn btn-primary btn-sm text-light" (click)="showTag(tag)">
          {{ tag }}
        </a>
      </div>
    </div>
  `,
  styles: ['.btn-sm {margin: 0 5px 5px 0}', 'a {cursor: pointer}']
})
export class QuestionsComponent {
  @Input() questions: Observable<Array<Question>>;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  /**
   * Открываем окно с тегом
   * @param tag тег
   */
  showTag(tag: string) {
    this.router.navigate([{outlets: {detail: ['tag', tag]}}], {relativeTo: this.route});
  }

  /**
   * Открываем окно с пользователем задавшим вопрос
   * @param question объект с вопросом
   */
  showUser(question: Question) {
    this.router.navigate([{outlets: {detail: ['user', question.owner.user_id]}}], {relativeTo: this.route});
  }

  /**
   * Открываем страницу с вопросом
   * @param question объект с вопросом
   */
  showQuestion(question: Question) {
    this.router.navigate(['/search/question/' + question.question_id]);
  }
}
