import { Jugador } from "./models/Jugador";
import { Equipo } from "./models/Equipo";
import { Futbol } from "./models/Futbol";
import { Basquet } from "./models/Basquet";
import { Partido } from "./models/Partido";
import { Resultado } from "./models/Resultado";
import { Torneo } from "./models/Torneo";
const messi = new Jugador("1", "Messi", 36, "Delantero");
const diMaria = new Jugador("2", "Di María", 35, "Mediocampista");
const equipoFutbol = new Equipo("Argentina", 36, "1");
equipoFutbol.agregarJugador(messi);
equipoFutbol.agregarJugador(diMaria);
const curry = new Jugador("10", "Stephen Curry", 35, "Base");
const equipoBasquet = new Equipo("Pelota", 35, "2");
equipoBasquet.agregarJugador(curry);
const futbol = new Futbol();
const basquet = new Basquet();
console.log("Validación de equipos:");
console.log(futbol.validar(equipoFutbol)); // true
console.log(basquet.validar(equipoBasquet)); // true
const partido = new Partido("p1", equipoFutbol, new Equipo("Brasil", 36, "3"), futbol);
partido.jugar(new Resultado(2, 1));
const torneo = new Torneo("t1", "Dos");
torneo.programarPartido(partido);
console.log("Partidos en torneo:");
console.log(torneo.listarPartidos());
