import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientesUrl: string = 'http://localhost:3100/api/clientes';
//apiUrl = 'https://sheet.best/api/sheets/e13ad33d-4607-4bb9-b67a-c26cae9e279e';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })
  }

  constructor(private httpClient: HttpClient) { }


  retrieveAll(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.clientesUrl);
}

retrieveById(id: number): Observable<Cliente> { 
  return this.httpClient.get<Cliente>(`${this.clientesUrl}/${id}`);
}

save(cliente: Cliente): Observable<Cliente> { 
  if(cliente.id) { 
      return this.httpClient.put<Cliente>(`${this.clientesUrl}/${cliente.id}`, cliente);
  } else { 
      return this.httpClient.post<Cliente>(`${this.clientesUrl}`, cliente);
  }
}

deleteById(id: number): Observable<any> {
  return this.httpClient.delete<any>(`${this.clientesUrl}/${id}`);
}

  
  // Retorna a lista de Clientes READ
 
  getClientes():Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.clientesUrl);
  }
 
   // Salva usuario no banco CREATE
  postCliente(cliente: Cliente):Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.clientesUrl, cliente, this.httpOptions);
  }

  // Exclui o usuario do banco DELETE
  deleteCliente(id: number):Observable<Cliente> {
    return this.httpClient.delete<Cliente>(`${this.clientesUrl}/id/${id}`)
  }

  // Edita usuario UPDATE
  updateCliente(id: string, cliente: Cliente):Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.clientesUrl}/id/${id}`, cliente, this.httpOptions);
  }

  // Lista usuario unico
  getCliente(id: string):Observable<Cliente[]> {
   return this.httpClient.get<Cliente[]>(`${this.clientesUrl}/id/${id}`)
  }
}

var CLIENTES: Cliente[] = [
  {
    avatar: './assets/avatar/AvatarJony.jpg',
    id: 1,
    nome: 'Johnatan',
    sobrenome: ' Quenes',
    idade: 29,
    cpf: '123456789',
    dataNasc: '19/02/1992',
    telefone: '11985433222',
    endereco: 'Rua do Johnatan',
    dataAbertura: '19/02/1992',
    email: 'johnatan@mail.com',
    profissao:'reporter'


  },
  {
    avatar: './assets/avatar/AvatarLarissa.jpg',
    id: 2,
    nome: 'Larissa',
    sobrenome: ' da Silva',
    idade: 19,
    cpf: '123456789',
    dataNasc: '19/02/1992',
    telefone: '11985433222',
    endereco: 'Rua da Larissa',
    dataAbertura: '19/02/1992',
    email: 'larissa@mail.com',
    profissao:'marinheiro'

  },
  {
    avatar: './assets/avatar/AvatarRogerio.jpg',
    id: 3,
    nome: 'Rogerio',
    sobrenome: 'rodrigues',
    idade: 33,
    cpf: '123456789',
    dataNasc: '19/02/1992',
    telefone: '11985433222',
    endereco: 'Rua da rogerio',
    dataAbertura: '19/02/1992',
    email: 'rogerio@mail.com',
    profissao:'professor'

  },
  {
    avatar: './assets/avatar/AvatarLuiza.jpg',
    id: 4,
    nome: 'Luiza',
    sobrenome: ' Soares',
    idade: 33,
    cpf: '123456789',
    dataNasc: '19/02/1992',
    telefone: '11985433222',
    endereco: 'Rua da Luiza',
    dataAbertura: '19/02/1992',
    email: 'luiza@mail.com',
    profissao:'porteiro'

  },
  {
    avatar: './assets/avatar/AvatarRoberta.jpg',
    id: 5,
    nome: 'Roberta',
    sobrenome: ' Soares',
    idade: 33,
    cpf: '123456789',
    dataNasc: '19/02/1992',
    telefone: '11985433222',
    endereco: 'Rua da Roberta',
    dataAbertura: '19/02/1992',
    email: 'roberta@mail.com',
    profissao:'Doceira'

  }
];