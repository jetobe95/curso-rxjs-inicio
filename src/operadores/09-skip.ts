import { fromEvent, interval } from "rxjs";
import { skip, takeUntil } from "rxjs/operators";

const interval$ = interval(1000)

const button = document.createElement('button')
button.innerHTML = 'Detener conteo'
document.body.append(button)

const button$ = fromEvent(button,'click').pipe(skip(1))
interval$
.pipe(
    takeUntil(button$)
)
.subscribe((next)=>{
    console.log('next',next)
},null,()=>console.log('complete'))