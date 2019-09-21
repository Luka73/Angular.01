import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDependentesComponent } from './cadastro-dependentes.component';

describe('CadastroDependentesComponent', () => {
  let component: CadastroDependentesComponent;
  let fixture: ComponentFixture<CadastroDependentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDependentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDependentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
