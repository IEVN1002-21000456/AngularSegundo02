import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { DatosPersonales } from './simbomes';

@Component({
  selector: 'app-zodiaco',
  imports: [ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent implements OnInit {

  formulario!: FormGroup

  nombreCompleto: string = '';
  edadFinal: number = 0;
  signoChino: string = '';
  imagenChinoFinal: string = '';

  objCalculadora: DatosPersonales = new DatosPersonales();

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(""),
      apaterno: new FormControl(""),
      amaterno: new FormControl(""),
      dia: new FormControl(null),
      mes: new FormControl(null),
      anio: new FormControl(null),
      sexo: new FormControl(""),
    });
  }


  imprimirInformacion(): void {

    if (this.formulario.invalid) {
      alert("Faltan datos en el formulario.");
      return;
    }

    let data = this.formulario.value;

    this.objCalculadora.nombre = data.nombre;
    this.objCalculadora.apellidoPaterno = data.apaterno;
    this.objCalculadora.apellidoMaterno = data.amaterno;
    this.objCalculadora.dia = Number(data.dia);
    this.objCalculadora.mesNacimiento = Number(data.mes);
    this.objCalculadora.anioNacimiento = Number(data.anio);
    this.objCalculadora.sexo = data.sexo;
    this.objCalculadora.ejecutarCalculos();

    this.nombreCompleto = `${this.objCalculadora.nombre} ${this.objCalculadora.apellidoPaterno} ${this.objCalculadora.apellidoMaterno}`;

    this.edadFinal = this.objCalculadora.edad;
    this.signoChino = this.objCalculadora.signoChino;
    this.imagenChinoFinal = this.objCalculadora.imagenChino;

  }
}
