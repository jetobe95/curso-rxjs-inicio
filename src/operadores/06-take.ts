import { fromEvent } from "rxjs";
import { take } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$.pipe(take(2)).subscribe({
  next: (value) => console.log("next", value),
  complete: () => console.log("complete"),
});

