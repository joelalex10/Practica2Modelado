import { Injectable } from '@angular/core';
import { ProductoMedio, ProductoMedioSecuencia } from '../models/productoMedio';

@Injectable({
  providedIn: 'root'
})
export class ProductoMedioService {

  private _listX:number[]=[];

  private _secuencia: ProductoMedioSecuencia[] = [];
  public get secuencia(): ProductoMedioSecuencia[] {
    return [...this._secuencia];;
  }

  constructor() { }
  limpiar(){
    this._secuencia=[];
  }

  generateRandomData(productoMedio:ProductoMedio):void{
    this.limpiar();

    let auxY:number=0;
    let stringAuxY:string;
    let auxTam:number;
    let diferencia:number;
    let auxOperation:string;
    let auxCadX:string;
    let auxX:number;
    let auxR:number;



    this._listX[0]=productoMedio.x0;
    this._listX[1]=productoMedio.x1;

    for(let index =0;index<productoMedio.n;index++){

      auxY=this._listX[index+1] * this._listX[index];
      console.log(`y${index}: ${auxY}`);
      stringAuxY = `${auxY}`;
      auxTam =stringAuxY.length;
      diferencia = (auxTam - productoMedio.D)/2;
      if((auxTam - productoMedio.D)%2==0){
        auxOperation = stringAuxY;
      }else{
        auxOperation = `0${auxY}`;
      }

      auxCadX =stringAuxY.substring(diferencia,diferencia+productoMedio.D);
      console.log(`${index+1}: ${auxCadX}`);
      auxX = Number(auxCadX);
      this._listX.push(auxX);
      auxR = auxX/(Math.pow(10,productoMedio.D));

      let item:ProductoMedioSecuencia ={
        i:index+1,
        yi:auxY,
        operation:auxOperation,
        xi:auxX,
        ri:auxR
      };
      this._secuencia.push(item);
    }
    console.log(this._secuencia);

  }
}
