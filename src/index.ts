import { coinToss } from './app/SampleModule';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = ['Coin', 'drops at', coinToss()].join(' ');

    return element;
}

document.body.appendChild(component());
