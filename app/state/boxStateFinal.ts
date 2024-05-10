//template
import { atom } from 'recoil';
import { BoxState } from '../services/boxService';

export const boxStateFinal = atom<BoxState | null>({
  key: 'boxStateFinal',
  default: null

});