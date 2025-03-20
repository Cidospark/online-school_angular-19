import { Component, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-header',
  imports: [
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = signal<string>('ED ACADEMY');
  showToggleButton= signal<boolean>(false);
}
