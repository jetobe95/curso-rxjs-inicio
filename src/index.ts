import {
  combineLatest,
  concat,
  from,
  fromEvent,
  interval,
  merge,
  Observable,
  of,
  range,
  timer,
} from "rxjs";
import {
  concatMap,
  delay,
  distinct,
  exhaustMap,
  finalize,
  map,
  mapTo,
  mergeAll,
  mergeMap,
  share,
  startWith,
  switchMap,
  take,
  tap,
} from "rxjs/operators";

const click$ = fromEvent(document, "click");

const array = [1, 2, 3, 4, 5];

click$
 .pipe(
   concatMap(val => of(Math.random().toString().substr(1,4)).pipe(delay(1000))),
 )
 .subscribe(console.log);