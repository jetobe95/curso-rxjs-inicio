import { timer } from "rxjs";
const hoyEn5 = new Date();
const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("completado"),
};
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const timer$ = timer(hoyEn5);

timer$.subscribe(observer);
