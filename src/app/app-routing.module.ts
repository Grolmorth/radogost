import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';

import { KonertyCreateComponent } from './koncerty/konerty-create/konerty-create.component';
import { KonertyListComponent } from './koncerty/konerty-list/konerty-list.component';

import { KontaktComponent } from './kontakt/kontakt.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { DyskografiaComponent } from './dyskografia/dyskografia.component';
import { KoncertyPublicComponent } from './koncerty/koncerty-public/koncerty-public.component';





const routes: Routes = [

  {
    path: '',
    redirectTo: '/info',
    pathMatch: 'full'
  },
  {
    path: 'info',
    component: InfoComponent
  },
  { path: 'Kontakt', component: KontaktComponent },

  { path: 'dodajkoncert', component: KonertyCreateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'dyskografia', component: DyskografiaComponent },


  { path: 'Koncerty', component: KoncertyPublicComponent },
  { path: 'AddKoncert', component: KonertyCreateComponent },
  { path: '**', component: InfoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
