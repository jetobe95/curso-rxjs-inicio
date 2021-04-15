import { fromEvent, interval, of } from "rxjs";
import { sampleTime, map, sample, tap, delay, take } from "rxjs/operators";
const interval$ = interval(100);
const click$ = fromEvent<MouseEvent>(document, "click")


interval$.pipe(
    sample(click$)
).subscribe({
  next: (value) => console.log("next", value),
  complete: () => console.log("complete"),
});
