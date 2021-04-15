import { fromEvent, interval, of, pipe } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";

const letras$ = of("a", "b", "c");

letras$
.pipe(
    mergeMap(l=>interval(1000).pipe(map(i=> l + i),take(3)))
)
// .subscribe({
//   next: (next) => console.log("next", next),
//   complete: () => console.log("complete"),
// });

const mouseup$ = fromEvent(document,'mouseup')
const mousedown$ = fromEvent(document,'mousedown')
const interval$ = interval(1000)
mousedown$
.pipe(
    mergeMap(()=>interval$.pipe(takeUntil(mouseup$)))
)
.subscribe(console.log)
