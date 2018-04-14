'use strict';

const { Observable } = require('rxjs');

function getJSON(arr) {
  return Observable.from(arr).map(JSON.parse);
}

// getJSON([
//   '{"1":1, "2":2}',
//   '{"success: true}',
//   '{"enabled": true}'
// ]).subscribe(next => {
//   console.log('Parsed JSON: ', next);
// }, err => {
//   console.log(err.message);
// }, () => {
//   console.log('completed');
// });

const caught$ = getJSON([
  '{"1":1, "2":2}',
  '{"success: true}',
  '{"enabled": true}'
]).catch(err => {
  return Observable.of({
    error: 'There was an error parsing JSON'
  });
});

caught$.subscribe(next => {
  console.log('Parsed JSON: ', next);
}, err => {
  console.log(err.message);
}, () => {
  console.log('completed');
});