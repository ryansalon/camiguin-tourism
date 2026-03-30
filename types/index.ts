export interface Destination {
  id: string;
  name: string;
  category: 'Spot' | 'Hotel' | 'Restaurant' | 'Activity';
  description: string;
  shortDescription?: string;
  address: string;
  rating: number;
  reviewCount?: number;
  imageUrl: string;
  latitude: number;
  longitude: number;
  priceLevel?: '$' | '$$' | '$$$' | '$$$$';
  operatingHours?: string;
  tags?: string[];
  bestTime?: string;
  features?: string[];
}

export interface Review {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  rating: number;
  date: string;
  comment: string;
}
