import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MyComponentHeaderComponent } from './my-component-header/my-component-header.component';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [MyComponentHeaderComponent],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  // constructor ---> onInit ---> AfterViewInit

  constructor() {
    console.log("Me he construido");
  }

   public ngOnInit(): void {
    console.log("Me he inicializado")
  }
   public ngOnDestroy(): void {
    console.log("Me he Destruido")
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log("He cambiado!")
  }
  public ngAfterViewInit(): void {
    console.log("La vista se ha inicializado!")
  }
}
