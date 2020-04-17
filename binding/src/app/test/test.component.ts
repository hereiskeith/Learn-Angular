import { Component, OnInit } from '@angular/core';

// Template cannot assign variable and is not accessible to global variables
// In console, '$0' means current element

/* Attribute VS Property
Attributes - HTML
Properties - DOM
Attribute initialize DOM properties and then they are done. Attribute values cannot change
once they are initialized
Property values however can change
* */

@Component({
  selector: 'app-test',
  template: `
    <h2 class="text-success">Hi {{name}}!</h2>
    <h2 [class]="successText">Hi {{name}}!</h2>
    <h2 [class.text-error]="hasError">Hi {{name}}!</h2>
    <h2 [ngClass]="messageClasses">Hi {{name}}!</h2>
    <h2 [style.color]="'orange'">Style Binding</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 2</h2>
    <h2 [style.color]="highlightColor">Style Binding 3</h2>
    <h2 [ngStyle]="titleStyles">Style Binding 4</h2>

    <button (click)="onClick($event)">Greet</button>
    <button (click)="buttonText = 'Nice work'">Greet</button>
    {{buttonText}}

    <input #myInput type="text"/>
    <button (click)="logInput(myInput)">Log</button>

    <input [(ngModel)]="inputText" type="text" />{{inputText}}
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

  public name = 'Keith';
  public successText = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-error': this.hasError,
    'text-special': this.isSpecial
  };
  public highlightColor = 'orange';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  };
  public buttonText = '';
  public inputText = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event) {
    console.log('Hey button works');
    this.buttonText = `I like it and ${event.type}!`;
  }

  logInput(value) {
    console.log(value);
  }

}
