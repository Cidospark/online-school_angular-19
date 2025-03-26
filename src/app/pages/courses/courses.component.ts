import { Component, OnInit, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Course } from '../../models/course.model';
import { SingleCourseComponent } from '../../components/single-course/single-course.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { PageOpt } from '../../models/pageOpt.models';
import { CoursePageHeaderComponent } from '../../components/page-header/page-header.component';
import { CommonModule } from '@angular/common';

const ROWS_HEIGHT: {[id:number] : number} = {1:230, 3:470}
@Component({
  selector: 'app-courses',
  imports: [
    CoursePageHeaderComponent,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    SingleCourseComponent,
    PaginationComponent,
    CommonModule
],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  cols = signal(3);
  gutterSize = 60;
  rowHeight = signal(ROWS_HEIGHT[this.cols()]);
  subTitle = "Our Courses";
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
    image: 'assets/images/banner1.jpg',
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
    image: 'assets/images/banner3.jpg',
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
  totalCourses = 0;

  interval = null;

ngOnInit(): void {
  this.gutterSize = this.cols() == 1? 20 : 60;
  if(this.interval) {
    clearInterval(this.interval);
}
  this.interval = setInterval(() => {
    this.totalCourses = this.listOfCourses().length;
  }, 700);
}

setLikedCourse(id: number){
  this.listOfCourses().map(x => {
    if(x.id == id)
      {
        x.hearts++
      }
    })
  }
  
  onPaginate(pageOpt:PageOpt){
    this.paginatedList.set(
      this.listOfCourses().slice(pageOpt.offset, pageOpt.size)
    );
  }

  onColumnsUpdated(colsNum: number): void{
      this.cols.set(colsNum);
      this.gutterSize = this.cols() == 1? 20 : 60;
      this.rowHeight.set(ROWS_HEIGHT[this.cols()]);
  }
}
