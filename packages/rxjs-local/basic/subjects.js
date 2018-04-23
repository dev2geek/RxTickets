'use strict';

const {Observable, Subject} = require('rxjs');

const subject$ = new Subject();
const source$ = Observable
  .interval(300)
  .map(v => {
    return `interval message #${v}`;
  })
  .take(5);

// source$.subscribe(next => {
//   console.log(`val: ${next}`);
// });

source$.subscribe(subject$);

subject$.subscribe(
  next => {
    console.log(`Next: ${next}`);
  },
  error => {
    console.log(`Error: ${error.message}`);
  },
  () => {
    console.log(`Completed!`);
  }
);

subject$.next(`Our message #1`);
subject$.next(`Our message #2`);

// setTimeout(subject$.complete, 1000);