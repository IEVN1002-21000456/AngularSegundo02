import { Routes } from "@angular/router";
//arreglo de rutas
export default[
  {
    path:'sign-in',
    loadComponent:()=>import('./sign-in/sign-in.component').then(c=>c.SignInComponent)
  },
  {
    path:'sign-up',
    loadComponent:()=>import('./sign-up/sign-up.component').then(c=>c.SignUpComponent)
  },

]as Routes
