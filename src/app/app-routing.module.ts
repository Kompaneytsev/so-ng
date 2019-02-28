import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 's',
    loadChildren: './search/search.module#SearchModule',
    // canLoad: [AuthGuard]
  },

  { path: '',   redirectTo: '/s', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
