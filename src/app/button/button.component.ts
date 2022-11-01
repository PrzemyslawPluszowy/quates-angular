import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  constructor() {
    this.customClasses = '';
    this.disabled = true;
  }
  @Output() addButton = new EventEmitter<void>();
  @Input() customClasses: string;
  @Input() disabled: boolean;
}
