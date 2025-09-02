import { Deporte } from "./Deporte";
export class Basquet extends Deporte {
    constructor() {
        super("Básquet", 5);
    }
    validar(equipo) {
        return equipo.cantidad <= this.maxPorEquipo;
    }
}
