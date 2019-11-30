import { random } from 'lodash';

export const coinToss = () => random(0, 1) > 0 ? 'tails' : 'heads';
