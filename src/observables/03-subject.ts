import { Observable, Observer, Subject } from "rxjs";
const observer: Observer<any> = {
  next: (value) => console.log("next", value),
  error: (error) => console.warn("error", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const interval = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => {
      clearInterval(interval)
      console.log('interval terminado')
    };
});

/**
 * 1 - Casteo multiple
 * 2 - tambien es un observer
 * 3 - puede manejar error next y complete
 */
const subject$ = new Subject()
const subscription = intervalo$.subscribe(subject$)

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.complete()
    subscription.unsubscribe()

}, 3000);
