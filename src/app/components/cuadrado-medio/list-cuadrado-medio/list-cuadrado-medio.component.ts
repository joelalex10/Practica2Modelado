import { Component, OnInit } from '@angular/core';
import { CuadradoMedioSecuencia } from 'src/app/models/cuadradoMedio';
import { CuadradoMedioService } from 'src/app/services/cuadrado-medio.service';

@Component({
  selector: 'app-list-cuadrado-medio',
  templateUrl: './list-cuadrado-medio.component.html',
  styleUrls: ['./list-cuadrado-medio.component.css']
})
export class ListCuadradoMedioComponent implements OnInit {

  private itemDuplicado:CuadradoMedioSecuencia= {
    i: 0,
    yi: 0,
    operation: '',
    xi: 0,
    ri: 0
  };

  constructor(
    private cuadradoMedioService:CuadradoMedioService,
  ) { }

  ngOnInit(): void {

  }
  limpiar():void{
    this.cuadradoMedioService.limpiar();
    this.itemDuplicado.i =0;

  }
  get dataSource():CuadradoMedioSecuencia[] {
    return this.cuadradoMedioService.secuencia;
  }

  displayedColumns: string[] = ['i', 'yi', 'operation', 'xi','ri'];

  subtitulo():string{
    let label:string;
    this.itemDuplicado = this.cuadradoMedioService.itemDuplicado;
    if(this.itemDuplicado.i===0){
      label= "*"
    }else{
      let i =this.itemDuplicado.i;
      let yi =this.itemDuplicado.yi;
      let xi =this.itemDuplicado.xi;
      let ri =this.itemDuplicado.ri;
      label= `LA SECUENCIA SE DEGENERA A PARTIR DE LA POSICION i=${i} ri=${ri} xi=${xi}`;
    }
    console.log(label);
    return label;
  }
}
