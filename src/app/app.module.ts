import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RankingComponent } from './ranking/ranking.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { VoteButtonComponent } from './vote-button/vote-button.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, RankingComponent, FormComponent, ButtonComponent, VoteButtonComponent, QuoteListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
