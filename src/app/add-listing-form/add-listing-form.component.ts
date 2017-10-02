import { Component, OnInit, ViewChild } from '@angular/core';
import { CardsService } from './../services/cards.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

@ViewChild('newCardForm') newCardForm;

  propertyTypes: Array<String> = ['monster', 'spell', 'Duplex'];
  constructor(public cardsService: CardsService) { }

  ngOnInit() {
  }

  onCardSubmit(data): void {

      this.cardsService.addCard(data);
  }

}
