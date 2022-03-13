import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoMedio } from 'src/app/models/productoMedio';
import { ProductoMedioService } from 'src/app/services/producto-medio.service';

@Component({
  selector: 'app-form-producto-medio',
  templateUrl: './form-producto-medio.component.html',
  styleUrls: ['./form-producto-medio.component.css']
})
export class FormProductoMedioComponent implements OnInit {

  submmited:boolean = false;
  generateData: FormGroup;

  @Input() productoMedio:ProductoMedio={
    x0: 0,
    x1: 0,
    n: 0,
    D: 0
  }
  
  constructor(
    private fb:FormBuilder,
    private productoMedioService:ProductoMedioService,
  ) { 
    this.generateData = this.fb.group({
      x0: ['', Validators.required],
      x1: ['', Validators.required],
      n: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  
  mostrarAdvertencia():boolean{
    if(this.submmited && this.generateData.invalid){
      return true;
    }else{
      return false;
    }
  }

  generarNumeros():void{
    this.submmited=true;
    if(this.generateData.invalid){
      return;
    }else{
      this.productoMedio = {
        x0: this.generateData.value.x0,
        x1: this.generateData.value.x1,
        n: this.generateData.value.n,
        D: this.generateData.value.x0.toString().length
      }
      console.log(this.productoMedio)
      this.productoMedioService.generateRandomData(this.productoMedio);
    }
  }
}
