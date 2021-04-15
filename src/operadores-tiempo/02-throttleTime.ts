import { asyncScheduler, fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, throttleTime, map, pluck } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click")
/// En cada click se esperan un tiempo para emitir el ultimo evento
click$
.pipe(
    throttleTime(3000) 
)
.subscribe({
  next: (value) => console.log("next", value),
  complete: () => console.log("complete"),
});

// Ejemplo 2

const input = document.createElement('input')
document.body.append( input )

const input$ = fromEvent<KeyboardEvent>(input,'keyup')

input$
.pipe(
    throttleTime(1000,asyncScheduler,{
        leading:true,
        trailing:true
    }),
    pluck('target','value'),
    distinctUntilChanged()
)
.subscribe(console.log)
