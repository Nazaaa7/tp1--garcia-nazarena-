export class Partido {
    constructor(id, local, visitante, deporte) {
        this.id = id;
        this.local = local;
        this.visitante = visitante;
        this.deporte = deporte;
        if (local === visitante) {
            throw new Error("El equipo local y visitante no pueden ser el mismo.");
        }
    }
    jugar(resultado) {
        if (!this.deporte.validar(this.local) || !this.deporte.validar(this.visitante)) {
            throw new Error("Los equipos no cumplen con los requisitos del deporte.");
        }
        this.resultado = resultado;
    }
    toString() {
        return `${this.local.nombre} vs ${this.visitante.nombre} - ${this.resultado ? this.resultado.toString() : "Pendiente"}`;
    }
}
