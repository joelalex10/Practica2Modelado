import { Component, OnInit } from '@angular/core';
import { ProductoMedio } from 'src/app/models/productoMedio';

@Component({
  selector: 'app-producto-medio',
  templateUrl: './producto-medio.component.html',
  styleUrls: ['./producto-medio.component.css']
})
export class ProductoMedioComponent implements OnInit {

  productoMedio:ProductoMedio={
    x0: 0,
    x1: 0,
    n: 0,
    D: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
