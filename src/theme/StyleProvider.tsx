import {useSelector} from "react-redux";
import {RootState} from "../store";
import {create} from "jss";
import rtl from "jss-rtl";
import {JssProvider, ThemeProvider} from "react-jss";
import React from "react";
import preset from "jss-preset-default";
import {getLanguageDirection, isRtlLanguage} from "../utils/helper";
import useGlobalStyles from "./global.Styles";


const theme = {}
const presets = preset().plugins;

type StyleProviderType = {
    children: React.ReactNode
}

const StyleProvider: React.FC<StyleProviderType> = ({children}) => {
    useGlobalStyles()

    const lang = useSelector((state: RootState) => state.lang.lang)
    const jss = create({plugins: [...presets, rtl()]});

    jss.use(rtl({enabled: !isRtlLanguage(lang)}));

    return (
        <div dir={getLanguageDirection(lang)}>
            <ThemeProvider theme={theme} key={lang}>
                <JssProvider jss={jss}>
                    {children}
                </JssProvider>
            </ThemeProvider>
        </div>
    )
}
export default StyleProvider