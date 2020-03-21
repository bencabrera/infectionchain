import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCompletedComponent } from './profile-completed.component';

describe('ProfileCompletedComponent', () => {
  let component: ProfileCompletedComponent;
  let fixture: ComponentFixture<ProfileCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
