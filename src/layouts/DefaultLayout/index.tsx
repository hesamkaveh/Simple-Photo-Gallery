import {styles} from "./DefaultLayout.style";
import {Link} from "react-router-dom";
import SectionContainer from "../../components/SectionContainer";
import NavbarMenu from "../../components/NavbarMenu";
import LanguageSelector from "../../components/LanguageSelector";
import Logo from "../../components/Logo";
import TextLogo from "../../components/TextLogo";
import React from "react";

type defaultLayoutType = {
    children: JSX.Element
}

export const DefaultLayout: React.FC<defaultLayoutType> = ({children}) => {
    const classes = styles()

    return (
        <div>
            <SectionContainer>
                <nav className={classes.container}>
                    <Link to={'/'}>
                        <div className={classes.logosWrapper}>
                            <span className={classes.logoContainer}><Logo/></span>
                            <span className={classes.textLogoContainer}><TextLogo/></span>
                        </div>
                    </Link>
                    <NavbarMenu/>
                    <LanguageSelector/>
                </nav>
            </SectionContainer>
            {children}
            <footer></footer>
        </div>
    )
}
export default DefaultLayout