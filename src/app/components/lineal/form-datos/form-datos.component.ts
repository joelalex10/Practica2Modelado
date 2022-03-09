import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinealCongruencial } from 'src/app/models/linealCongruencial';
import { LinealService } from 'src/app/services/lineal.service';

@Component({
  selector: 'app-form-datos',
  templateUrl: './form-datos.component.html',
  styleUrls: ['./form-datos.component.css']
})
export class FormDatosComponent implements OnInit {
  submmited:boolean = false;
  generateData: FormGroup;

  valueM:number=0;
  valueA:number=0;


  constructor(
    private linealService:LinealService,
    private fb:FormBuilder,
  ) { 
    this.generateData = this.fb.group({
      x0: ['', Validators.required],
      k: ['', Validators.required],
      g: ['', Validators.required],
      c: ['', Validators.required],
    });

    //this.generateData.controls['c'].disable();

  }

  ngOnInit(): void {
  }
  generarNumeros():void{
    this.submmited=true;
    if(this.generateData.invalid){
      return;
    }else{
      let linealCongruencial:LinealCongruencial={
        x0: this.generateData.value.x0,
        k: this.generateData.value.k,
        g: this.generateData.value.g,
        c: this.generateData.value.c,
        a: this.valueA,
        m: this.valueM,
      };
      this.linealService.generateRandomData(linealCongruencial);
    }
  }
  mostrarAdvertencia():boolean{
    if(this.submmited && this.generateData.invalid){
      return true;
    }else{
      return false;
    }
  }
  calcularM():void{
    this.valueM = Math.pow(2,this.generateData.value.g)
  }
  calcularA():void{
    this.valueA = 1 + 4* this.generateData.value.k
  }
  

}
