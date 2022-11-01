import { Component } from '@angular/core';
import { QUOTES } from './models/data-base';
import { Quotation } from './models/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = ['item1', 'item2', 'item3', 'item4'];
  title: string = '';
  quotes: Quotation[] = QUOTES;

  titleWorst: string = 'Najgorsze cycaty';
  titleBest: string = 'Najlepsze cytaty';

  // countVote(addOdd: number, index: number) {
  //   this.quotes[index].votes += addOdd;
  // }

  bestQuotes() {
    return this.quotes.filter((q) => q.votes > 0);
  }
  worstQuotes() {
    return this.quotes.filter((q) => q.votes < 0);
  }
  onNewQuotation(event: Quotation) {
    this.quotes.unshift(event);
  }
  // voteValue($event: number, index: number) {
  //   // console.log($event);
  //   console.log(index);
  //   this.quotes[index].votes += $event;
  // }

  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }
}
