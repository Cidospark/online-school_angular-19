import { Component, signal } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { StatItem } from '../../models/stateItem.model';
import { StatsItemComponent } from '../../components/stats-item/stats-item.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    MatGridListModule,
    MatIconModule,
    StatsItemComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  statItems = signal<StatItem[]>([{
    icon: 'school',
    statistics: 20000,
    title: 'Students Enrolled'
  },{
    icon: 'menu_book',
    statistics: 120000,
    title: 'Courses Uploaded'
  },{
    icon: 'people',
    statistics: 5000,
    title: 'Global Teachers'
  }]);
}
