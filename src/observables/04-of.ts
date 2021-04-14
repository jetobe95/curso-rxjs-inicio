import { of } from "rxjs";

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of([1, 2], { a: 1, b: 2 }, true, function () {},Promise.resolve(true));

console.log("Inicio");
obs$.subscribe(
  (next) => console.log("next", next),
  null,
  () => console.log("terminamos la secuencia!")
);
console.log("Fin");
