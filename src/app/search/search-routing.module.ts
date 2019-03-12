import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start';
import { ResultComponent } from './result';
import { TagComponent } from './tag';
import { UserComponent } from './user';
import { QuestionComponent } from './question';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'question/:id',
    component: QuestionComponent
  },
  {
    path: ':alias',
    component: ResultComponent,
    children: [
      {
        path: 'tag/:alias',
        component: TagComponent,
        outlet: 'detail'
        , pathMatch: 'full'
      },
      {
        path: 'user/:id',
        component: UserComponent,
        outlet: 'detail'
        , pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
