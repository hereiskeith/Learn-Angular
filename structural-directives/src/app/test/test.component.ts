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

    <div [ngSwitch]="color">
      <h2 *ngSwitchCase="'red'">Red</h2>
      <h2 *ngSwitchCase="'blue'">Blue</h2>
      <h2 *ngSwitchCase="'green'">Green</h2>
      <h2 *ngSwitchDefault>Pick again</h2>
    </div>

    <div *ngFor="let color of colors; index as i; first as f, odd as o">
      {{i + 1}}. {{color}}{{f ? ', this is the first color' : ''}}
    </div>
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
  public color = 'red';

  public colors = ['red', 'blue', 'orange'];

  constructor() { }

  ngOnInit(): void {
  }

}
