//template
import { atom } from 'recoil';


export type BoxState = {
  id: string;
  suggestions: SuggestionState[];
};
export type SuggestionState = {
  id: string;
  products: { id: string }[];
};
export type ProductState = {
  id: string;
};
export const boxStateFinal = atom<BoxState | null>({
  key: 'boxStateFinal',
  default: null

});