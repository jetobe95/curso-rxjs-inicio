import { Observable, Observer } from "rxjs";
const observer: Observer<any> = {
  next: (value) => console.log("next", value),
  error: (error) => console.warn("error", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    subs.next(count);
  }, 1000);


//   setTimeout(()=>{
//     observer.complete()
//   },2500)


  /// Esta funcion se va a ejecutar cuando se llame a unsubscribe
  return () => {
      console.log('intervalo destruido')
      clearInterval(interval)
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);
subs1.add(subs2).add(subs3)
setTimeout(() => {
  subs1.unsubscribe();
  console.log("Completado timeout");
}, 3000);
