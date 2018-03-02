import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/auth.service';
import { Item } from '../shared/pojazdy';

import { ItemService } from '../shared/pojazdy.service';

@Component({
  selector: 'pojazdy-form',
  templateUrl: './pojazdy-form.component.html',
  styleUrls: ['./pojazdy-form.component.scss'],
})
export class ItemFormComponent {

  item: Item = new Item();

  constructor(private itemSvc: ItemService) { }
  createItem() {
    this.item.timestamp = Date.now();
    this.itemSvc.createItem(this.item);
    this.item = new Item(); // reset item
  }
}
