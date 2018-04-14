'use strict';

const Rx = require('rxjs');
const Observable = Rx.Observable;

const a$ = Observable.interval(20).map(i => `A${i}`);
const b$ = Observable.interval(10).map(i => `B${i}`);

Observable.merge(a$, b$).subscribe( x => {
  console.log(x);
});