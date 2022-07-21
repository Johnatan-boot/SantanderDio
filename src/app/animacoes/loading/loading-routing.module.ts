import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import{LoadingComponent, LoadinglogComponent} from './components';

export const LoadingRoutes: Routes = [
   {
    path:'loading', 
    component:LoadinglogComponent, 
    children:[{path:'', component:LoadingComponent}]
   }
];

@NgModule({
    imports:[RouterModule.forChild(LoadingRoutes)],
    exports:[RouterModule]
})

export class LoadingRoutingModule {
}
