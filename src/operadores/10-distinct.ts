import { of } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of(1,1,2,2,3,3,4,4,5,5)

numeros$
.pipe(distinct())
.subscribe(console.log)