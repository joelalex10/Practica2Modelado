import { Component, OnInit } from '@angular/core';
import { MultiplicativoCongruencialSecuencia } from 'src/app/models/linealMultiplicativo';
import { MultiplicativoService } from 'src/app/services/multiplicativo.service';

@Component({
  selector: 'app-lista-multiplicativo',
  templateUrl: './lista-multiplicativo.component.html',
  styleUrls: ['./lista-multiplicativo.component.css']
})
export class ListaMultiplicativoComponent implements OnInit {

  constructor(
    private multiplicativoService:MultiplicativoService
  ) { }

  ngOnInit(): void {
  }

  get dataSource():MultiplicativoCongruencialSecuencia[] {
    return this.multiplicativoService.secuencia;
  }
  displayedColumns: string[] = ['i', 'operation', 'xi', 'ri'];

  limpiar(){
    this.multiplicativoService.limpiar();
  }

}
