import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-integration',
  template: `
    <h2>{{'Hello' + myName}}</h2>
    <button (click)="fireEvent()">Click</button>
  `,
  styles: [``]
})
export class ComponentIntegrationComponent implements OnInit {

  constructor() { }

  @Input('parentData') public myName;

  @Output() public childEvent = new EventEmitter();

  ngOnInit(): void {
  }

  fireEvent() {
    this.childEvent.emit('Hello Angular')
  }

}
