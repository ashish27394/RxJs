import {Observable, of, from, fromEvent} from 'rxjs';
import {allBooks, allReaders} from './data';

// One way
// function subscribe(subscriber){
//     for(let book of allBooks){
//         subscriber.next(book);
//     }
// }

// let allBookObservable$ = new Observable(subscribe);

//------------------------

//2nd way
// let allBookObservable$ = new Observable(subscriber => {
//     for(let book of allBooks){
//                 subscriber.next(book);
//             }
// });

//using all 3 methods of Observer Interface
// let allBookObservable$ = new Observable(subscriber => {
//     if(document.title != 'RxBookTracker')
//     {
//         subscriber.error('Incorrect page title');
//     }

//     for(let book of allBooks){
//         subscriber.next(book);
//     }

//     setTimeout(()  => {
//         subscriber.complete();
//     },2000);

//     return  () => console.log('Executing Teardown code');

// });

//using Observable.create instaed of new Observable
// let allBookObservable$ =  Observable.create(subscriber => {
//     if(document.title != 'RxBookTracker')
//     {
//         subscriber.error('Incorrect page title');
//     }

//     for(let book of allBooks){
//         subscriber.next(book);
//     }

//     setTimeout(()  => {
//         subscriber.complete();
//     },2000);

//     return  () => console.log('Executing Teardown code');

// });


// allBookObservable$.subscribe(book => console.log(book.title));


//---------------------------------------
//creating observer using "of" function
let source1$ = of('hello', 10 ,true , allReaders[0].name);

source1$.subscribe(value => console.log(value));

