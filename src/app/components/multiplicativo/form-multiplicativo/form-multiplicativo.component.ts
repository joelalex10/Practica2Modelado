import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultiplicativoCongruencial } from 'src/app/models/linealMultiplicativo';
import { MultiplicativoService } from 'src/app/services/multiplicativo.service';

@Component({
  selector: 'app-form-multiplicativo',
  templateUrl: './form-multiplicativo.component.html',
  styleUrls: ['./form-multiplicativo.component.css']
})
export class FormMultiplicativoComponent implements OnInit {
  submmited:boolean = false;
  generateData: FormGroup;

  valueM:number=0;
  valueA:number=0;

  @Input() multiplicativoCongruencial:MultiplicativoCongruencial={
    x0: 0,
    k: 0,
    g: 0,
    a: 0,
    m: 0
  }

  constructor(
    private multiplicativoService:MultiplicativoService,
    private fb:FormBuilder
    ) { 
      this.generateData = this.fb.group({
      x0: ['', Validators.required],
      k: [0, Validators.required],
      g: ['', Validators.required],
      equations: ['1']
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
  calcularA():void{
    console.log(this.generateData.value.equations)
    if(this.generateData.value.equations==1){
      this.valueA = 3 + 8* this.generateData.value.k
    }else{
      this.valueA = 5 + 8* this.generateData.value.k
    }
  }
  calcularM():void{
    this.valueM = Math.pow(2,this.generateData.value.g)
  }

  generarNumeros():void{
    this.submmited=true;
    if(this.generateData.invalid){
      return;
    }else{
      this.multiplicativoCongruencial = {
        x0:this.generateData.value.x0,
        k:this.generateData.value.k,
        g:this.generateData.value.g,
        a:this.valueA,
        m:this.valueM,
      }
      //console.log(this.multiplicativoCongruencial);
      this.multiplicativoService.generateRandomData(this.multiplicativoCongruencial);
    }
  }

}
