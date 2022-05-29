import {Models} from "@rematch/core"
import {lang} from "./lang"
import {gallery} from "./gallery";

export interface RootModel extends Models<RootModel> {
    lang: typeof lang,
    gallery: typeof gallery,
}

export const models: RootModel = {lang, gallery}