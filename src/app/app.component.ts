import { Component } from '@angular/core';
import { QUOTES } from './models/data-base';
import { Quotation } from './models/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = '';
  quotes: Quotation[] = QUOTES;
  addButton: boolean = false;

  quotation: Quotation = {
    author: '',
    quotation: '',
    votes: 0,
  };

  countVote(addOdd: number, index: number) {
    this.quotes[index].votes += addOdd;
  }

  addQuotation() {
    this.quotes.push(this.quotation);
    this.quotation = { author: '', quotation: '', votes: 0 };
  }
}
