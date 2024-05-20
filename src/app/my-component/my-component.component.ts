import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
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
    console.log("He cambiado!")
  }
}
