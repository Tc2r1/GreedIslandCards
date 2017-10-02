import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CardsService } from './../services/cards.service';
import { Card } from './../card';
import { UtilService } from './../services/util.service';


@Component({
    selector: 'app-card-listing',
    templateUrl: './card-listing.component.html',
    styleUrls: ['./card-listing.component.css']
})

export class CardListingComponent implements OnInit {

    cards: Array < any > ;
    error: string = '';
    sortField: string = 'id';
    sortDirection: string = 'asc';
    sortFields: Array < string > = [
        'id',
        'name',
        'rank',
        'limit',
        'description',
        'image',
        'type'

    ];

    constructor(
        private http: Http,
        private cardsService: CardsService,
        private utilService: UtilService) {}

    ngOnInit() {

        this.cardsService.getAllCards()
            .subscribe(
                data => this.cards = data,
                error => this.error = error.statusText
            );

        this.cardsService.newCardsSubject.subscribe(
            data => this.cards = [data, ...this.cards]
        );
    }

}