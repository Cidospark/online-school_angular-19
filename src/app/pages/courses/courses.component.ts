import { Component, inject, OnInit, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Course } from '../../models/course.model';
import { SingleCourseComponent } from '../../components/single-course/single-course.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { PageOpt } from '../../models/pageOpt.models';
import { CoursePageHeaderComponent } from '../../components/page-header/page-header.component';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';

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
  courseService = inject(CourseService)
  cols = signal(3);
  gutterSize = 60;
  rowHeight = signal(ROWS_HEIGHT[this.cols()]);
  subTitle = "Our Courses";
  listOfCourses = signal<Course[]>([])

  paginatedList = signal<Course[]>([]);
  totalCourses = 0;

  interval = null;

ngOnInit(): void {
  this.listOfCourses.set(this.courseService.GetListOfCourses())
  this.gutterSize = this.cols() == 1? 20 : 60;
  if(this.interval) {
    clearInterval(this.interval);
}
  this.interval = setInterval(() => {
    this.totalCourses = this.listOfCourses().length;
  }, 700);
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
