import { Routes } from "@angular/router";
//arreglo de rutas
export default[
  {
    path:'distancia',
    loadComponent:()=>import('./distancia/distancia.component').then(m=>m.DistanciaComponent)
  },
  {
    path:'multiplicacion',
    loadComponent:()=>import('./multiplicacion/multiplicacion.component').then(m=>m.MultiplicacionComponent)
  },
  {
    path:'zodiaco',
    loadComponent:()=>import('./zodiaco/zodiaco.component').then(m=>m.ZodiacoComponent)
  },


]as Routes
