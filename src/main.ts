// Importamos todas las clases necesarias
import { Jugador } from "./models/Jugador";
import { Equipo } from "./models/Equipo";
import { Futbol } from "./models/Futbol";
import { Basquet } from "./models/Basquet";
import { Partido } from "./models/Partido";
import { Resultado } from "./models/Resultado";
import { Torneo } from "./models/Torneo";

// crear deportes
const futbol = new Futbol();
const basquet = new Basquet();

// jugadores
const jugador = new Jugador("1", "Messi", 36, "Delantero");
const jugador2 = new Jugador("2", "Di María", 35, "Mediocampista");
const jugador3 = new Jugador("10", "LeBron", 35, "Base");

console.log(" Jugadores  creados:");
console.log(jugador.toString());
console.log(jugador2.toString());
console.log(jugador3.toString());
console.log("-----------------------------------");

// crear equipos
const equipoFutbol = new Equipo("Argentina", 36, "11"); 
equipoFutbol.agregarJugador(jugador);
equipoFutbol.agregarJugador(jugador2);

// agregar jugadores faltantes automáticamente para completar 11 para el futbol
for (let i = 3; i <= 11; i++) {
  equipoFutbol.agregarJugador(new Jugador(`${i}`, `Jugador ${i}`, 25, `Posición ${i}`));
}

const equipoBasquet = new Equipo("Pelota", 36, "5");
equipoBasquet.agregarJugador(jugador3);

// agregar jugadores faltantes automáticamente para completar 5 para el basquet
for (let i = 2; i <= 5; i++) {
  equipoBasquet.agregarJugador(new Jugador(`${i}`, `Jugador ${i}`, 25, `Posición ${i}`));
}

console.log("Equipos creados:");
console.log(equipoFutbol.toString());
console.log(equipoBasquet.toString());
console.log("-----------------------------------");

//validar equipos segun el deporte
console.log(`¿Argentina válido en fútbol? ${futbol.validar(equipoFutbol)}`);
console.log(`¿Pelota válido en básquet? ${basquet.validar(equipoBasquet)}`);

// partido futbol
const brasil = new Equipo("Brasil", 36, "11");

// crear jugadores  para el otro equipo
for (let i = 1; i <= 11; i++) {
  brasil.agregarJugador(new Jugador(`${i}`, `Jugador Brasil ${i}`, 25, `Posición ${i}`));
}

const partido = new Partido("p1", equipoFutbol, brasil, futbol);

// Resultado del partido
const resultado = new Resultado(2, 1);
partido.jugar(resultado);

console.log("Partido jugado:");
console.log(partido.toString());
console.log("-----------------------------------");

// TORNEO
const torneo = new Torneo("t1", "Torneo");
torneo.programarPartido(partido);

console.log("Partidos en el torneo:");
console.log(torneo.listarPartidos());
console.log("-----------------------------------");
