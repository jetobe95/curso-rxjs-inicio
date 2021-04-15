import { fromEvent } from "rxjs";
import { sampleTime, map, pluck } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");
click$
  .pipe(
    sampleTime(1000),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe({
    next: (value) => console.log("next", value),
    complete: () => console.log("complete"),
  });
