import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import{LogarComponent, LoginComponent} from './components';

export const LogingRoutes: Routes = [
   {
    path:'login', 
    component:LogarComponent, 
    children:[{path:'', component:LoginComponent}]
   }
];

@NgModule({
    imports:[RouterModule.forChild(LogingRoutes)],
    exports:[RouterModule]
})

export class LoginRoutingModule {
}
