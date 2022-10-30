import { Component } from '@angular/core';
import { QUOTES } from './models/data-base';
import { Quotation } from './models/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  quotes: Quotation[] = QUOTES;
  addButton: boolean = false;

  countVote(addOdd: number, index: number) {
    this.quotes[index].votes += addOdd;
  }
}
