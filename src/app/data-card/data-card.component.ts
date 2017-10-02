import { Component, OnInit, Input } from '@angular/core';
import { Card } from './../card';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

    @Input('card') card: any;

    constructor() { }


  ngOnInit() {
  }

}
