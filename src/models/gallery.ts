import {createModel} from '@rematch/core'
import axiosInstance from "../services/requestHandler";
import {CategoriesNormalizer, PhotosNormalizer} from "./normalizer";
import {CategoryType, GalleryState, PhotoType, RootModel} from "./models.types";


const INITIAL_GALLERY_STATES = {
    photoList: [],
    page: 0, // page means that a page want to be fetched(not fetched yet)
    categories: [],
    currentCategoryId: undefined
} as GalleryState


export const gallery = createModel<RootModel>()({
    state: INITIAL_GALLERY_STATES,

    effects: (dispatch) => ({
        async fetchCategories(): Promise<CategoryType[]> {
            const res = await axiosInstance.get('/categories', {params: {}})
            const normalizedData = CategoriesNormalizer(res.data)
            this.setCategories(normalizedData)
            this.setCurrentCategoryId(normalizedData[0].id)
            return (normalizedData)
        },
        async fetchPhotos({page, limit = 10, order = 'DEC', category_ids}, rootState): Promise<PhotoType[]> {
            page = page || rootState.gallery.page
            category_ids = category_ids || rootState.gallery.currentCategoryId
            const res = await axiosInstance.get('/images/search', {params: {page, limit, category_ids}})
            const normalizedData = PhotosNormalizer(res.data)
            this.appendPhotos(normalizedData)
            this.changePage(page + 1)
            return normalizedData
        },
        async changeCategory(id: number | string): Promise<number | string> {
            await this.setCurrentCategoryId(id)
            await this.changePage(0)
            await this.resetPhotos()
            await this.fetchPhotos({})
            return (id)
        },
    }),

    reducers: {
        setCategories: (state, payload: CategoryType[]) => ({
            ...state,
            categories: payload,
        }),
        resetPhotos: (state) => ({
            ...state,
            photoList: [],
        }),
        appendPhotos: (state, payload: PhotoType[]) => ({
            ...state,
            photoList: [...state.photoList, ...payload],
        }),
        changePage: (state, payload: number) => ({
            ...state,
            page: payload
        }),
        setCurrentCategoryId: (state, payload: number) => ({
            ...state,
            currentCategoryId: payload
        }),
    },
})