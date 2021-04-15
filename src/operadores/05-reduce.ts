import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const totalReducer = (accumulador: number, actual: number) => {
  return accumulador + actual;
};

interval(500)
.pipe(
    tap(console.log),
    take(6),
    reduce(totalReducer)
)
.subscribe({
    next:val=>console.log('next',val),
    complete:()=>console.log('Complete')
});
