import {createModel} from '@rematch/core'
import type {RootModel} from './index'
import {isLanguageSupported} from "../utils/helper";
import {DEFAULT_LANG} from "../constants/defaults";
import {LangType} from "./types/lang.type";

const INITIAL_LANG_STATES = {
    lang: DEFAULT_LANG,
} as LangType

export const lang = createModel<RootModel>()({
    state: INITIAL_LANG_STATES,

    effects: (dispatch) => ({
        setLang(payload: string, rootState) {
            if (isLanguageSupported(payload)) {
                dispatch.lang.setLangReducer(payload)
            }
        },
    }),
    reducers: {
        setLangReducer(state, payload: string) {
            return {
                lang: payload,
            }
        },
    },
})