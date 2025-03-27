import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-thumbnail',
  imports: [
    MatIconModule,
    CommonModule
  ],
  templateUrl: './thumbnail.component.html',
  styleUrl: './thumbnail.component.css'
})
export class ThumbnailComponent {
  componentName = input<string>('');
  user:any = input({
    name: {text:"", size: ""},
    position:  "",
    photoUrl: {text:"", size: ""},
    socials: [ ""],
    date: "",
    desc: ``
  })
}
