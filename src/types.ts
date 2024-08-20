interface Price {
  amount: string;
  currencyCode: string;
}

interface CartBook {
  imageUrl: string;
  authors: string[];
  title: string;
  averageRating: number;
  ratingCount: number;
  price: Price;
}

interface CartItem {
  id: string;
  book: CartBook;
  qantity: number;
  delivery: string;
}

interface Cart {
  items: CartItem[];
  total: number;
}
export type { Cart, CartItem, CartBook, Price };
