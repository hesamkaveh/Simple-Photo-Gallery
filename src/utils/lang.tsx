// @ts-nocheck
import {DEFAULT_LANG} from '../constants/defaults';

import en from '../constants/localization/en';
import fa from '../constants/localization/fa';

import {store} from "../store";
import {isLanguageSupported} from "./helper";

export const changeLang = (newLang) => {
    // console.log("store?.getState()?.lang?.lang => ",store?.getState()?.lang?.lang)
    if (isLanguageSupported(newLang)) {
        store.dispatch.lang.setLang(newLang)
    } else {
        setDefaultLang()
    }
}

// https://stackoverflow.com/questions/30474506/replace-part-of-string-with-tag-in-jsx
function flatMap(array, fn) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var mapping = fn(array[i]);
        result = result.concat(mapping);
    }
    return result;
}

export const jsxReplace = (text, from, to) => {
    const result = flatMap(text.split(from), function (part) {
        return [part, to];
    });
    // Remove the last spacer
    result.pop();
    return <>{result}</>;
};

export const setDefaultLang = () => {
    store.dispatch.lang.setLang(DEFAULT_LANG)
};

export const getLang = () => {
    const lang = store.getState().lang.lang || DEFAULT_LANG;
    if (lang) {
        if (!isLanguageSupported(lang)) {
            setDefaultLang();
            return DEFAULT_LANG;
        }
        return lang;
    }
    setDefaultLang();
    return DEFAULT_LANG;
};

const translate = (keyString, values = {}, forceLang = undefined) => {
    try {
        const keys = keyString.split('.');
        const lang = {
            fa,
            en
        }[forceLang ?? getLang() ?? DEFAULT_LANG];

        let translatedText = keys.reduce((prev, current) => prev[current], lang);
        for (let i in Object.keys(values)) {
            const key = Object.keys(values)[i];
            translatedText = jsxReplace(translatedText, '@' + key, values[key]);
        }
        return translatedText;
    } catch (e) {
        return keyString;
    }
};

export default translate;
