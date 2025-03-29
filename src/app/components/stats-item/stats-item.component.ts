import { Component, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-stats-item',
  imports: [
    MatIconModule,
    CommonModule,
    MatCardModule
  ],
  templateUrl: './stats-item.component.html',
  styleUrl: './stats-item.component.css'
})
export class StatsItemComponent {
  icon = input('');
  statistic = input(0);
  title = input('');
}
