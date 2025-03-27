import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public GetListOfCourses(): Course[]{
    const json = localStorage.getItem('courses') ?? '[]';
    if(json)
      return JSON.parse(json) as Course[];
    return [];
  }

  public GetSingleCourse(id:number): Course{
    let result: Course;
    let courses = this.GetListOfCourses();
    if(courses)
      result = courses.find(x => x.id == id);
    return result;
  }

  public LikeACourse(course:Course): Course{
    let result: Course;
    let courses = this.GetListOfCourses();
    if(courses){
      course.hearts += 1;
      let newCourses = courses.map(c => {
        if(c.id == course.id)
        {
          c = course;
        }
        return c;
      })
      console.log(newCourses);
      localStorage.setItem('courses', JSON.stringify(newCourses));
      result = course;
    }
    return result;
  }
}
