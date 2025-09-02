import IIdentificable from "../interfaces/IIdentificable";
import { Partido } from "./Partido";

export class Torneo implements IIdentificable {
  private partidos: Partido[] = [];

  constructor(public readonly id: string, public nombre: string) {}

  programarPartido(partido: Partido): void {
    if (this.partidos.some(p => p.id === partido.id)) {
      throw new Error(`El partido con id ${partido.id} ya existe.`);
    }
    this.partidos.push(partido);
  }

  listarPartidos(): string[] {
    return this.partidos.map(p => p.toString());
  }

  buscarPartido(id: string): Partido | undefined {
    return this.partidos.find(p => p.id === id);
  }
}
