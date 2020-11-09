import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { KonertyCreateComponent } from './koncerty/konerty-create/konerty-create.component';
import { KonertyEditComponent } from './koncerty/konerty-edit/konerty-edit.component';
import { KonertyListComponent } from './koncerty/konerty-list/konerty-list.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LoginComponent } from './login/login.component';

import { DyskografiaComponent } from './dyskografia/dyskografia.component';
import { FooterComponent } from './footer/footer.component';
import { KoncertyPublicComponent } from './koncerty/koncerty-public/koncerty-public.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    KonertyCreateComponent,
    KonertyEditComponent,
    KonertyListComponent,
    KontaktComponent,
    LoginComponent,
    DyskografiaComponent,
    FooterComponent,
    KoncertyPublicComponent,
    HeaderComponent,
    NavComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, NgbModule, BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
