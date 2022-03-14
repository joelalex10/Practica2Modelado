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
  public itemDuplicado:ProductoMedioSecuencia={
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
    let cont:number=0;

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
    console.log(this._secuencia);

  }
  verificarRepetido(lista: ProductoMedioSecuencia[],item: ProductoMedioSecuencia):boolean{
    let result:boolean=false;
    for(let i=0;i<lista.length;i++){
      if(item.xi===lista[i].xi){
        result=true;
      }
    }
    return result;
  }
}
