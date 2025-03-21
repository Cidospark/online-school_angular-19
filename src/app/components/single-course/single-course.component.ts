import { Component, input, output, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-single-course',
  imports: [
    MatGridListModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './single-course.component.html',
  styleUrl: './single-course.component.css'
})
export class SingleCourseComponent {
  course = input<Course>({
    image : '',
    ratings : 0,
    reviews : 0,
    title : '',
    photo : '',
    name : '',
    students : 0,
    hearts : 0,
    id: 0
  })

  passLikedCourseToParent = output<number>();
  
  onHitHeart(id: number){
    this.passLikedCourseToParent.emit(id);
  }
}
