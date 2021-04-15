import { fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators";

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");
const keyUpCode$ = keyUp$.pipe(map((e) => e.code));
const keyUpCodePluck$ = keyUp$.pipe(pluck('target','baseURI'));

keyUpCode$.subscribe((val)=>console.log('map',val));
keyUpCodePluck$.subscribe((val)=>console.log('pluck',val));
