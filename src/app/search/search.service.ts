import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuestionResponse } from './_interfaces/question_response';
import { AnswerResponse } from './_interfaces/answer_response';
import { Question } from './_interfaces/question';
import { Answer } from './_interfaces/answer';

const extractQuestions = (x: QuestionResponse): Array<Question> => x.items;
const extractAnswers = (x: AnswerResponse): Array<Answer> => x.items;

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) {
  }

  getQuestionsByPhrase(phrase: string): Observable<Array<Question>> {
    return this
      .http
      .get<QuestionResponse>(
        'http://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=' + phrase + '&site=stackoverflow'
      )
      .pipe(
        map(extractQuestions)
      );
  }

  getPopularQuestionsOfTag(tag: string): Observable<Array<Question>> {
    return this.http.get<QuestionResponse>('http://api.stackexchange.com/2.2/tags/' + tag + '/faq?site=stackoverflow').pipe(
      map(extractQuestions)
    );
  }

  getUserPopularQuestions(id: number): Observable<Array<Question>> {
    return this
      .http
      .get<QuestionResponse>(
        'http://api.stackexchange.com/2.2/users/' + String(id) + '/questions?order=desc&sort=activity&site=stackoverflow'
      )
      .pipe(
        map(extractQuestions)
      );
  }

  getAnswersForQuestion(id: number): Observable<Array<Answer>> {
    return this
      .http
      .get<AnswerResponse>(
        'http://api.stackexchange.com/2.2/questions/' +
        String(id) +
        '/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody'
      )
      .pipe(
        map(extractAnswers)
      );
  }
}
