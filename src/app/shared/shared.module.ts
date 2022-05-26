import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSelectorComponent } from './components/common-selector/common-selector.component';



@NgModule({
  declarations: [
    CommonSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonSelectorComponent
  ]
})
export class SharedModule { }
