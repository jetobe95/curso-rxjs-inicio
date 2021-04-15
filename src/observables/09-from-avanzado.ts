import { from } from "rxjs";

const source$ = from(fetch('https://api.github.com/users/jetobe95'))

source$.subscribe({
    next:val=>console.log('value',val),
    complete:()=>console.log('completado'),
})

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const miIterable = miGenerador()

// for(let i of miIterable){
//     console.log(i)
// }

from(miIterable).subscribe(console.log)