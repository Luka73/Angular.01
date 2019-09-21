import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.css']
})
export class CadastroFuncionariosComponent implements OnInit {

  mensagem:string;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  //metodo que sera executado quando o botao de cadastro
  //for clicado na pagina
  cadastrarFuncionario(formCadastro){
    this.mensagem = "Processando requisição, por favor aguarde.";

    //criando uma requisicao POST para a API
    this.httpClient.post('http://sisfuncionarios-001-site1.itempurl.com/api/Funcionario', 
        formCadastro.value, { responseType : 'text'})
        .subscribe( //promisse
          data => { //se entrar no data o retorno foi 200 (sucesso!)
            this.mensagem = data.toString(); //pegar a msg de sucesso
            formCadastro.reset(); //limpar o formulario
          },
          e => { // se entrar no e o retorno foi diferente de 200 (erro!)
            console.log(e);
          }
        )
  }

}
