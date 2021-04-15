import { from } from "rxjs";
import { filter } from "rxjs/operators";

const personajes = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];
const personajes$ = from(personajes);

const heroes$ = personajes$.pipe(
  filter((personaje) => personaje.tipo === "heroe")
);
const villanos$ = personajes$.pipe(
  filter((personaje) => personaje.tipo === "villano")
);

heroes$.subscribe((v) => console.log("heroes", v));
villanos$.subscribe((v) => console.log("villano", v));
