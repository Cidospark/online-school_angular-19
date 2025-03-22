import { Component } from '@angular/core';
import { CoursePageHeaderComponent } from "../../components/course-page-header/course-page-header.component";

@Component({
  selector: 'app-course-details',
  imports: [CoursePageHeaderComponent],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  subTitle = ""
}
