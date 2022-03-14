import { Component, OnInit } from '@angular/core';
import { ProductoMedioSecuencia } from 'src/app/models/productoMedio';
import { ProductoMedioService } from 'src/app/services/producto-medio.service';

@Component({
  selector: 'app-list-producto-medio',
  templateUrl: './list-producto-medio.component.html',
  styleUrls: ['./list-producto-medio.component.css']
})
export class ListProductoMedioComponent implements OnInit {

  private itemDuplicado:ProductoMedioSecuencia= {
    i: 0,
    yi: 0,
    operation: '',
    xi: 0,
    ri: 0
  };
  constructor(
    private productoMedioService:ProductoMedioService,
  ) { }
  limpiar():void{
    this.productoMedioService.limpiar();
    this.itemDuplicado.i =0;
  }

  ngOnInit(): void {
  }
  get dataSource():ProductoMedioSecuencia[] {
    return this.productoMedioService.secuencia;
  }

  displayedColumns: string[] = ['i', 'yi', 'operation', 'xi','ri'];
  
  subtitulo():string{
    let label:string;
    this.itemDuplicado = this.productoMedioService.itemDuplicado;
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
