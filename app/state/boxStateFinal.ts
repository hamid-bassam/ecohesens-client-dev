//template
import { atom } from 'recoil';
import { BoxState } from '../services/boxService';

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

// TODO hamid refacto 

// export type BoxState = {
//   id: string;
//   user: UserState;
//   suggestions: SuggestionState[];
// };
// export type UserState = {
//   id: string;
//   firstname: string;
//   lastname: string;
//   email: string;

// };
// export type SuggestionState = {
//   id: string;
//   products: ProductState[];
// };
// export type ProductState = {
//   id: string;
//   isVariant: boolean;
//   name: string;
//   description: string;
//   price: number;
//   imageURL: string;
// };
export const boxStateFinal = atom<BoxState | null>({
  key: 'boxStateFinal',
  default: null

});