export class Equipo {
    constructor(nombre, edad, id) {
        this.nombre = nombre;
        this.edad = edad;
        this.id = id;
        this.jugadores = [];
    }
    get cantidad() {
        return this.jugadores.length;
    }
    agregarJugador(jugador) {
        if (this.jugadores.some(j => j.id === jugador.id)) {
            throw new Error(`El jugador con id ${jugador.id} ya existe en el equipo.`);
        }
        this.jugadores.push(jugador);
    }
    listarIntegrantes() {
        return this.jugadores.map(j => j.toString());
    }
    toString() {
        return `Equipo ${this.nombre} con ${this.cantidad} jugadores.`;
    }
}
