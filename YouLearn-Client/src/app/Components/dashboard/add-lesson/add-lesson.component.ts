import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UploadService} from '../../../Services/upload/upload.service';
import {Qcm} from '../../../Models/qcm';
import {Video} from '../../../Models/video';
import {Lesson} from '../../../Models/lesson';
import {LessonService} from '../../../Services/lesson/lesson.service';
import {VideoService} from '../../../Services/video/video.service';
import {QcmService} from '../../../Services/qcm/qcm.service';

class QCMAnswers {
  answer: string;
  rightAnswer: boolean;
  constructor() {
    this.rightAnswer = false;
  }
}
@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.css']
})
export class AddLessonComponent implements OnInit {
  qcmAnswers: Array<QCMAnswers>;
  qcm: Qcm;
  video: Video;
  lesson: Lesson;
  uploadedFiles: Array < File > ;
  isVideo: number;
  constructor(  public dialogRef: MatDialogRef<AddLessonComponent>, @Inject(MAT_DIALOG_DATA) public course: any,
                private uploadService: UploadService, private lessonService: LessonService,
                private videoService: VideoService, private qcmService: QcmService) {
    this.qcmAnswers = new Array<QCMAnswers>();
    this.qcmAnswers.push(new QCMAnswers());
    this.lesson = new Lesson();
    this.qcm = new Qcm();
    this.video = new Video();
  }

  ngOnInit(): void {
    this.dialogRef.updatePosition({top: '0'});
    console.log(this.course.idCourse);
    this.lesson.course = this.course.idCourse;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  addAnswer() {
    if (this.qcmAnswers.length < 4) {
      this.qcmAnswers.push(new QCMAnswers());
      console.log(this.qcmAnswers);
    }
  }
  removeAnswer() {
    if (this.qcmAnswers.length > 1) {
      this.qcmAnswers.splice(-1 , 1);
    }
  }

  fileChange($event: Event) {
    // @ts-ignore
    this.uploadedFiles = $event.target.files;
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
      this.video.url = response.name;
      console.log('vid');
      this.video.lesson = this.lesson._id;
      // tslint:disable-next-line:no-shadowed-variable
      this.videoService.save(this.video).subscribe(data => this.video = data.video);
    });
  }

  save() {
    this.lesson.course = this.course.idCourse;
    this.lessonService.save(this.lesson).subscribe((data) => {
      this.lesson = data.lesson;
      // tslint:disable-next-line:triple-equals
      if (this.isVideo == 1) {
        this.upload();
      } else {
        console.log('scm');
        this.qcmAnswers.forEach((x) => {
          if (x.rightAnswer) {
            this.qcm.right.push(x.answer);
          } else {
            this.qcm.wrong.push(x.answer);
          }
        });
        this.qcm.lesson = this.lesson._id;
        // tslint:disable-next-line:no-shadowed-variable
        this.qcmService.save(this.qcm).subscribe((data) => {
          this.qcm = data.qcm;
          console.log(this.qcm);
        });
      }
    });
    this.closeDialog();
  }
}
