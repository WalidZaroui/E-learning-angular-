import { Component, OnInit } from '@angular/core';
import {Course} from '../../../Models/course';
import {Category} from '../../../Models/category';
import {CourseService} from '../../../Services/course/course.service';
import {CategoryService} from '../../../Services/category/category.service';
import {UploadService} from '../../../Services/upload/upload.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {User} from '../../../Models/user';
import {UserService} from '../../../Services/user/user.service';

@Component({
  selector: 'app-modify-course',
  templateUrl: './modify-course.component.html',
  styleUrls: ['./modify-course.component.css']
})
export class ModifyCourseComponent implements OnInit {
  uploadedFiles;
  oldCourse: Course;
  imagePath: string;
  course: Course;
  categories: Array<Category>;
  user: User;
  constructor(private courseService: CourseService, private categoryService: CategoryService, private uploadService: UploadService,
              private route: ActivatedRoute, private snackBar: MatSnackBar) {
    this.course = new Course();
    this.categories = new Array<Category>();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.course._id = params.get('id');
    });
    this.getCategories();
    this.getCourse();
  }
  getCategories() {
    this.categoryService.findAll().subscribe(res => {
      this.categories = res.categories;
    });
  }
  getCourse() {
    this.courseService.findById(this.course._id).subscribe(res => {
      this.course = res.course;
      this.oldCourse = this.course;
      console.log('first');
      console.log('second');
      this.imagePath = 'http://localhost:8080/files/' + this.course.image;
    });
  }
  modifyCourse() {
    this.courseService.update(this.course).subscribe(res => {
      console.log(res);
      this.snackBar.open('Course modified successfully', 'Close', {
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }, error => {
      this.snackBar.open('error', 'Close', {
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    });
  }
  fileChange($event: Event) {
    // @ts-ignore
    this.uploadedFiles = $event.target.files;
    console.log(this.uploadedFiles);
    this.upload();
  }
  upload() {
    const formData = new FormData();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.uploadService.upload(formData).subscribe((response) => {
      // console.log('response received is ', response);
      // @ts-ignore
      // this.employee.image = response.name;
      const img = document.getElementById('img') as HTMLImageElement;
      // @ts-ignore
      this.course.image = response.name;
      this.imagePath = 'http://localhost:8080/files/' + this.course.image;
      console.log(this.course);
    });
  }
}
