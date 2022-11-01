import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Quotation } from './../models/quote';
import { QUOTES } from './../models/data-base';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
})
export class QuoteListComponent implements OnInit {
  constructor() {
    this.quotes = [];
  }
  @Input() quotes: Quotation[];
  @Output() vote = new EventEmitter<QuotationEvent>();

  addVote(quotation: Quotation, value: number) {
    this.vote.emit({ quotation, value });
  }
  ngOnInit(): void {}
}
export interface QuotationEvent {
  quotation: Quotation;
  value: number;
}
