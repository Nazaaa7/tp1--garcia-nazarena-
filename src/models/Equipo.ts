import ICompetidor from "../interfaces/iCompetidor";
import { Jugador } from "./Jugador";

export class Equipo implements ICompetidor { // Implementa la interfaz ICompetidor
  private jugadores: Jugador[] = [];

  constructor(public nombre: string, public edad: number, public id: string) {}
  get cantidad(): number {
    return this.jugadores.length;
  }

  agregarJugador(jugador: Jugador): void {
    if (this.jugadores.some(j => j.id === jugador.id)) {
      throw new Error(`El jugador con id ${jugador.id} ya existe en el equipo.`);
    }
    this.jugadores.push(jugador); //metodo para validar que el jugador se agregue al equipo
  }

  listarIntegrantes(): string[] {
    return this.jugadores.map(j => j.toString());
  }//metodo para listar integrantes

  toString(): string {
    return `Equipo ${this.nombre} con ${this.cantidad} jugadores.`;
  }//metofo para representar al equipo como una cadena
} 
