import { Component, OnInit } from '@angular/core';

// selector can be either tag('app-test'), class('.app-test') or '[app-test]'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
    p {
      color: red;
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
