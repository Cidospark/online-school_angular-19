import { Component, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [
    MatIconModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = signal<string>('ED ACADEMY');
  showToggleButton= signal<boolean>(false);
}
