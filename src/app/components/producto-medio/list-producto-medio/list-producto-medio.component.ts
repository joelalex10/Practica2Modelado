import { Component, OnInit } from '@angular/core';
import { ProductoMedioSecuencia } from 'src/app/models/productoMedio';
import { ProductoMedioService } from 'src/app/services/producto-medio.service';

@Component({
  selector: 'app-list-producto-medio',
  templateUrl: './list-producto-medio.component.html',
  styleUrls: ['./list-producto-medio.component.css']
})
export class ListProductoMedioComponent implements OnInit {

  constructor(
    private productoMedioService:ProductoMedioService,
  ) { }

  ngOnInit(): void {
  }
  get dataSource():ProductoMedioSecuencia[] {
    return this.productoMedioService.secuencia;
  }

  displayedColumns: string[] = ['i', 'yi', 'operation', 'xi','ri'];

}
