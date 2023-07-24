export interface ProductModel {
  _id: string
  categories: string[]
  tags: string[]
  title: string
  image: string
  description: string
  link: string
  price: number
  credit: number
  oldPrice: number
  characteristics: ProductCharacteristic[]
  advantages: string
  initialRating: number
  createdAt: Date
  updatedAt: Date
  reviews: ReviewModel[]
  reviewCount: number
  reviewAvg: number
}

export interface ProductCharacteristic {
  name: string
  value: string
}

export interface ReviewModel {
  _id: string
  name: string
  title: string
  description: string
  rating: number
  productId: string
  createdAt: Date
  updatedAt: Date
}
