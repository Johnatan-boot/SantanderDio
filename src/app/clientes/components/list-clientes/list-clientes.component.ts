import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})


export class ListClientesComponent implements OnInit {

  

  filteredClientes: Cliente[] = [];

    _clientes: Cliente[] = [];

    _filterBy: string;

  //uma lista de Arrays com a Interface Cliente
  clientes: Array<Cliente> = [];
  
  

 



  constructor(private clienteService: ClienteService) { }


  ngOnInit(): void {
    //Aqui dentro Chamamos Todos os Metodos Criados
   this.getClientes();
   this.retrieveAll();
  }

  


  retrieveAll(): void { 
    this.clienteService.retrieveAll().subscribe({
        next: clientes => {
            this._clientes = clientes;
            this.filteredClientes = this._clientes;
        },
        error: err => console.log('Error', err) 
    })
}

deleteById(clienteId: number): void { 
  this.clienteService.deleteById(clienteId).subscribe({
      next: () => { 
          console.log('Deleted with success');
          this.retrieveAll();
      },
      error: err => console.log('Error', err)
  })
}

set filter(value: string) { 
  this._filterBy = value;

  this.filteredClientes = this._clientes.filter((cliente: Cliente) => cliente.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
}

get filter() { 
  return this._filterBy;
}



    getClientes(): void{
    this.clienteService.getClientes().subscribe(response => {
      this.clientes = response;
    }, (err) => {
      console.log('ERRO AO EXECUTAR', err.status);
    }); 
  }

  deleteCliente(id: number): void {
    this.clienteService.deleteCliente(id).subscribe(response => {
      console.log('Cliente Excluido!');
    }, (err) => {
      console.log(err)
    }, () => {
      this.getClientes();
    })
  }

  



  
  
    
  
  

 

}

