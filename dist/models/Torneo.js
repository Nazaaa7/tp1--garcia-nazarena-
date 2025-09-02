export class Torneo {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.partidos = [];
    }
    programarPartido(partido) {
        if (this.partidos.some(p => p.id === partido.id)) {
            throw new Error(`El partido con id ${partido.id} ya existe.`);
        }
        this.partidos.push(partido);
    }
    listarPartidos() {
        return this.partidos.map(p => p.toString());
    }
    buscarPartido(id) {
        return this.partidos.find(p => p.id === id);
    }
}
