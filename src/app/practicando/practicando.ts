import { Component } from '@angular/core';

@Component({
  selector: 'app-practicando',
  imports: [],
  templateUrl: './practicando.html',
  styleUrl: './practicando.scss'
})
export class Practicando {
  x: number = 0;
  nombre: string = "Josue";
  val: boolean = true;
  alumnos: any[] = ["Josue",212, 21]; //any para momentos especiales de normal solo el tipo q sea
  alumnos_dict: {} = {};
  logged: boolean | null = null;
  y: any = null // Cualquier cosa, cualquier dato puede guardar


  mensaje:String = ""

  aumentarClics():void {
    this.x++;
  }

  restarClics(): void {
    this.x--;
    if (this.x < 0){
      this.x = 0;
    }
  }
  reseteoCicls(): void {
    this.x = 0;
  }
  mensajeClics(): void {
    if (this.x > 10){
      this.mensaje = "Hemos superado los 10 clics"
    }
    else if (this.x == 0){
      this.mensaje = "No has hecho nigun clic"
    }
  }
}
