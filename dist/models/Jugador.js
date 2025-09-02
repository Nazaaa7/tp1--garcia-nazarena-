export class Jugador {
    constructor(id, nombre, edad, posicion) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
    }
    toString() {
        return `${this.nombre} (${this.edad})${this.posicion ? " - " + this.posicion : ""}`;
    }
}
