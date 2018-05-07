import { Component, OnInit } from '@angular/core';

import { ItemService } from '../shared/pojazdy.service';

import { Item } from '../shared/pojazdy';

import { Book } from '../shared/pojazdy';

import { Observable } from 'rxjs';

@Component({
  selector: 'pojazdy-list',
  templateUrl: './pojazdy-list.component.html',
  styleUrls: ['./pojazdy-list.component.scss'],
})
export class CalComponent implements OnInit {

  items: Observable<Item[]>;
  books: Observable<Book[]>;
  showSpinner = true;

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItemsList();
    this.books = this.itemService.getBooksList();
  }

  ngOnInit() {
    this.items.subscribe((x) => {
      this.showSpinner = false;
    });
    this.books.subscribe((x) => {
      this.showSpinner = false;
    });
  }

  deleteItems() {
    this.itemService.deleteAll();
  }
}
