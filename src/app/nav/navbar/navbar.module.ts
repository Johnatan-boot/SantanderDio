import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components';




@NgModule({
  declarations: [
    NavbarComponent,
  ],
  exports:[
    NavbarComponent,
  ],
  imports: [
    CommonModule
  ]
 
})
export class NavbarModule { }
