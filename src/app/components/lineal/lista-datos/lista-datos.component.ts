import { Component, OnInit } from '@angular/core';
import { LinealCongruencial, LinealCongruencialSecuencia } from 'src/app/models/linealCongruencial';
import { LinealService } from 'src/app/services/lineal.service';

@Component({
  selector: 'app-lista-datos',
  templateUrl: './lista-datos.component.html',
  styleUrls: ['./lista-datos.component.css']
})
export class ListaDatosComponent implements OnInit {

  constructor(
    private linealService:LinealService,
  ) {
   }

  ngOnInit(): void {
  }

  get dataSource():LinealCongruencialSecuencia[] {
    return this.linealService.secuencia;
  }

  displayedColumns: string[] = ['i', 'operation', 'xi', 'ri'];
  //dataSource: LinealCongruencialSecuencia[] = this.linealService.secuencia;
  

}
