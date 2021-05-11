import { fromEvent, interval } from "rxjs";
import { takeUntil } from "rxjs/operators";

const interval$ = interval(1000)

const button = document.createElement('button')
button.innerHTML = 'Detener conteo'
document.body.append(button)

const button$ = fromEvent(button,'click')

interval$
.pipe(
    takeUntil(button$)
)
.subscribe(console.log,null,()=>console.log('complete'))