import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotation } from './../models/quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() newQuotation = new EventEmitter<Quotation>();
  disabled: string = 'disabled';
  addButton: boolean = false;
  quotation: Quotation = {
    author: '',
    quotation: '',
    votes: 0,
  };
  constructor() {}

  ngOnInit(): void {}

  addQuotation() {
    // this.quotes.unshift(this.quotation);
    this.newQuotation.emit(this.quotation);
    this.quotation = { author: '', quotation: '', votes: 0 };
  }

  showAdd() {
    this.addButton = !this.addButton;
    console.log(this.addButton);
  }
}
