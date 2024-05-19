import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from 'angular-bootstrap-md';
import {BodyComponent} from './Components/Home/body/body.component';
import {FooterComponent} from './Components/Home/footer/footer.component';
import {SidenavComponent} from './Components/dashboard/sidenav/sidenav.component';
import {AuthorizationGuard} from './guards/authorization.guard';
import {MyCoursesComponent} from './Components/dashboard/my-courses/my-courses.component';
import {CourseComponent} from './Components/dashboard/course/course.component';
import {AddCourseComponent} from './Components/dashboard/add-course/add-course.component';
import {LastCoursesComponent} from './Components/dashboard/last-courses/last-courses.component';
import {CatalogComponent} from './Components/dashboard/catalog/catalog.component';
import {ModifyCourseComponent} from './Components/dashboard/modify-course/modify-course.component';
import {UplodedCoursesComponent} from './Components/dashboard/uploded-courses/uploded-courses.component';

const routes: Routes = [
  {
  path: '',
  component: BodyComponent
  },
  {
    path: 'main',
    component: SidenavComponent,
    canActivate: [AuthorizationGuard],
    children: [
      {
        path: '',
        component: LastCoursesComponent
      },
      {
        path: 'myCourses',
        component: MyCoursesComponent,
      },
      {
        path: 'course/:id',
        component: CourseComponent
      },
      {
        path: 'addCourse',
        component: AddCourseComponent
      },
      {
        path: 'catalog',
        component: CatalogComponent
      },
      {
        path: 'modify/:id',
        component: ModifyCourseComponent
      },
      {
        path: 'uploaded',
        component: UplodedCoursesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
