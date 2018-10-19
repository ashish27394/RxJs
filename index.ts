import {Observable} from 'rxjs';
import {allBooks} from './data';

// One way
function subscribe(subscriber){
    for(let book of allBooks){
        subscriber.next(book);
    }
}

let allBookObservable$ = new Observable(subscribe);

allBookObservable$.subscribe(book => console.log(book.title));

