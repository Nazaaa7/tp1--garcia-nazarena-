
import { Deporte } from "./Deporte";
import { Equipo } from "./Equipo";

export class Futbol extends Deporte {
  constructor() {
    super("Fútbol", 11); // max 11 jugadores
  }

  validar(equipo: Equipo): boolean {
    // validar que el equipo tenga al menos 11 jugadores
    return equipo.cantidad === this.maxPorEquipo;
  }
}
