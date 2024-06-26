export interface Review {
  id: string;
  nickname?: string;
  summary?: string;
  review?: string;
}

export interface Coffee {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stock: number;
  reviews: Review[];
}
