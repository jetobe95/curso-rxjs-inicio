import { combineLatest, fromEvent, merge, race } from "rxjs";
import { map, startWith, tap } from "rxjs/operators";

console.clear();

// Get elements

const createSlider = (label?: string) => {
  const slider = document.createElement("input");
  slider.type = "range";
  slider.max = "200";
  return slider;
};
var weightSliderElem = createSlider("Peso");

var weightTextElem = document.createElement("p");
var heightSliderElem = createSlider("Altura");
var heightEditTextElem = document.createElement("input");

const heightTextElem = document.createElement("p");
var bmiTextElem = document.createElement("p");
document.body.append(
  weightSliderElem,
  weightTextElem,
  heightSliderElem,
  heightTextElem,
  heightEditTextElem,
  bmiTextElem
);

// Observables
var peso$ = fromEvent<any>(weightSliderElem, "input").pipe(
  map((ev) => ev.target.value),
  startWith(weightSliderElem.value)
);

var altura$ = fromEvent<any>(heightSliderElem, "input").pipe(
  map((ev) => parseInt(ev.target.value)),
  startWith((heightSliderElem as any).value)
);

var height2$ = fromEvent<any>(heightEditTextElem, "input").pipe(
  map((ev) => parseFloat(ev.target.value)),
  startWith(heightEditTextElem.value)
);

// TODO: create the Observable `bmi` which depends on
// Observables `weight` AND [`height1` OR `height2`].
const h1Orh2 = merge(altura$, height2$)
const bmi = combineLatest(
  peso$,
  h1Orh2
).pipe(
  tap(console.log),
  map(([w, h]) => [parseFloat(w), parseFloat(h)]),
  map(([w, h]) => w / (h * h)),
  map((n) => n),
  map((n) => n.toString())
);

// Subscriptions
peso$.subscribe((x) => (weightTextElem.innerHTML = x));
h1Orh2.subscribe((x) => (heightTextElem.innerHTML = x));
bmi.subscribe((x) => (bmiTextElem.innerHTML = x));
