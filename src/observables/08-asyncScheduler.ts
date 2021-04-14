import { asyncScheduler } from "rxjs";

// const saludar = () => console.log("Hola mundo!");
// const saludar2 = (nombre:string) => console.log("Hola ",nombre,'!');
// asyncScheduler.schedule(saludar2, 2000,'Jeffrey');
const subscripcion = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);
    this.schedule(state + 1, 1000);
  },
  2000,
  0
);

asyncScheduler.schedule(() => subscripcion.unsubscribe(), 6000);
