import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../shared/pojazdy';
import { Book } from '../shared/pojazdy';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { ItemService } from '../shared/pojazdy.service';

@Component({
  selector: 'pojazdy-form',
  templateUrl: './pojazdy-form.component.html',
  styleUrls: ['./pojazdy-form.component.scss'],
})
export class ItemFormComponent {

  @Input() timestamp: number;

  private basePath = '/rezerwacje';

  book: Book = new Book();

      booksRef: AngularFireList<Book>;
      bookRef:  AngularFireObject<Book>;

      constructor(private db: AngularFireDatabase) {
        this.booksRef = db.list('/rezerwacje');
      }


      // Default error handling for all actions
      private handleError(error: Error) {
        console.error(error);
      }

      createBook() {
        this.book.timestamp = this.timestamp;
        this.createBook2(this.book);
        this.book = new Book(); // reset item
      }
      
      // Create a brand new item
      createBook2(book: Book): void {
        this.booksRef.push(book);
      }
      

}
