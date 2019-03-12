import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" routerLink="/">Home</a>
        <button class="btn btn-secondary my-2 my-sm-0" (click)="goBack()">Go back</button>
      </div>
    </nav>
    <div class="container main">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ['.main {margin-top: 5rem;}']
})
export class AppComponent {
  constructor(private location: Location) {
  }

  goBack() {
    this.location.back();
  }
}
