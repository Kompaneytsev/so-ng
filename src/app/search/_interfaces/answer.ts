import { Owner } from './owner';

export interface Answer {
  owner: Owner;
  down_vote_count: number;
  up_vote_count: number;
  is_accepted: boolean;
  score: number;
  last_activity_date: number;
  last_edit_date: number;
  creation_date: number;
  answer_id: number;
  question_id: number;
  link: string;
  title: string;
  body: string;
}
