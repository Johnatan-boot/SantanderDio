import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ClientesModule, ClientesRoutingModule } from './clientes';
import { DashboardModule } from './Dashboard';
import { DashboardRoutingModule } from './Dashboard/dashboard-routing.module';
import { LoginModule, LoginRoutingModule } from './autenticao';
import { LoadingModule, LoadingRoutingModule } from './animacoes';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { NavbarModule } from './nav/navbar';





@NgModule({
  declarations: [
    AppComponent,
   
   
     
   
  ],
  imports: [
    NavbarModule,
    BrowserModule,
    FormsModule,
    ClientesModule,
    ClientesRoutingModule,
    DashboardModule,
    DashboardRoutingModule,
    LoginModule,
    LoginRoutingModule,
    LoadingModule,
    LoadingRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
