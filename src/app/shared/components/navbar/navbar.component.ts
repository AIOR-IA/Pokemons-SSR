import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  public paths = [
    {
      name: 'About',
      path: 'about'
    },
    {
      name: 'Contact',
      path: 'contact'
    },
    {
      name: 'Pricing',
      path: 'price'
    }
  ]

}
