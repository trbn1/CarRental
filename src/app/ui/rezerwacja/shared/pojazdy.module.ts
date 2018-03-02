import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from '../../../shared/shared.module';

import { ItemService } from './pojazdy.service';

import { BookComponent } from '../pojazdy-list/pojazdy-list.component';
import { ItemFormComponent } from '../pojazdy-form/pojazdy-form.component';
import { ItemDetailComponent } from '../pojazdy-detail/pojazdy-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    BookComponent,
    ItemFormComponent,
    ItemDetailComponent,
  ],
  providers: [
    ItemService,
  ],
})
export class BookModule { }
