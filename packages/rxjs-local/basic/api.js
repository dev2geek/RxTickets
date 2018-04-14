'use strict';

const Rx = require('rxjs');
const Observable = Rx.Observable;

function logValue(val) {
  console.log(val);
}

const src$ = Observable.range(2, 6);

const sum$ = src$.reduce((acc, x) => {
  return acc + x;
});
const even$ = src$.filter( val => {
  return val % 2 === 0;
});
const double$ = src$.map(name => {
  return name*2;
});

console.log('~ reduce');
sum$.subscribe(logValue);
console.log('~ filter');
even$.subscribe(logValue);
console.log('~ map');
double$.subscribe(logValue);