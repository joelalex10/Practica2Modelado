import { Component, OnInit } from '@angular/core';
import { CuadradoMedioSecuencia } from 'src/app/models/cuadradoMedio';
import { CuadradoMedioService } from 'src/app/services/cuadrado-medio.service';

@Component({
  selector: 'app-list-cuadrado-medio',
  templateUrl: './list-cuadrado-medio.component.html',
  styleUrls: ['./list-cuadrado-medio.component.css']
})
export class ListCuadradoMedioComponent implements OnInit {

  constructor(
    private cuadradoMedioService:CuadradoMedioService,
  ) { }

  ngOnInit(): void {
  }
  get dataSource():CuadradoMedioSecuencia[] {
    return this.cuadradoMedioService.secuencia;
  }

  displayedColumns: string[] = ['i', 'yi', 'operation', 'xi','ri'];

}
