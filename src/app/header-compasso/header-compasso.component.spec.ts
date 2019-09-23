import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCompassoComponent } from './header-compasso.component';

describe('HeaderCompassoComponent', () => {
  let component: HeaderCompassoComponent;
  let fixture: ComponentFixture<HeaderCompassoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCompassoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCompassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
