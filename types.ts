
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  specs: {
    screen: string;
    processor: string;
    ram: string;
    battery: string;
    camera: string;
  };
  description: string;
  isOffer?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export interface Review {
  id: string;
  user: string;
  comment: string;
  rating: number;
  avatar: string;
}

export type ViewState = 'home' | 'details' | 'comparison' | 'offers' | 'iphone' | 'samsung' | 'xiaomi' | 'huawei';
