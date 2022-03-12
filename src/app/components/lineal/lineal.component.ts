import { Component, OnInit } from '@angular/core';
import { LinealCongruencial } from 'src/app/models/linealCongruencial';

@Component({
  selector: 'app-lineal',
  templateUrl: './lineal.component.html',
  styleUrls: ['./lineal.component.css']
})
export class LinealComponent implements OnInit {

  linealCongruencial:LinealCongruencial={
    x0: 0,
    k: 0,
    g: 0,
    c: 0,
    a: 0,
    m: 0,
  }
  constructor() { }

  ngOnInit(): void {
    
  }
  

}
