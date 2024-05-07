//template
import { atom } from 'recoil';

// export type BoxStateFinal = {
//   id: string;
//   title: string;
//   suggestions: Array<{
//     id: string;
//     products: Array<{
//       id: string;
//       name: string;
//       price: number;
//       isVariant: boolean;
//     }>;
//   }>;
// };
export type BoxState = {
  id: string;
  suggestions: SuggestionState[];
};
export type SuggestionState = {
  id: string;
  products: ProductState[];
};
export type ProductState = {
  id: string;
  isVariant: boolean;
  name: string;
  description: string;
  price: number;
  imageURL: string;
};
export const boxStateFinal = atom<BoxState | null>({
  key: 'boxStateFinal',
  default: null

});