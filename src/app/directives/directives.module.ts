import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';



@NgModule({
  declarations: [
    DirectivesComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    DirectivesComponent
  ]
})
export class DirectivesModule { }
