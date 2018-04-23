/*
 * Solving CONCURRENCE issue
 */
'use strict';

const { Observable } = require('rxjs');

function updateDistance(acc, i) {
  console.log(`~~ tick ${i}`);
  if (i%2 === 0) {
    acc += 1;
  }

  return acc;
}

const ticksObservable = Observable.interval(1000).scan(updateDistance, 0);

ticksObservable.subscribe(evenTicks => {
  console.log(`Subscriber 1 - evenTicks: ${evenTicks} so far`);
});

ticksObservable.subscribe(evenTicks => {
  console.log(`Subscriber 2 - evenTicks: ${evenTicks} so far`);
});

ticksObservable.subscribe(evenTicks => {
  console.log(`Subscriber 3 - evenTicks: ${evenTicks} so far`);
});