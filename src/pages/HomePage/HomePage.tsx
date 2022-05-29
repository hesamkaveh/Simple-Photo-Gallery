import React from 'react';
import SectionContainer from "../../components/SectionContainer";
import {styles} from "./HomePage.style";
import translate from "../../utils/lang";


function HomePage() {
    const classes = styles()
    return (
        <SectionContainer>
            <div className={classes.wrapper}>
                {translate('homeContent')}

                <div>
                    Demo available is on <a className={classes.link} href="/">Netlify</a>
                </div>
                <div>
                    Source code is available on <a className={classes.link} href="/">Github</a>
                </div>
                {/*<div>{translate('homeContent')}</div>*/}
            </div>
        </SectionContainer>
    );
}

export default HomePage;
