import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiolocompassoComponent } from './miolocompasso.component';

describe('MiolocompassoComponent', () => {
  let component: MiolocompassoComponent;
  let fixture: ComponentFixture<MiolocompassoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiolocompassoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiolocompassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
