import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  template: `
    <input [(ngModel)]="q" placeholder="Поисковый запрос" autofocus (keyup.enter)="search()">
    <button type="submit" (click)="search()">Искать</button>
  `
})
export class StartComponent implements OnInit {

  q: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/search/' + this.q]);
  }
}
