import { Component, OnInit } from '@angular/core';
import {ScullyRoutesService} from "@scullyio/ng-lib";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  template: `
    <ul>
      <li *ngFor="let route of routes$ | async">
        <a [routerLink]="[route.route]">{{ route.title }}</a>
      </li>
    </ul>
  `,
})
export class HomeComponent {
  routes$ = this.scullyRoutesService.available$.pipe(
      map((routes) => routes.filter((route) => route.route.includes('/blog'))),
  );

  constructor(private readonly scullyRoutesService: ScullyRoutesService) {}


}
