import {LANG_LIST, RTL_LANGS_LIST} from "../constants/defaults";


export const getLanguageDirection = (language: string): 'rtl' | 'ltr' => {
    return RTL_LANGS_LIST.includes(language) ? 'rtl' : 'ltr'
}
export const isRtlLanguage = (language: string): boolean => {
    return RTL_LANGS_LIST.includes(language)
}
export const isLanguageSupported = (language: string): boolean => {
    return LANG_LIST.includes(language)
}

