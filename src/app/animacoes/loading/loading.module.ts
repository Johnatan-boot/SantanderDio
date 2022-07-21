import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { LoadingComponent, LoadinglogComponent } from './components';



@NgModule({
  declarations: [
    LoadingComponent,
    LoadinglogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LoadingModule { }
