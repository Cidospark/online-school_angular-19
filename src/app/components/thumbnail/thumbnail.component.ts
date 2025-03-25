import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-thumbnail',
  imports: [
    MatIconModule
  ],
  templateUrl: './thumbnail.component.html',
  styleUrl: './thumbnail.component.css'
})
export class ThumbnailComponent {
  user:any = {
    name: {text:"Francis Ibe", size: "text-2xl"},
    position:  "Senior Software Engineer",
    photoUrl: {text:"assets/images/r-2.jpg", size: "w-[150px]"},
    socials: [ "facebook"],
    date: "",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Delectus fuga ratione molestiae unde provident quibusdam sunt, doloremque. 
    Error omnis mollitia, ex dolor sequi. Et, quibusdam excepturi. 
    Animi assumenda, consequuntur dolorum odio sit inventore aliquid, optio fugiat alias. 
    Veritatis minima, dicta quam repudiandae repellat non sit, distinctio, impedit, expedita tempora numquam?`
  }
}
