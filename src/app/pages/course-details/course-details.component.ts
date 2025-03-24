import { Component, signal } from '@angular/core';
import { CoursePageHeaderComponent } from "../../components/course-page-header/course-page-header.component";
import { MatIconModule } from '@angular/material/icon';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-course-details',
  imports: [CoursePageHeaderComponent, MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  subTitle = "Single Course"
  course = signal<Course>({
    image: 'assets/images/banner1.jpg',
    ratings: 5,
    reviews: 12,
    title: 'Learn Javascript from beginner to matery Learn Javascript from beginner to matery Learn Javascript from beginner to matery',
    photo: 'person',
    name: 'John Doe',
    students: 20,
    hearts: 10,
    id: 1
  })
}
