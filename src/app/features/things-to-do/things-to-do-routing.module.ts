import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThingsToDoContainerComponent } from './componets/things-to-do-container/things-to-do-container.component';
import { ThingsToDoDetailItemComponent } from './componets/things-to-do-detail-item/things-to-do-detail-item.component';
import { ThingsToDoEditItemComponent } from './componets/things-to-do-edit-item/things-to-do-edit-item.component';
import { ThingsToDoNewItemComponent } from './componets/things-to-do-new-item/things-to-do-new-item.component';

const routes: Routes = [
  { path: '', component: ThingsToDoContainerComponent },
  { path: 'show/:toDoId', component: ThingsToDoDetailItemComponent },
  { path: 'edit/:toDoId', component: ThingsToDoEditItemComponent },
  { path: 'create', component: ThingsToDoNewItemComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ThingsToDoRoutingModule { }
