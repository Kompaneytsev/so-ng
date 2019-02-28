import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" routerLink="/s">Главная</a>
        </li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
