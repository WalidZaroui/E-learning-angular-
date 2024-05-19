import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCoursesComponent } from './last-courses.component';

describe('LastCoursesComponent', () => {
  let component: LastCoursesComponent;
  let fixture: ComponentFixture<LastCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
