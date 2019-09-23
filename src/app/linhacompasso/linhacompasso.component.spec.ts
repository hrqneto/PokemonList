import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhacompassoComponent } from './linhacompasso.component';

describe('LinhacompassoComponent', () => {
  let component: LinhacompassoComponent;
  let fixture: ComponentFixture<LinhacompassoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhacompassoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhacompassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
