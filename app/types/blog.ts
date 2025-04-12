export interface Blog {
  _id: string
  title: string
  slug: string
  description: string
  category: string
  imageUrl: string
  createdAt: string
  body: string // Ensure this matches your API's field name and type
}
