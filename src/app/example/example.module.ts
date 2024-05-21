import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';



@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExampleComponent
  ], 
  providers: [
    // Servicios
  ],
  bootstrap: [
    // app.component.ts
  ]
})
export class ExampleModule { }
