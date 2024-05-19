import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './Components/Home/nav-bar/nav-bar.component';
import { BodyComponent } from './Components/Home/body/body.component';
import { FooterComponent } from './Components/Home/footer/footer.component';
import { AuthenticateComponent } from './Components/sign/authenticate/authenticate.component';
import { SignUpComponent } from './Components/sign/sign-up/sign-up.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { SidenavComponent } from './Components/dashboard/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { LastCoursesComponent } from './Components/dashboard/last-courses/last-courses.component';
import { MyCoursesComponent } from './Components/dashboard/my-courses/my-courses.component';
import { CatalogComponent } from './Components/dashboard/catalog/catalog.component';
import { CourseComponent } from './Components/dashboard/course/course.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddLessonComponent } from './Components/dashboard/add-lesson/add-lesson.component';
import {MatRadioModule} from '@angular/material/radio';
import { AddCourseComponent } from './Components/dashboard/add-course/add-course.component';
import {MatSelectModule} from '@angular/material/select';
import { ModifyCourseComponent } from './Components/dashboard/modify-course/modify-course.component';
import { UplodedCoursesComponent } from './Components/dashboard/uploded-courses/uploded-courses.component';
import { DeletePopUpComponent } from './Components/dashboard/delete-pop-up/delete-pop-up.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BodyComponent,
    FooterComponent,
    AuthenticateComponent,
    SignUpComponent,
    SidenavComponent,
    LastCoursesComponent,
    MyCoursesComponent,
    CatalogComponent,
    CourseComponent,
    AddLessonComponent,
    AddCourseComponent,
    ModifyCourseComponent,
    UplodedCoursesComponent,
    DeletePopUpComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        FormsModule,
        MatDatepickerModule,
        MatInputModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        MDBBootstrapModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatExpansionModule,
        MatRadioModule,
        MatSelectModule,
        MatSnackBarModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AuthenticateComponent, SignUpComponent]
})
export class AppModule { }
