import { Owner } from './owner';

export interface Question {
  tags: Array<string>;
  owner: Owner;
  is_answered: boolean;
  view_count: number;
  favorite_count: number;
  down_vote_count: number;
  up_vote_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  link: string;
  title: string;
  body: string;
}
