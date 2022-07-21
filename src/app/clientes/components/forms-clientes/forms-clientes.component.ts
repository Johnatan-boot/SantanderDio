import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { List } from 'src/app/models/list';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-forms-clientes',
  templateUrl: './forms-clientes.component.html',
  styleUrls: ['./forms-clientes.component.css']
})
export class FormsClientesComponent implements OnInit {
  //tipando uma interface
  clienteForm: FormGroup;
  clientes: Array<Cliente> = [];
  listas: Array<List> = [];
  clienteId: any = '';
  constructor(private fb: FormBuilder,
    private clienteService: ClienteService,
    private actRoute: ActivatedRoute,
    private router: Router) {
    this.clienteForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: '',
      cpf:'',
      dataNasc:'',
      endereco:'',
      dataAbertura:'',
      email:'',
      profissao: '',
    })
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.clienteId = params.get('id');
      console.log(this.clienteId);
      if(this.clienteId !== null) {
        this.clienteService.getCliente(this.clienteId).subscribe(result => {
          this.clienteForm.patchValue({
            id: result[0].id,
            nome: result[0].nome,
            sobrenome: result[0].sobrenome,
            idade: result[0].idade,
            cpf: result[0].cpf,
            dataNasc: result[0].dataNasc,
            endereco: result[0].endereco,
            dataAbertura: result[0].dataAbertura,
            profissao: result[0].profissao,
            email: result[0].email,
          
          })
        })
      }
    })

    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientes().subscribe(response => {
      this.clientes = response;
    })
  }

  /*createCliente() {
    this.clienteForm.get('id')?.patchValue(this.clientes.length + 1);
    this.clienteService.postCliente(this.clienteForm.value).subscribe(result => {
      console.log(`Cliente ${result.nome} ${result.sobrenome} foi cadastrado com sucesso !`)
    }, (err) => {

    }, () => {
      this.router.navigate(['/']);
    })
  }*/

  createCliente() {
    this.clienteForm.get('id')?.patchValue(this.listas.length + 1);
    this.clienteService.postCliente(this.clienteForm.value).subscribe(result => {
      console.log(`Cliente ${result.nome} ${result.sobrenome} foi cadastrado com sucesso !`)
    }, (err) => {

    }, () => {
      this.router.navigate(['/']);
    })
  }

  updateCliente() {
    this.clienteService.updateCliente(this.clienteId, this.clienteForm.value).subscribe(result => {
      console.log(' Cliente atualizado', result);
    }, (err) => {

    }, () => {
      this.router.navigate(['/']);
    })
  }

  //Ação de Enviar
  actionButton() {
    if(this.clienteId !== null) {
      this.updateCliente();
    }else {
      this.createCliente();
    }
  }

}
