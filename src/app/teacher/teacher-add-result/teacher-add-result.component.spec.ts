import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddResultComponent } from './teacher-add-result.component';

describe('TeacherAddResultComponent', () => {
  let component: TeacherAddResultComponent;
  let fixture: ComponentFixture<TeacherAddResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAddResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAddResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
