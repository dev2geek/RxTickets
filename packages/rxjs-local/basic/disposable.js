'use strict';

const {Observable} = require('rxjs');

const counter$ = Observable.interval(1000);

const subscription1 = counter$.subscribe(i => {
  console.log('Subscription 1:', i);
});

const subscription2 = counter$.subscribe(i => {
  console.log('Subscription 2:', i);
});

setTimeout(() => {
  console.log('Canceling subscription 2');
  subscription2.unsubscribe();
}, 5000);