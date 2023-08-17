import { CardDetailsComponent } from './card-details/card-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CardListComponent } from './card-list/card-list.component';

const routes: Routes = [
  {
    path: '',
    component: CardListComponent
  },
  {
    path: 'details',
    component: CardDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsPageRoutingModule {}
