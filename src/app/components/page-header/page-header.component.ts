import { Component, input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-course-page-header',
  imports: [
    HeaderComponent
  ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class CoursePageHeaderComponent {
  subTitle = input<string>();
}
