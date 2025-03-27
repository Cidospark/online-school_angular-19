import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { StatItem } from '../../models/stateItem.model';
import { StatsItemComponent } from '../../components/stats-item/stats-item.component';
import { Course } from '../../models/course.model';
import { SingleCourseComponent } from '../../components/single-course/single-course.component';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    MatGridListModule,
    MatIconModule,
    StatsItemComponent,
    SingleCourseComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  courseService = inject(CourseService);

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
    title: 'Global Instructors'
  }]);
  
  featuredCourses = signal<Course[]>([])
  
  ngOnInit(): void {
    let courses = this.courseService.GetListOfCourses();
    if(courses && courses.length>0){
      this.featuredCourses.set(courses.slice(0,3));
    }
  }
}
