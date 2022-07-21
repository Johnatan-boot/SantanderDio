import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientesComponent } from './components';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsClientesComponent } from './components/forms-clientes/forms-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientesRoutingModule } from './clientes-routing.module';
import {MatTableModule} from '@angular/material/table';
import { ClientesInfoComponent } from './components';




@NgModule({
  declarations: [
    ListClientesComponent,
    FormsClientesComponent,
    ClientesInfoComponent,
    
  
  ],
  imports: [
 
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClientesRoutingModule,
    MatTableModule,
  ]
})
export class ClientesModule { }
