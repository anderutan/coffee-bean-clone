export interface Review {
  id: number;
  nickname?: string;
  summary?: string;
  review?: string;
}

export interface Coffee {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stock: number;
  reviews: Review[];
}
