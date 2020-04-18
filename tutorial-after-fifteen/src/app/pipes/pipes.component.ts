import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h4>{{ name | lowercase }}</h4>
    <h4>{{ name | uppercase }}</h4>
    <h4>{{ title | slice:3 }}</h4>
    <h4>{{ title | slice:3:5 }}</h4>
    <h4>{{ myName | json }}</h4>

    <h4>{{ 5.678 | number: '1.2-3' }}</h4>
    <h4>{{ 5.678 | number: '3.4-5' }}</h4>
    <h4>{{ 5.678 | number: '3.1-2' }}</h4>

    <h4>{{ 0.25 | percent }}</h4>
    <h4>{{ 0.25 | currency }}</h4>

    <h4>{{ 0.25 | currency: 'EUR': 'code' }}</h4>
    <h4>{{ 0.25 | currency: 'EUR' }}</h4>

    <h4>{{ date | date: 'short' }}</h4>
    <h4>{{ date | date: 'shortDate' }}</h4>
    <h4>{{ date | date: 'shortTime' }}</h4>

  `,
  styles: []
})
export class PipesComponent implements OnInit {

  public name = 'Keith';
  public title = 'Codevolution';
  public myName = {
    firstName: 'Keith',
    lastName: 'Li'
  };
  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
