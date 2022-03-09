import { Injectable } from '@angular/core';
import { LinealCongruencial, LinealCongruencialSecuencia } from '../models/linealCongruencial';

@Injectable({
  providedIn: 'root'
})
export class LinealService {

  // linealCongruencial:LinealCongruencial={
  //   x0: 0,
  //   k: 0,
  //   g: 0,
  //   c: 0,
  //   a: 0,
  //   m: 0,
  //   secuencia: []
  // };
  secuencia :LinealCongruencialSecuencia [] = [];
  
  constructor() { 
  }

  generateRandomData(linealCongruencial:LinealCongruencial):void{
    console.log("ACCESO A SERVICIO");
    console.log(linealCongruencial);
    for (let i = 0; i < linealCongruencial.m; i++) {
    }

  }
}
