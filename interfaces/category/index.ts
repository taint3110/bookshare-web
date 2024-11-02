export interface ICategory {
  id: string
  name: string
  description?: string | null
  image?: string | null
}

export interface ICategoryWithRelations extends ICategory {}
