import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes-info',
  templateUrl: './clientes-info.component.html',
  styleUrls: ['./clientes-info.component.css']
})
export class ClientesInfoComponent implements OnInit {
   //tipando uma interface
  clienteForm: FormGroup;
  clientes: Array<Cliente> = [];
  clienteId: any = '';
  cliente: Cliente;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private clienteService: ClienteService,
   ) { 
     
    }

  ngOnInit(): void { 
    

    
  this.clienteService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
        next: cliente => this.cliente = cliente,
        error: err => console.log('Error', err)
    });

  
}




save(): void {
  this.clienteService.save(this.cliente).subscribe({
      next: cliente => console.log('Saved with success', cliente),
      error: err => console.log('Error', err)
  });
}


/*
updateCliente() {
  this.clienteService.updateCliente(this.clienteId, this.clienteForm.value).subscribe(result => {
    console.log(' Cliente atualizado', result);
  }, (err) => {

  }, () => {
    this.router.navigate(['/']);
  })
}
*/
 

}
