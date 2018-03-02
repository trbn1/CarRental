import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsListComponent } from './ui/panel/pojazdy/pojazdy-list/pojazdy-list.component';
import { CalComponent } from './ui/panel/terminarz/pojazdy-list/pojazdy-list.component';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { NoteComponent } from './ui/oferta/oferta.component';
import { BookComponent } from './ui/rezerwacja/pojazdy-list/pojazdy-list.component';
import { ContactComponent } from './ui/kontakt/kontakt.component';
import { LandingPageComponent } from './ui/landing-page/landing-page.component';

import { AuthGuard } from './core/auth.guard';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'oferta', component: NoteComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'rezerwacja', component: BookComponent },
  { path: 'panel/pojazdy', component: ItemsListComponent,  canActivate: [AuthGuard] },
  { path: 'panel/terminarz', component: CalComponent,  canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
