import { fromEvent, interval, of } from "rxjs";
import { sample, auditTime, tap, pluck } from "rxjs/operators";
const interval$ = interval(100);
const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    pluck("x"),
    tap((value) => console.log('tap',value)),
    auditTime(5000)
  )
  .subscribe({
    next: (value) => console.log("next", value),
    complete: () => console.log("complete"),
  });
