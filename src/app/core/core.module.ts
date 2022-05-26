import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoService } from './services/to-do.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ToDoService]
})
export class CoreModule { }
