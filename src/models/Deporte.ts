import { Equipo } from "./Equipo";

export abstract class Deporte {
  constructor(public nombre: string, public maxPorEquipo: number) {}

  abstract validar(equipo: Equipo): boolean;
}
//es una clase abstracta porque define un contrato para los deportes, obligando a cada tipo de deporte a implementar su propia lógica de validación de equipos