import { Component } from '@angular/core';
import { SonComponent } from './son/son.component';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [SonComponent],
  templateUrl: './father.component.html',
  styleUrl: './father.component.scss'
})
export class FatherComponent {
  public message: string = 'Hola desde el componente padre';

  public handleMessage(message: string) {
    console.log(message);
  }
}
