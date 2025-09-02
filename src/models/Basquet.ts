
import { Deporte } from "./Deporte";
import { Equipo } from "./Equipo";

export class Basquet extends Deporte {
  constructor() { 
    super("Básquet", 5); // mx 5 jugadores
  } //super significa que estamos llamando al constructor de la clase base Deporte

  validar(equipo: Equipo): boolean {
    return equipo.cantidad === this.maxPorEquipo; //validar que el equipo tenga 5 jugadores
  }
}//
