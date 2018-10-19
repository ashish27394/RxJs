import {Observable, of, from, fromEvent,concat } from 'rxjs';
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
//you can pass anything in omma separator values
// let source1$ = of('hello', 10 ,true , allReaders[0].name);

// source1$.subscribe(value => console.log(value));

//creating observer using "from" function
//You can pass the following things into "from" function
//subscribable i.e. another observable
//Promise
//Array
// let source2$ = from(allBooks);
// source2$.subscribe(book => console.log(book.title));

//-----------------------------------------
//Combining two observables using concat
// let source1$ = of('hello', 10 ,true , allReaders[0].name);
// let source2$ = from(allBooks);
// concat(source1$,source2$).subscribe(value => console.log(value));