import { LogarDashboardComponent } from './logarDashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

import { 
  DashboardComponent 
   
} from './components';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    LogarDashboardComponent,
  
    
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
   
  ]
})
export class DashboardModule { }
