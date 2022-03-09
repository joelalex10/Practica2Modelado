import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-datos',
  templateUrl: './lista-datos.component.html',
  styleUrls: ['./lista-datos.component.css']
})
export class ListaDatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['i', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = [
    {i: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  ];
  

}
export interface PeriodicElement {
  name: string;
  i: number;
  weight: number;
  symbol: string;
}