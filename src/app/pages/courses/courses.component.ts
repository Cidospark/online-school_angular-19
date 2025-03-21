import { Component, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Course } from '../../models/course.model';
import { SingleCourseComponent } from '../../components/single-course/single-course.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

const ROWS_HEIGHT: {[id:number] : number} = {1:230, 3:470, 4:440}
@Component({
  selector: 'app-courses',
  imports: [
    HeaderComponent,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    SingleCourseComponent,
    PaginationComponent
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  cols = signal(3);
  rowHeight = signal(ROWS_HEIGHT[this.cols()]);
  listOfCourses = signal<Course[]>(
    [{
    image: 'assets/images/banner1.jpg',
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
    image: 'assets/images/banner3.jpg',
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
    image: 'assets/images/banner2.jpg',
    ratings: 5,
    reviews: 12,
    title: 'Learn Javascript from beginner to matery',
    photo: 'person',
    name: 'John Doe',
    students: 20,
    hearts: 10,
    id: 3
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
    id: 4
  }])

  paginatedList = signal<Course[]>([]);

ngOnInit(): void {
  this.paginatedList.set(
    this.listOfCourses().slice(0, 2)
  );
}

  setLikedCourse(id: number){
    this.listOfCourses().map(x => {
      if(x.id == id)
      {
        x.hearts++
      }
    })
  }

  onPaginate(offset:number){
    this.paginatedList.set(
      this.listOfCourses().slice(offset, 2)
    );
  }
}
