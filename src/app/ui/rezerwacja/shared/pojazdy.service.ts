import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { Item } from './pojazdy';

import { Book } from './pojazdy';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {

  private basePath = '/pojazdy';

  itemsRef: AngularFireList<Item>;
  // itemRef:  AngularFireObject<Item>;

  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list('/pojazdy');
  }

  // Return an observable list of Items
  getItemsList(): Observable<Item[]> {
    return this.itemsRef.snapshotChanges().pipe(map((arr) => {
      return arr.map((snap) => Object.assign(snap.payload.val(), { $key: snap.key }) );
    }));
  }

  // Return a single observable item
  getItem(key: string): Observable<Item | null> {
    const itemPath = `${this.basePath}/${key}`;
    const item = this.db.object(itemPath).valueChanges() as Observable<Item | null>;
    return item;
  }

  // Default error handling for all actions
  private handleError(error: Error) {
    console.error(error);
  }
}
