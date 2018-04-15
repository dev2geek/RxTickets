import _ from 'lodash';
import './style.css';

function init() {
  const root = component('div', _.join(['RxJS', 'samples'], ' '), ['highlight'] );

  const a1 = component('a', 'sample 1', ['list'], [
    {
      'name': 'href',
      'value': 'http://www.taobao.com'
    },
    {
      'name': 'target',
      'value': '_blank'
    }
  ]);

  root.appendChild(a1);

  return root;
}

function component(tag, innerHTML, classes, attributes) {
  const element = document.createElement(tag);

  element.innerHTML = innerHTML;
  element.classList.add(...classes);

  if (attributes && attributes.length) {
    for (const attribute of attributes) {
      element.setAttribute(attribute.name, attribute.value);
    }
  }

  return element;
}

document.body.appendChild(init());