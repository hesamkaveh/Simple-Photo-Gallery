import {DEFAULT_LANG} from '../constants/defaults';

import en from '../constants/localization/en';
import fa from '../constants/localization/fa';

import {store} from "../store";
import {isLanguageSupported} from "./helper";
import React from "react";

// https://stackoverflow.com/questions/30474506/replace-part-of-string-with-tag-in-jsx
function flatMap(array: string[], fn: (arg0: string) => [string, React.ReactNode]) {
    var result: string[] = [];
    for (var i = 0; i < array.length; i++) {
        var mapping = fn(array[i]);
        result = result.concat(mapping as string[]);
    }
    return result;
}

export const jsxReplace = (text: string, from: string, to: React.ReactNode): React.ReactNode => {
    const result: string[] = flatMap(
        text.split(from),
        function (part: string): [string, React.ReactNode] {
            return [part, to];
        }
    );
    // Remove the last spacer
    result.pop();
    return <>{result}</>;
};

export const setDefaultLang = (): void => {
    store.dispatch.lang.setLang(DEFAULT_LANG)
};

export const getLang = (): string => {
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


const translate = (keyString: string,
                   values: { [key: string]: string } | undefined = {},
                   forceLang: string | undefined = undefined): string => {
    try {
        const keys = keyString.split('.');
        const lang = {
            fa,
            en
        }[forceLang ?? getLang() ?? DEFAULT_LANG];

        // @ts-ignore
        let translatedText: any = keys.reduce((prev, current) => prev[current], lang);
        for (let i in Object.keys(values)) {
            const key: string = Object.keys(values)[i];
            translatedText = jsxReplace(translatedText, '@' + key, values[key]);
        }
        return translatedText;
    } catch (e) {
        return keyString;
    }
};

export default translate;
