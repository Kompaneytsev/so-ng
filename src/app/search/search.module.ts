import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SearchRoutingModule } from './search-routing.module';
import { StartComponent } from './start';
import { ResultComponent } from './result';
import { SearchService } from './search.service';
import { TagComponent } from './tag';
import { QuestionsComponent } from './questions';
import { UserComponent } from './user';
import { QuestionComponent } from './question';

@NgModule({
  declarations: [
    StartComponent,
    ResultComponent,
    TagComponent,
    QuestionsComponent,
    UserComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    HttpClientModule
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule { }
