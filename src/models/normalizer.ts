import {CategoryType, PhotoType} from "./types/gallery.type";

export const PhotosNormalizer = (data: PhotoType[]) => {
    return data.map(({categories, id, url, height, width, breeds = []}) => ({
        categories,
        id,
        url,
        height,
        width,
        breeds,
    }))
}
export const CategoriesNormalizer = (data: CategoryType[]) => {
    return data.map(({id, name}) => ({
        id,
        name
    }))
}