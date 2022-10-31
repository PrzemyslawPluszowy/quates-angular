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
  titleWorst: string = 'Najgorsze cycaty';
  titleBest: string = 'Najlepsze cytaty';

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
  bestQuotes() {
    return this.quotes.filter((q) => q.votes > 0);
  }
  worstQuotes() {
    return this.quotes.filter((q) => q.votes < 0);
  }
}
