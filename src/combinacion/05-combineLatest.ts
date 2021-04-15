import { combineLatest, fromEvent, interval, merge, timer } from 'rxjs';
import { map, pluck, take } from 'rxjs/operators';
const input1 = document.createElement('input')
input1.placeholder = 'email@gmail.com'

const input2 = document.createElement('input')
input2.placeholder = '***************'
input2.type = 'password'

document.body.append(input1,input2)

fromEvent(input1,'')

const getInputStream = (el:HTMLElement)=> 
                        fromEvent<KeyboardEvent>(el,'keyup')
                        .pipe(pluck<KeyboardEvent,string>('target','value'))
combineLatest(
    getInputStream(input1),
    getInputStream(input2),
).subscribe(console.log)
