import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, first, map, pluck } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click")
/// En cada click se esperan un tiempo para emitir el ultimo evento
// click$
// .pipe(
//    debounceTime(3000) 
// )
// .subscribe({
//   next: (value) => console.log("next", value),
//   complete: () => console.log("complete"),
// });

// Ejemplo 2

const input = document.createElement('input')
document.body.append( input )

const input$ = fromEvent<KeyboardEvent>(input,'keyup')

input$
.pipe(
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged()
)
.subscribe(console.log)
