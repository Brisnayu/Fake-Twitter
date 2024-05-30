import { Component } from '@angular/core';
import { users } from './list-items.config';
import { User } from './user.models';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  public showContent: boolean = true;
  public names: string[] = ['Brisna', 'Miguel', 'Hera'];
  public users: User[] = users;

  public selectUser(user: User) {
    user.isSelect = !user.isSelect;
  }
}
