export type CategoryType = {
    id: number,
    name: string
}

export type PhotoType = {
    breeds: [],
    categories: CategoryType[]
    id: string
    url: string
    width: number
    height: number
}

export type GalleryState = {
    photoList: PhotoType[],
    page: number,
    categories: CategoryType[],
    currentCategoryId?: number
}