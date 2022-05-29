import translate from "../../utils/lang";
import {LANG_LIST} from "../../constants/defaults";
import {Dispatch, RootState} from "../../store";
import {useSelector} from "react-redux";
import {styles} from "./LanguageSelector.style";
import useRematchDispatch from "../../hooks/useRematchDispatch";

const LanguageSelector = () => {
    const classes = styles()

    const currentLang = useSelector((state: RootState) => state.lang.lang)

    const {setLang} = useRematchDispatch((dispatch: Dispatch) => ({
        setLang: (lang: string) => dispatch.lang.setLang(lang)
    }))

    return (
        <select defaultValue={currentLang}
                className={classes.langSelector}
                name="languages"
                onChange={(e) => {
                    setLang(e.target.value)
                }}>
            <option value="select" disabled>{translate('languages.selectLang')}</option>
            {LANG_LIST.map(lang => (
                <option key={lang} value={lang}>{translate(`languages.${lang}`)}</option>))}
        </select>
    )
}
export default LanguageSelector
