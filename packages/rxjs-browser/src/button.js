'use strict';

import {Observable} from 'rxjs';
import html from './button.html';

function init() {
  const root = component('div', 'Demo Area', ['highlight']);
  const btn1 = component('button', 'click me');
  root.appendChild(btn1);
  return root;
}

function component(tag, innerHTML, classes, attributes) {
  const element = document.createElement(tag);

  element.innerHTML = innerHTML;
  if (classes) {
    element.classList.add(...classes);
  }

  if (attributes && attributes.length) {
    for (const attribute of attributes) {
      element.setAttribute(attribute.name, attribute.value);
    }
  }
  return element;
}

document.body.appendChild(init());

const button = document.querySelector('button');

Observable.fromEvent(button, 'click')
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times`));