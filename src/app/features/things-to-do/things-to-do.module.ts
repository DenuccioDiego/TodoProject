import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingsToDoContainerComponent } from './componets/things-to-do-container/things-to-do-container.component';
import { ThingsToDoListItemComponent } from './componets/things-to-do-list-item/things-to-do-list-item.component';
import { ThingsToDoDetailItemComponent } from './componets/things-to-do-detail-item/things-to-do-detail-item.component';
import { ThingsToDoNewItemComponent } from './componets/things-to-do-new-item/things-to-do-new-item.component';
import { ThingsToDoEditItemComponent } from './componets/things-to-do-edit-item/things-to-do-edit-item.component';
import { ThingsToDoRoutingModule } from './things-to-do-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ThingsToDoContainerComponent,
    ThingsToDoListItemComponent,
    ThingsToDoDetailItemComponent,
    ThingsToDoNewItemComponent,
    ThingsToDoEditItemComponent
  ],
  imports: [
    CommonModule,
    ThingsToDoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ThingsToDoModule { }
