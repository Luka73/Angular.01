import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { ConsultaFuncionariosComponent } from './consulta-funcionarios/consulta-funcionarios.component';
import { CadastroDependentesComponent } from './cadastro-dependentes/cadastro-dependentes.component';
import { ConsultaDependentesComponent } from './consulta-dependentes/consulta-dependentes.component';

//importando o modulo de Rotas do Angular (SPA)
import { RouterModule, Routes } from '@angular/router'; 

//modulo utilizado para realizar chamadas na API
import { HttpClientModule } from '@angular/common/http';

//modulo para desenvolvimento de formulario
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//maper os componentes que serao carregados pelo modulo de rotas
const appRoutes : Routes = [
  { path: 'cadastroFuncionarios', component: CadastroFuncionariosComponent },
  { path: 'consultaFuncionarios', component: ConsultaFuncionariosComponent },
  { path: 'cadastroDependentes', component: CadastroDependentesComponent },
  { path: 'consultaDependentes', component: ConsultaDependentesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncionariosComponent,
    ConsultaFuncionariosComponent,
    CadastroDependentesComponent,
    ConsultaDependentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //registrando as bibliotecas de rotas
    RouterModule.forRoot(appRoutes),
    //registrando a biblioteca HTTP
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
