import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.scss'
})
export class InterpolationComponent {
  public name: string = 'Jaime';
  public imageUrl: string = 'https://i.pinimg.com/564x/bd/74/90/bd749076a060fb210df83e33b1cf0c19.jpg';
  public hour: number = 13;

  public handleClick(event: Event) {
    console.log((event.target as HTMLElement).textContent);
    console.log('Se hizo click sobre el botón');
  }
}
