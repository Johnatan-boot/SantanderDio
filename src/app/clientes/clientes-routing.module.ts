import { ClientesInfoComponent } from './components/clientes-info/clientes-info.component';
import { FormsClientesComponent } from './components';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListClientesComponent } from './components';


export const ClientesRoutes: Routes = [
   {
    path:'listarclientes', 
    component:ListClientesComponent, 
    
   },
   {
    path:'clientes/info/:id', 
    component:ClientesInfoComponent, 
    
   },
   {
    path:'cadastrarclientes', 
    component:FormsClientesComponent, 
    
   },
   {
    path:'cadastrarclientes/:id', 
    component:FormsClientesComponent, 
    
   }
];

@NgModule({
    imports:[RouterModule.forChild(ClientesRoutes)],
    exports:[RouterModule]
})

export class ClientesRoutingModule {
}
