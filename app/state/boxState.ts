//template
import { atom } from 'recoil';

// export const boxState = atom<BoxType | null>({
//   key: 'boxState',
//   default: null,
// });

export const boxState = atom<{ id: string, message: string } | null>({
  key: 'boxState',
  default: null,
});