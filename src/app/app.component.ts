import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Course } from './models/course.model';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'online_school';
  courseService = inject(CourseService);
  ngOnInit(): void {
    let courses = this.courseService.GetListOfCourses();
console.log(courses)

    if(!courses || courses.length < 1){
console.log("!courses")
      localStorage.setItem("courses", JSON.stringify([{
        image: 'assets/images/banner1.jpg',
        ratings: 5,
        reviews: 1,
        title: 'Learn Javascript from beginner to mastery',
        photo: 'person',
        name: 'John Doe',
        students: 100,
        hearts: 11,
        id: 1
      },
      {
        image: 'assets/images/banner3.jpg',
        ratings: 5,
        reviews: 12,
        title: 'Learn Javascript from beginner to matery',
        photo: 'person',
        name: 'John Doe',
        students: 30,
        hearts: 10,
        id: 2
      },
      {
        image: 'assets/images/banner2.jpg',
        ratings: 5,
        reviews: 3,
        title: 'Learn Javascript from beginner to matery',
        photo: 'person',
        name: 'John Doe',
        students: 10,
        hearts: 12,
        id: 3
      },
      {
        image: 'assets/images/banner3.jpg',
        ratings: 5,
        reviews: 0,
        title: 'Learn Javascript from beginner to matery',
        photo: 'person',
        name: 'John Doe',
        students: 20,
        hearts: 15,
        id: 4
      }]));
    }else{
      console.log(courses)
      localStorage.setItem('courses', JSON.stringify(courses));
    }
  }
}
