export interface AirbnbAPI {
  accommodation: Accommodation[];
  icons: Photo[];
}

export interface Accommodation {
  id: string;
  title: string;
  date: string;
  testimonials: Testimonials[];
  hasBadge: boolean;
  rating: number;
  price: number;
  host: string;
  location: Location;
  slug: string;
  photos: Photo[];
}

export interface Testimonials {
  id: string;
  name: string;
  image: string;
  comment: string;
  rating: number;
  customerTime: number;
  createdAt: number;
  stayedAt: number;
}

export interface Photo {
  id: string;
  source: string;
  description: string;
  url: string;
}

export interface Location {
  city: string;
  state: string;
  country: string;
  description: string;
}
