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

    if(!courses || courses.length < 1){
      localStorage.setItem("courses", JSON.stringify([{
        image: 'assets/images/banner1.jpg',
        ratings: 5,
        reviews: 1,
        title: 'Learn Javascript from beginner to mastery',
        photo: 'person',
        name: 'John Doe',
        students: 100,
        hearts: 11,
        id: 1,
        duration: '11 hrs',
        lectures:8,
        quizes:5,
        category:'Programming',
        price:10
      },
      {
        image: 'assets/images/banner3.jpg',
        ratings: 5,
        reviews: 12,
        title: 'Learn Javascript from beginner to matery',
        photo: 'person',
        name: 'Mark Huffman',
        students: 30,
        hearts: 10,
        id: 2,
        duration: '3 hrs',
        lectures:5,
        quizes:3,
        category:'Programming',
        price:15
      },
      {
        image: 'assets/images/banner2.jpg',
        ratings: 5,
        reviews: 3,
        title: 'Learn Javascript from beginner to matery',
        photo: 'person',
        name: 'Louis Lee',
        students: 10,
        hearts: 12,
        id: 3,
        duration: '12 hrs',
        lectures:5,
        quizes:10,
        category:'Programming',
        price:50
      },
      {
        image: 'assets/images/banner3.jpg',
        ratings: 5,
        reviews: 0,
        title: 'Learn Javascript from beginner to matery',
        photo: 'person',
        name: 'Van Hack',
        students: 20,
        hearts: 15,
        id: 4,
        duration: '5 hrs',
        lectures:8,
        quizes:5,
        category:'Programming',
        price:25
      }]));
    }else{
      localStorage.setItem('courses', JSON.stringify(courses));
    }
  }
}
