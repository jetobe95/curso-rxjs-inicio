import { combineLatest, fromEvent } from "rxjs";
import { map, startWith, tap } from "rxjs/operators";

console.clear();

// Get elements

const createSlider = (label?:string) => {
  const slider = document.createElement("input");
  slider.type = "range";
  slider.max = "200"
  return slider;
};
var weightSliderElem = createSlider('Peso')

var weightTextElem = document.createElement("p");
var heightSliderElem = createSlider('Altura');
const heightTextElem = document.createElement("p");
var bmiTextElem = document.createElement("p");
document.body.append(
  weightSliderElem,
  weightTextElem,
  heightSliderElem,
  heightTextElem,
  bmiTextElem
);

// Observables
var peso = fromEvent<any>(weightSliderElem, "input").pipe(
  map((ev) => ev.target.value),
  startWith(weightSliderElem.value)
);

var altura = fromEvent<any>(heightSliderElem, "input").pipe(
  map((ev) => ev.target.value),
  startWith((heightSliderElem as any).value)
);

// TODO: create the Observable `bmi` which depends on
// Observables `weight` and `height` and is calculated
// as BMI = w / h*h, where w is the weight in kilograms,
// and h is the height in meters.

const bmi = combineLatest(peso, altura).pipe(
  map(([w, h]) =>[parseFloat(w),parseFloat(h)]),
  tap(console.log),
  map(([w, h]) => w / (h * h)),
  map((n) => (n)),
  map((n) => n.toString())
);

// Subscriptions
peso.subscribe((x) => (weightTextElem.innerHTML = x));
altura.subscribe((x) => (heightTextElem.innerHTML = x));
bmi.subscribe((x) => (bmiTextElem.innerHTML = x));
