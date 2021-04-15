import { fromEvent } from "rxjs";
import { first } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click")

click$
.pipe(
    first((e)=>e.clientX > 180)
)
.subscribe({
  next: (value) => console.log("next", value),
  complete: () => console.log("complete"),
});
