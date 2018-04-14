'use strict';

const Rx = require('rxjs');
const fs = require('fs');

const Observable = Rx.Observable;

const readdir$ = Observable.bindNodeCallback(fs.readdir);
const source$ = readdir$('/Users/minqi/workspace/rxSpace/rxjs-tickets');

const subscription = source$.subscribe(
  res => console.log(`List of directories: ${res}`),
  error => console.log(`Error: ${error}`),
  () => console.log('Done')
);
