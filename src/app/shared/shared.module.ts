import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSelectorComponent } from './components/common-selector/common-selector.component';
import { BackHomeComponent } from './components/back-home/back-home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CommonSelectorComponent,
    BackHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonSelectorComponent,
    BackHomeComponent
  ]
})
export class SharedModule { }
