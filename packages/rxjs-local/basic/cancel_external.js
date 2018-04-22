'use strict';

const {Observable} = require('rxjs');

const p = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000);
});

p.then(() => {
  console.log('Potential side effect!');
});

const subscription = Observable
  .fromPromise(p)
  .subscribe(msg => {
    console.log('Observable resolved');
  });

subscription.unsubscribe();
