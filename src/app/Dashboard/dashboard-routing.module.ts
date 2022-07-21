import {NgModule} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';

import{DashboardComponent} from './components'
import { LogarDashboardComponent } from './logarDashboard.component';
//Exportando as Rotas Na Raiz da Aplicação
export const DashboardRoutes: Routes = [
    {
        //Redirecionando Para o Modulo Login
        path:'dashboard',
        component: LogarDashboardComponent,
        children:[{path:'',component:DashboardComponent}]
    }
];

//declaracao ngModule
@NgModule({
    imports: [RouterModule.forChild(DashboardRoutes)],
    exports: [RouterModule]
    //RouterModule e uma classe do Tipo singledol
    //unica Para Toda Aplicação

    //RouterModule raiz de todos os Modulos Rotas
})
export class DashboardRoutingModule {
 

}

