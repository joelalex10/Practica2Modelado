import { Component, OnInit } from '@angular/core';
import { MultiplicativoCongruencial } from 'src/app/models/linealMultiplicativo';

@Component({
  selector: 'app-multiplicativo',
  templateUrl: './multiplicativo.component.html',
  styleUrls: ['./multiplicativo.component.css']
})
export class MultiplicativoComponent implements OnInit {

  multiplicativoCongruencial:MultiplicativoCongruencial={
    x0: 0,
    k: 0,
    g: 0,
    a: 0,
    m: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
