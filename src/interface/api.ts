export interface iServices {
  id: string
  title: string
  day: number
  age: number
  how_month: string[]
  availability: number
  departure: string
  departureTime: string
  returnTime: string
  included: string[]
  notIncluded: string[]
  lat: string
  long: string
  description: string
  image: string
  price: number
  availabilityType: string
  location: string
  createdAt: string
  updatedAt: string
  review: any[]
  category: string
}

export interface iDebounced {
  searchQuery: string
  delay: number
}

export interface iTours {
  id: string,
  title: string,
  description: string,
  duration: number,
  places: string,
  inclusions: string,
  exclusions: string,
  currency: string,
  single_supplement: number,
  publish_start: string,
  publish_end: string,
  createdAt: string,
  updatedAt: string
  images: any[],
  travelPlan: any[]
  priceTable: any[]
}
