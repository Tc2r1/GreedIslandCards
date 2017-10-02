import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CardListingComponent } from './card-listing/card-listing.component';
import { DataCardComponent } from './data-card/data-card.component';

import { CardsService } from './services/cards.service';
import { UtilService } from './services/util.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardListingComponent,
    DataCardComponent,
    AddListingFormComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [CardsService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
