'use strict';

const { Observable } = require('rxjs');

const observable1 = Observable.interval(400);
const observable2 = Observable.interval(300);

const subscribtion = observable1.subscribe(x => {
  console.log('first: ' + x);
});
const childSubscription = observable2.subscribe(x => {
  console.log('second: ' + x);
});

subscribtion.add(childSubscription);

setTimeout(() => {
  // Unsubscribes BOTH subscription and childsubscription
  subscribtion.unsubscribe();
}, 2000);