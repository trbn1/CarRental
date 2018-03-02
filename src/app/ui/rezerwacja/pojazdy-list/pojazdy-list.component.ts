import { Component, OnInit } from '@angular/core';

import { ItemService } from '../shared/pojazdy.service';

import { Item } from '../shared/pojazdy';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pojazdy-list',
  templateUrl: './pojazdy-list.component.html',
  styleUrls: ['./pojazdy-list.component.scss'],
})
export class BookComponent implements OnInit {

  items: Observable<Item[]>;
  showSpinner = true;

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItemsList();
  }

  ngOnInit() {
    this.items.subscribe((x) => {
      this.showSpinner = false;
    });
  }

}
