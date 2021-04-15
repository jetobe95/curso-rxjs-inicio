import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((x) => console.log("antes", x)),
    map((x) => x * 10),
    tap((x) => console.log("despues", x),null,()=>console.log('se terminó todo'))
  )
  .subscribe((val) => console.log("subs", val));
