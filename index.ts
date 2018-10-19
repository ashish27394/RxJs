import {Observable} from 'rxjs';
import {allBooks} from './data';

// One way
// function subscribe(subscriber){
//     for(let book of allBooks){
//         subscriber.next(book);
//     }
// }

// let allBookObservable$ = new Observable(subscribe);

//------------------------

//2nd way
let allBookObservable$ = new Observable(subscriber => {
    for(let book of allBooks){
                subscriber.next(book);
            }
});

allBookObservable$.subscribe(book => console.log(book.title));

