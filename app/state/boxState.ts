//template
import { atom } from 'recoil';
import { BoxWithDetails } from '../_components/ClientBoxTest';

// export const boxState = atom<BoxType | null>({
//   key: 'boxState',
//   default: null,
// });

export const boxState = atom<BoxWithDetails | null>({
  key: 'boxState',
  default: null

});