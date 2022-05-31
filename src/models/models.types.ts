import {Models} from "@rematch/core";
import {lang} from "./lang"
import {gallery} from "./gallery";

// ---------- lang types ----------
export type LangType = {
    lang: string
}

// ---------- gallery types ----------
export type CategoryType = {
    id: number,
    name: string
}

export type PhotoType = {
    breeds: [],
    categories: CategoryType[]
    id: string
    url: string
    width: number | string
    height: number | string
}

export type GalleryState = {
    photoList: PhotoType[],
    page: number,
    categories: CategoryType[],
    currentCategoryId: number | string | undefined
}


// ---------- TOTAL ----------
export interface RootModel extends Models<RootModel> {
    lang: typeof lang,
    gallery: typeof gallery,
}