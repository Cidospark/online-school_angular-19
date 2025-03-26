import { Component } from '@angular/core';
import { ThumbnailComponent } from '../thumbnail/thumbnail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tab-comp-reviews',
  imports: [
    ThumbnailComponent,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './tab-comp-reviews.component.html',
  styleUrl: './tab-comp-reviews.component.css'
})
export class TabCompReviewsComponent {
  reviewers = [{
    name: {text:"Candy Hox", size: "text-sx"},
    position:  "Senior Software Engineer",
    photoUrl: {text:"assets/images/r-2.jpg", size: "w-[50px]"},
    socials: [],
    date: "",
    desc: `Wow!, I love this.`
  },{
    name: {text:"Mike Sanders", size: "text-sx"},
    position:  "Junior Software Engineer",
    photoUrl: {text:"assets/images/r-2.jpg", size: "w-[50px]"},
    socials: [],
    date: "",
    desc: `Very well currated, love it!`
  },{
    name: {text:"John Doe", size: "text-sx"},
    position:  "Mid-level Software Engineer",
    photoUrl: {text:"assets/images/r-2.jpg", size: "w-[50px]"},
    socials: [],
    date: "",
    desc: `There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration in some form, 
          by injected humour, or randomised words which.`
  }]
}
