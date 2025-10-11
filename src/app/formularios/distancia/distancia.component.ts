

import { Component, OnInit } from '@angular/core';
import { Operaciones } from './operacion';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-distancia',
  imports: [ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})


export class DistanciaComponent implements OnInit {
  formulario!: FormGroup;
  resultado!: number;

  constructor() {}

  objMult= new Operaciones;

  ngOnInit(): void {

    this.formulario = new FormGroup({
      x1: new FormControl(""),
      y1: new FormControl(""),
      x2: new FormControl(""),
      y2: new FormControl(""),
    });
  }

  calcularDistancia(): void {
    this.objMult.x1 = this.formulario.value.x1;
    this.objMult.y1 = this.formulario.value.y1;
    this.objMult.x2 = this.formulario.value.x2;
    this.objMult.y2 = this.formulario.value.y2;

    this.objMult.calcularDistancia();

    this.resultado = this.objMult.resultado;
    console.log(`Distancia calculada: ${this.resultado}`);
}
}
