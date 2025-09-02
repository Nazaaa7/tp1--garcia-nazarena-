import IIdentificable from "../interfaces/IIdentificable";

export class Jugador implements IIdentificable { 
  constructor(
    public readonly id: string,
    public nombre: string, //public significa que la propiedad es accesible desde fuera de la clase
    public edad: number,
    public posicion?: string
  ) {}

  toString(): string {
    return `${this.nombre} (${this.edad})${this.posicion ? " - " + this.posicion : ""}`; //toString es un método que devuelve una representación en cadena del jugador
  }
}
