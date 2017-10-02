import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class CardsService {

  public newCardsSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllCards() {
    return this.http.get('data/cards.json').map(res => res.json());
  }

  addCard(data) {
    data.image = 'default-crib';
    this.newCardsSubject.next(data);
  }

}
