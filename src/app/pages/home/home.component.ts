import { Component, signal } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { StatItem } from '../../models/stateItem.model';
import { StatsItemComponent } from '../../components/stats-item/stats-item.component';
import { Course } from '../../models/course.model';
import { SingleCourseComponent } from '../../components/single-course/single-course.component';

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
    title: 'Global Instructors'
  }]);

  featuredCourses = signal<Course[]>(
      [{
      image: 'assets/images/banner3.jpg',
      ratings: 5,
      reviews: 12,
      title: 'Learn Javascript from beginner to matery',
      photo: 'person',
      name: 'John Doe',
      students: 20,
      hearts: 10,
      id: 1
    },
    {
      image: 'assets/images/banner1.jpg',
      ratings: 5,
      reviews: 12,
      title: 'Learn Javascript from beginner to matery',
      photo: 'person',
      name: 'John Doe',
      students: 20,
      hearts: 10,
      id: 2
    },
    {
      image: 'assets/images/banner3.jpg',
      ratings: 5,
      reviews: 12,
      title: 'Learn Javascript from beginner to matery',
      photo: 'person',
      name: 'John Doe',
      students: 20,
      hearts: 10,
      id: 3
    }])


  setLikedCourse(id: number){
    this.featuredCourses().map(x => {
      if(x.id == id)
        {
          x.hearts++
        }
      })
    }
}
