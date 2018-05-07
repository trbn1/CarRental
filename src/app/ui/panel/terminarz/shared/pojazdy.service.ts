import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { Item, Book } from './pojazdy';

import { Observable } from 'rxjs';

@Injectable()
export class ItemService {

  itemsRef: AngularFireList<Item>;
  // itemRef:  AngularFireObject<Item>;

  booksRef: AngularFireList<Book>;
  // bookRef:  AngularFireObject<Book>;

  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list('/pojazdy');
    this.booksRef = db.list('/rezerwacje');
  }

  // Return an observable list of Items
  getItemsList(): Observable<Item[]> {
    return this.itemsRef.snapshotChanges().pipe(map((arr) => {
      return arr.map((snap) => Object.assign(snap.payload.val(), { timestamp: snap.key }) );
    }));
  }

  getBooksList(): Observable<Book[]> {
    return this.booksRef.snapshotChanges().pipe(map((arr) => {
      return arr.map((snap) => Object.assign(snap.payload.val(), { timestamp: snap.key }) );
    }));
  }

  // Deletes a single item
  deleteItem(key: string): void {
    this.booksRef.remove(key);
  }

  // Deletes the entire list of items
  deleteAll(): void {
    this.booksRef.remove();
  }

  // Default error handling for all actions
  private handleError(error: Error) {
    console.error(error);
  }
}
