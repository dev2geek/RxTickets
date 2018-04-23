/*
 * Sharing state cause CONCURRENCE issue
 */

'use strict';

const { Observable } = require('rxjs');

let evenTicks = 0;

function updateDistance(i) {
  console.log(`~~ tick ${i}`);
  if (i%2 === 0) {
    evenTicks += 1;
  }

  return evenTicks;
}

const ticksObservable = Observable.interval(1000).map(updateDistance);

/*
 * sharing state works for 1 subscription
 */

// ticksObservable.subscribe(() => {
//   console.log(`Subscriber 1 - evenTicks: ${evenTicks} so far`);
// });

/*
 * sharing state messed up with more than 1 subscriptions
 */

ticksObservable.subscribe(() => {
  console.log(`Subscriber 1 - evenTicks: ${evenTicks} so far`);
});

ticksObservable.subscribe(() => {
  console.log(`Subscriber 2 - evenTicks: ${evenTicks} so far`);
});

ticksObservable.subscribe(() => {
  console.log(`Subscriber 3 - evenTicks: ${evenTicks} so far`);
});
