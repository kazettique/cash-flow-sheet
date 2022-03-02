import _ from 'lodash';
import { INITIAL_PLAYER_SHEET } from './constants';
import { Sheet } from './types';

export function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function getInitialPlayerSheet(): Sheet {
  return {
    ..._.cloneDeep(INITIAL_PLAYER_SHEET),
    createDate: new Date(),
  };
}
