import { Routes } from "@angular/router";
//arreglo de rutas
export default[
  {
    path:'sign-in',
    loadComponent:()=>import('./sign-in/sign-in.component')
  },
  {
    path:'sign-up',
    loadComponent:()=>import('./sign-up/sign-up.component')
  }

]
