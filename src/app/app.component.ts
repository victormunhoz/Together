import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{nameTest}}</h1>`,
})
export class AppComponent  { nameTest = 'Angular'; }
