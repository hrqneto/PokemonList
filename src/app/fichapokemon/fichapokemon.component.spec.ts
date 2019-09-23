import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichapokemonComponent } from './fichapokemon.component';

describe('FichapokemonComponent', () => {
  let component: FichapokemonComponent;
  let fixture: ComponentFixture<FichapokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichapokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichapokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
