import { Component } from '@angular/core';
import { ThumbnailComponent } from "../thumbnail/thumbnail.component";

@Component({
  selector: 'app-tab-comp-instructor',
  imports: [ThumbnailComponent],
  templateUrl: './tab-comp-instructor.component.html',
  styleUrl: './tab-comp-instructor.component.css'
})
export class TabCompInstructorComponent {
  user:any = {
    name: {text:"Francis Ibe", size: "text-2xl"},
    position:  "Senior Software Engineer",
    photoUrl: {text:"assets/images/r-2.jpg", size: "200"},
    socials: [ "facebook"],
    date: "",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Delectus fuga ratione molestiae unde provident quibusdam sunt, doloremque. 
    Error omnis mollitia, ex dolor sequi. Et, quibusdam excepturi. 
    Animi assumenda, consequuntur dolorum odio sit inventore aliquid, optio fugiat alias. 
    Veritatis minima, dicta quam repudiandae repellat non sit, distinctio, impedit, expedita tempora numquam?`
  }

  constructor(){
    console.log(this.user);
  }
}
