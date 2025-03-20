import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: "home",
        loadComponent: ()=>{
            return import("./pages/home/home.component").then((p)=>p.HomeComponent)
        }
    },
    {
        path: "courses",
        loadComponent: ()=>{
            return import("./pages/courses/courses.component")
            .then((p)=>p.CoursesComponent)
        }
    }
];
