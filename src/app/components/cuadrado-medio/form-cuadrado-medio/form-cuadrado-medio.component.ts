import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuadradoMedio } from 'src/app/models/cuadradoMedio';
import { CuadradoMedioService } from 'src/app/services/cuadrado-medio.service';

@Component({
  selector: 'app-form-cuadrado-medio',
  templateUrl: './form-cuadrado-medio.component.html',
  styleUrls: ['./form-cuadrado-medio.component.css']
})
export class FormCuadradoMedioComponent implements OnInit {

  submmited:boolean = false;
  generateData: FormGroup;

  @Input() cuadradoMedio:CuadradoMedio={
    x0: 0,
    d:0,
    n:0,
  }
  
  constructor(
    private fb:FormBuilder,
    private cuadradoMedioService:CuadradoMedioService,
  ) { 
    this.generateData = this.fb.group({
      x0: ['', Validators.required],
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
      this.cuadradoMedio={
        x0:this.generateData.value.x0,
        n:this.generateData.value.n,
        d:this.generateData.value.x0.toString().length
      }
      console.log(this.generateData.value)
      this.cuadradoMedioService.generateRandomData(this.cuadradoMedio);
      
    }
  }

}
