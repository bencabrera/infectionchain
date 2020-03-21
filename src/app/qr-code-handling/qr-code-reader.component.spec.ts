import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeReaderComponent } from './qr-code-reader.component';

describe('QrCodeReaderComponent', () => {
  let component: QrCodeReaderComponent;
  let fixture: ComponentFixture<QrCodeReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrCodeReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCodeReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
