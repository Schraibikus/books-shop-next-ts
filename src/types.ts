interface BookItem {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string;
    imageLinks: {
      thumbnail: string;
    };
    description?: string | undefined;
    averageRating?: number;
    ratingCount?: number;
  };
  saleInfo?: {
    listPrice: {
      amount: number | undefined;
      currencyCode: string | undefined;
    };
  };
}

interface CartBook {
  imageUrl: string;
  authors: string | string[];
  title: string;
  averageRating: number;
  ratingCount: number;
  amount: number;
  currencyCode: string;
}

interface CartItemType {
  id: string;
  book: CartBook;
  qantity: number;
  delivery: string;
}

interface CartTotal {
  items: CartItemType[];
  total: number;
}

export type { CartTotal, CartItemType, CartBook, BookItem };
