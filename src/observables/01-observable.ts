import { Observable } from "rxjs";
const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.complete();

  // Forzar un error
  const a = undefined
  a.nombre = 'Hello'

  subs.next("Hola");
  subs.next("Mundo");
});

obs$.subscribe(
  (next) => console.log("next: ", next),
  (error) => console.warn("error: ", error),
  ()=> console.info('Completado')
);
