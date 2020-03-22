import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavoritPlacesComponent } from './my-favorit-places.component';

describe('MyFavoritPlacesComponent', () => {
  let component: MyFavoritPlacesComponent;
  let fixture: ComponentFixture<MyFavoritPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFavoritPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavoritPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
