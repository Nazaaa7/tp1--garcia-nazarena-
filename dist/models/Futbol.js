import { Deporte } from "./Deporte";
export class Futbol extends Deporte {
    constructor() {
        super("Fútbol", 11);
    }
    validar(equipo) {
        return equipo.cantidad <= this.maxPorEquipo;
    }
}
