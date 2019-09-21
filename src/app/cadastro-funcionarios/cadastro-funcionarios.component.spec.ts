import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFuncionariosComponent } from './cadastro-funcionarios.component';

describe('CadastroFuncionariosComponent', () => {
  let component: CadastroFuncionariosComponent;
  let fixture: ComponentFixture<CadastroFuncionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFuncionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
