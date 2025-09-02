export class Resultado {
    constructor(golesLocal, golesVisitante) {
        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitante;
    }
    toString() {
        return `${this.golesLocal} - ${this.golesVisitante}`;
    }
}
