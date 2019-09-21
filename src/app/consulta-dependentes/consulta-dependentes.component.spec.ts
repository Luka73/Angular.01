import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDependentesComponent } from './consulta-dependentes.component';

describe('ConsultaDependentesComponent', () => {
  let component: ConsultaDependentesComponent;
  let fixture: ComponentFixture<ConsultaDependentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaDependentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaDependentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
