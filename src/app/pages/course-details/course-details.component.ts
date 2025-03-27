import { Component, inject, OnInit, output, signal } from '@angular/core';
import { CoursePageHeaderComponent } from "../../components/page-header/page-header.component";
import { MatIconModule } from '@angular/material/icon';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { TabCompCurriculumComponent } from '../../components/tab-comp-curriculum/tab-comp-curriculum.component';
import { TabCompOverviewComponent } from '../../components/tab-comp-overview/tab-comp-overview.component';
import { TabCompInstructorComponent } from '../../components/tab-comp-instructor/tab-comp-instructor.component';
import { TabCompReviewsComponent } from '../../components/tab-comp-reviews/tab-comp-reviews.component';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { TabContainerComponent } from "../../components/tab-container/tab-container.component";

@Component({
  selector: 'app-course-details',
  imports: [
    MatGridListModule,
    CoursePageHeaderComponent,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    TabContainerComponent
],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {

  courseService = inject(CourseService);

  subTitle = "Single Course"
  course = signal<Course>({
    image : '',
    ratings : 0,
    reviews : 0,
    title : '',
    photo : '',
    name : '',
    students : 0,
    hearts : 0,
    id: 0,
    duration: '',
    lectures:0,
    quizes:0,
    category:'',
    price: 0
  });
  
  routeId:number;
  
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(p => this.routeId=p['id'])
  }
  ngOnInit(): void {
    // this.activeTab = this.tabs.filter(x => x.value == true).keys[0]
    this.course.set(this.courseService.GetSingleCourse(this.routeId));
  }

  likeCourse(){
    let liked = this.courseService.LikeACourse(this.course());
    if(liked)
      this.course().hearts = liked.hearts;
  }


}
