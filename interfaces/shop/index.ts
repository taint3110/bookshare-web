export interface IShop {
  id?: string
  createdBy?: string
  updatedBy?: string | null
  deletedBy?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
  name?: string
  description?: string | null
  image?: string | null
  status?: string
  city?: string | null
  state?: string | null
  country?: string | null
  address?: string | null
  rate?: number
}
