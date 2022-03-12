import { Injectable } from '@angular/core';
import { MultiplicativoCongruencial, MultiplicativoCongruencialSecuencia } from '../models/linealMultiplicativo';

@Injectable({
  providedIn: 'root'
})
export class MultiplicativoService {
  private _secuencia: MultiplicativoCongruencialSecuencia[] = [];
  public get secuencia(): MultiplicativoCongruencialSecuencia[] {
    return [...this._secuencia];;
  }

  constructor() { }
  limpiar(){
    this._secuencia=[];
  }
  generateRandomData(multiplicativoCongruencial:MultiplicativoCongruencial):void{
    this.limpiar();
    for (let index = 0; index < multiplicativoCongruencial.m; index++) {
      if(index==0){
        let xAux = (multiplicativoCongruencial.a * multiplicativoCongruencial.x0)%multiplicativoCongruencial.m;
        let rAux = xAux/(multiplicativoCongruencial.m -1);
        let item:MultiplicativoCongruencialSecuencia ={
          i: index+1,
          operation: `(${multiplicativoCongruencial.a}*${multiplicativoCongruencial.x0})mod(${multiplicativoCongruencial.m})`,
          xi: xAux,
          ri: rAux.toFixed(4)
        };
        this._secuencia.push(item);
      }else{
        let xAux = (multiplicativoCongruencial.a * this.secuencia[index-1].xi)%multiplicativoCongruencial.m;
        let rAux = xAux/(multiplicativoCongruencial.m -1);
        let item:MultiplicativoCongruencialSecuencia ={
          i: index+1,
          operation: `(${multiplicativoCongruencial.a}*${this.secuencia[index-1].xi})mod(${multiplicativoCongruencial.m})`,
          xi: xAux,
          ri: rAux.toFixed(4)
        };
        this._secuencia.push(item);

      }
    }
    console.log(this._secuencia);
  }
}
