import { Component } from '@angular/core';

interface Saldo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  saldos: Saldo[] = [
    {value: 'saldo-0', viewValue: 'R$500,00'},
    
  ];
  

 
  

  

  

}

