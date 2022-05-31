import {CategoryType, PhotoType} from "./models.types";

export const PhotosNormalizer = (data: PhotoType[]): PhotoType[] => {
    return data.map(({categories, id, url, height, width, breeds = []}) => ({
        categories,
        id,
        url,
        height,
        width,
        breeds,
    }))
}

export const CategoriesNormalizer = (data: CategoryType[]): CategoryType[] => {
    return data.map(({id, name}) => ({
        id,
        name
    }))
}