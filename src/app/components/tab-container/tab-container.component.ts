import { Component, input, OnInit } from '@angular/core';
import { TabCompOverviewComponent } from "../tab-comp-overview/tab-comp-overview.component";
import { TabCompCurriculumComponent } from "../tab-comp-curriculum/tab-comp-curriculum.component";
import { TabCompInstructorComponent } from "../tab-comp-instructor/tab-comp-instructor.component";
import { TabCompReviewsComponent } from "../tab-comp-reviews/tab-comp-reviews.component";
import { CommonModule } from '@angular/common';
import { KVP } from '../../models/KVP.model';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-tab-container',
  imports: [TabCompOverviewComponent, TabCompCurriculumComponent, TabCompInstructorComponent, TabCompReviewsComponent, CommonModule],
  templateUrl: './tab-container.component.html',
  styleUrl: './tab-container.component.css'
})
export class TabContainerComponent implements OnInit {

  activeTab: string ='';
  course = input<Course>();

  tabs:Array<KVP<string, boolean>> = [
    {key:'Overview', value: true},
    {key:'Curriculum', value: false},
    {key:'Instructor', value: false},
    {key:'Reviews', value: false},
  ];

  ngOnInit(): void {
    this.activeTab = this.tabs.filter(x => x.value==true)[0].key;
    
  }

  setAsActiveTab(key:string):void{
    this.tabs.map(x => {
      if(x.key==key){x.value=true; this.activeTab = x.key;}
      else{x.value=false}
    })
  }

}
