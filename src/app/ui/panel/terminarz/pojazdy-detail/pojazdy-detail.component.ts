import { Component, Input } from '@angular/core';
import { ItemService } from '../shared/pojazdy.service';
import { Item, Book } from '../shared/pojazdy';

@Component({
  selector: 'pojazdy-detail',
  templateUrl: './pojazdy-detail.component.html',
  styleUrls: ['./pojazdy-detail.component.scss'],
})
export class ItemDetailComponent {

  @Input()
  item!: Item;
  @Input()
  book!: Book;

  constructor(private itemSvc: ItemService) { }

  deleteItem() {

    this.itemSvc.deleteItem(this.book.$key);
  }

}
