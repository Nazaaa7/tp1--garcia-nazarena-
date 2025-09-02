import IIdentificable from "../interfaces/IIdentificable";
import { Equipo } from "./Equipo";
import { Deporte } from "./Deporte";
import { Resultado } from "./Resultado";

export class Partido implements IIdentificable {
  public resultado?: Resultado;

  constructor(
    public readonly id: string,
    public local: Equipo,
    public visitante: Equipo,
    public deporte: Deporte
  ) {
    if (local === visitante) {
      throw new Error("El equipo local y visitante no pueden ser el mismo."); // Validación de equipos
    }
  }

  jugar(resultado: Resultado): void {
    if (!this.deporte.validar(this.local) || !this.deporte.validar(this.visitante)) {
      throw new Error("Los equipos no cumplen con los requisitos del deporte.");//validacion para que los equipos cumplan con los requisitos del deporte
    }
    this.resultado = resultado;
  }

  toString(): string {
    return `${this.local.nombre} vs ${this.visitante.nombre} - ${
      this.resultado ? this.resultado.toString() : "Pendiente"
    }`;
  }
}
