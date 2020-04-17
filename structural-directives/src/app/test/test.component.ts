import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngIf="ngIf; then showName; else hideName"></div>

    <ng-template #showName>
      <h2>Keith!</h2>
    </ng-template>
    <ng-template #hideName>
      <h2>No name</h2>
    </ng-template>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-error {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public ngIf = false;

  constructor() { }

  ngOnInit(): void {
  }

}
