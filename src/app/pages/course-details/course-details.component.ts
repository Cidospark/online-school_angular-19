import { Component, OnInit, output, signal } from '@angular/core';
import { CoursePageHeaderComponent } from "../../components/page-header/page-header.component";
import { MatIconModule } from '@angular/material/icon';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { KVP } from '../../models/KVP.model';
import { TabCompCurriculumComponent } from '../../components/tab-comp-curriculum/tab-comp-curriculum.component';
import { TabCompOverviewComponent } from '../../components/tab-comp-overview/tab-comp-overview.component';
import { TabCompInstructorComponent } from '../../components/tab-comp-instructor/tab-comp-instructor.component';
import { TabCompReviewsComponent } from '../../components/tab-comp-reviews/tab-comp-reviews.component';

@Component({
  selector: 'app-course-details',
  imports: [
    MatGridListModule,
    CoursePageHeaderComponent, 
    MatIconModule, 
    CommonModule, 
    MatButtonModule,
    TabCompOverviewComponent,
    TabCompCurriculumComponent,
    TabCompInstructorComponent,
    TabCompReviewsComponent
  ],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
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
  });
  
  activeTab: string ='';
  tabs:Array<KVP<string, boolean>> = [
    {key:'Overview', value: true},
    {key:'Curriculum', value: false},
    {key:'Instructor', value: false},
    {key:'Reviews', value: false},
  ];

  ngOnInit(): void {
    // this.activeTab = this.tabs.filter(x => x.value == true).keys[0]
    this.activeTab = this.tabs.filter(x => x.value==true)[0].key;
  }


  setAsActiveTab(key:string):void{
    this.tabs.map(x => {
      if(x.key==key){x.value=true; this.activeTab = x.key;}
      else{x.value=false}
    })
  }

  passLikedCourseToParent = output<number>();
  onHitHeart(id: number){
    this.passLikedCourseToParent.emit(id);
  }
}
