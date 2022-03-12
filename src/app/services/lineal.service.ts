import { Injectable } from '@angular/core';
import { LinealCongruencial, LinealCongruencialSecuencia } from '../models/linealCongruencial';

@Injectable({
  providedIn: 'root'
})
export class LinealService {

  private _secuencia: LinealCongruencialSecuencia[] = [];
  public get secuencia(): LinealCongruencialSecuencia[] {
    return [...this._secuencia];;
  }
  constructor() { 
  }

  generateRandomData(linealCongruencial:LinealCongruencial):void{
    console.log("ACCESO A SERVICIO");
    console.log(linealCongruencial);
    for (let index = 0; index < linealCongruencial.m; index++) {
      if(index==0){
        let xAux = (linealCongruencial.a * linealCongruencial.x0 + linealCongruencial.c)%linealCongruencial.m;
        let rAux = xAux/(linealCongruencial.m -1);
        let item:LinealCongruencialSecuencia ={
          i: index+1,
          operation: `(${linealCongruencial.a}*${linealCongruencial.x0}+${linealCongruencial.c})mod(${linealCongruencial.m})`,
          xi: xAux,
          ri: rAux.toFixed(4)
        };
        this._secuencia.push(item);
      }else{
        let xAux = (linealCongruencial.a * this.secuencia[index-1].xi + linealCongruencial.c)%linealCongruencial.m;
        let rAux = xAux/(linealCongruencial.m -1);
        let item:LinealCongruencialSecuencia ={
          i: index+1,
          operation: `(${linealCongruencial.a}*${this.secuencia[index-1].xi}+${linealCongruencial.c})mod(${linealCongruencial.m})`,
          xi: xAux,
          ri: rAux.toFixed(4),
        };
        this._secuencia.push(item);
      }
    }
    console.log("LOS VALORES SON");
    console.log(this._secuencia);

  }
}
