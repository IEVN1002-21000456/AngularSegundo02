import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-multiplicacion',
  imports: [ReactiveFormsModule],
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.css'
})
export class MultiplicacionComponent {
  formulario!:FormGroup
  resultado!:number;

  constructor(){}
  ngOnInit():void{
  this.formulario=new FormGroup({
    numero1 :new FormControl(''),
    numero2 :new FormControl(''),

  });
}
calcularDistancia():void{
  let n1=this.formulario.value.numero1;
  let n2=this.formulario.value.numero1;
  this.resultado=n1*n2;
}
}
