import { Component, Input } from '@angular/core';
import { ItemService } from '../shared/pojazdy.service';
import { Item } from '../shared/pojazdy';
import { Book } from '../shared/pojazdy';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pojazdy-detail',
  templateUrl: './pojazdy-detail.component.html',
  styleUrls: ['./pojazdy-detail.component.scss'],
})
export class ItemDetailComponent {

  @Input() item: Item;

  constructor(private itemSvc: ItemService) { }

}
