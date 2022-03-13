import { Component, OnInit } from '@angular/core';
import { CuadradoMedio } from 'src/app/models/cuadradoMedio';

@Component({
  selector: 'app-cuadrado-medio',
  templateUrl: './cuadrado-medio.component.html',
  styleUrls: ['./cuadrado-medio.component.css']
})
export class CuadradoMedioComponent implements OnInit {

  cuadradoMedio:CuadradoMedio={
    x0: 0,
    d: 0,
    n: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
