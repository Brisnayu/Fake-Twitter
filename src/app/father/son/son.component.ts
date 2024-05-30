import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-son',
  standalone: true,
  imports: [],
  templateUrl: './son.component.html',
  styleUrl: './son.component.scss'
})
export class SonComponent {
  @Input() public message: string = '';
}
