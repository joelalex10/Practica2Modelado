import { Injectable } from '@angular/core';
import { CuadradoMedio, CuadradoMedioSecuencia } from '../models/cuadradoMedio';

@Injectable({
  providedIn: 'root'
})
export class CuadradoMedioService {
  private _secuencia: CuadradoMedioSecuencia[] = [];
  public get secuencia(): CuadradoMedioSecuencia[] {
    return [...this._secuencia];;
  }
  public itemDuplicado:CuadradoMedioSecuencia={
    i: 0,
    yi: 0,
    operation: '',
    xi: 0,
    ri: 0
  };
  constructor() { }
  limpiar(){
    this._secuencia=[];
  }
  generateRandomData(cuadradoMedio:CuadradoMedio):void{
    this.limpiar();

    let auxY:number =0;
    let stringAuxY:string ='';
    let auxTam:number=0;
    let diferencia:number =0;
    let auxOperation:string ='';
    let auxCadX:string ='';
    let auxX:number=0;
    let auxRi:number =0;
    let cont:number=0;

    for(let index =0;index<cuadradoMedio.n;index++){


      if(index==0){
        auxY = Math.pow(cuadradoMedio.x0,2)
      }else{
        auxY = Math.pow(this.secuencia[index-1].xi,2)
      }
      stringAuxY = `${auxY}`;
      auxTam =stringAuxY.length;
      diferencia = (auxTam - cuadradoMedio.d)/2;
      if((auxTam - cuadradoMedio.d)%2==0){
        auxOperation = stringAuxY;
      }else{
        auxOperation = `0${auxY}`;
      }
      auxCadX =stringAuxY.substring(diferencia,diferencia+cuadradoMedio.d);
      console.log(`${index+1}: ${auxCadX}`);
      auxX = Number(auxCadX);
      auxRi =auxX/(Math.pow(10,cuadradoMedio.d)); 

      let item:CuadradoMedioSecuencia ={
        i: index+1,
        yi: auxY,
        operation: auxOperation,
        xi: auxX,
        ri: auxRi
      };
      let res:boolean =this.verificarRepetido(this._secuencia,item);
      if(res){
        cont++;
        if(cont<2){
          console.log(`PRIMER REPETIDO EN I:${item.i}`);
          this.itemDuplicado =item;

        }
      }
      this._secuencia.push(item);
      
    } 
  }
  verificarRepetido(lista: CuadradoMedioSecuencia[],item: CuadradoMedioSecuencia):boolean{
    let result:boolean=false;
    for(let i=0;i<lista.length;i++){
      if(item.xi===lista[i].xi){
        //console.log(`item.xi: ${item.xi}`);
        //console.log(`lista[i].xi: ${lista[i].xi}`);
        result=true;
      }
    }
    return result;
  }
}
