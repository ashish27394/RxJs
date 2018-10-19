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
let allBookObservable$ =  Observable.create(subscriber => {
    if(document.title != 'RxBookTracker')
    {
        subscriber.error('Incorrect page title');
    }

    for(let book of allBooks){
        subscriber.next(book);
    }

    setTimeout(()  => {
        subscriber.complete();
    },2000);

    return  () => console.log('Executing Teardown code');

});


allBookObservable$.subscribe(book => console.log(book.title));

