import { Component } from '@angular/core';
import { TemhComponent } from "../temh/temh.component";

@Component({
  selector: 'app-temp',
  imports: [TemhComponent],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css'
})
export class TempComponent {
  title:string ="Componente Temp";

  mensaje2:string="";
  recibirMensaje($event:string):void{
    this.mensaje2=$event;
  }
}
