import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { ExampleModule } from './example/example.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponentComponent, ExampleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fake-twitter';
}
