import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { ExampleModule } from './example/example.module';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { DirectivesModule } from './directives/directives.module';
import { HighlightDirective } from './highlight/highlight.directive';
import { FatherComponent } from './father/father.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponentComponent, ExampleModule, InterpolationComponent, DirectivesModule, HighlightDirective, FatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fake-twitter';
}
