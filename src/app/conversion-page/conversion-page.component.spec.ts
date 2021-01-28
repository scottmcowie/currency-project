import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionPageComponent } from './conversion-page.component';

describe('ConversionPageComponent', () => {
  let component: ConversionPageComponent;
  let fixture: ComponentFixture<ConversionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
