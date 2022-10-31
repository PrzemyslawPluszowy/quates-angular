import { Component, OnInit, Input } from '@angular/core';
import { Quotation } from './../models/quote';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent {
  constructor() {
    this.bestQuotes = [];
    this.title = '';
  }
  @Input()
  bestQuotes: Quotation[];
  @Input()
  title: string;
}
