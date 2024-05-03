// pas du tout fonctionnel pour le moment
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isVariant?: boolean;
}

export interface Suggestion {
  id: string;
  mainProduct: Product;
  secondaryProducts: Product[];
}

export interface BoxType {
  id: string;
  title: string;
  description: string;
  suggestions: Suggestion[];
}