import {Observable, of, from, fromEvent,concat } from 'rxjs';
import {allBooks, allReaders} from './data';
import {ajax, AjaxResponse} from 'rxjs/ajax';

//#region Creating Observables 

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

//-----------------------------
//Handlng the DOM events using the Observables
//using RxJs button event "fromEvent"
// let button = document.getElementById('readersButton');
//The values produced by the observables will be 
//javascript event object
// fromEvent(button,  'click').subscribe(
//     event => {
//         console.log(event);

//         let readersDiv = document.getElementById('readers');

//         for(let reader of allReaders){
//                 readersDiv.innerHTML += reader.name + '<br>'
//         }
//     });

//--------------------------
//making an ajax request using RxJs
// let button = document.getElementById('readersButton');

// fromEvent(button, 'click')
//     .subscribe(event => {
//         //server -> data -> readers
//         ajax('/api/readers')
//         .subscribe(ajaxResponse => {
//             console.log(ajaxResponse);

//             let readers = ajaxResponse.response;

//             let readersDiv = document.getElementById('readers');

//             for(let reader of readers){
//                 readersDiv.innerHTML += reader.name + '<br>';
//             }

//         })
//     });

    //#endregion 










