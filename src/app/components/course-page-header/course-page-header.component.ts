import { Component, input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-course-page-header',
  imports: [
    HeaderComponent
  ],
  templateUrl: './course-page-header.component.html',
  styleUrl: './course-page-header.component.css'
})
export class CoursePageHeaderComponent {
  subTitle = input<string>();
}
