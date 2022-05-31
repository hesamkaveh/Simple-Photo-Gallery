import React from 'react';
import SectionContainer from "../../components/SectionContainer";
import {styles} from "./HomePage.style";
import translate from "../../utils/lang";


const HomePage: React.FC = () => {
    const classes = styles()
    return (
        <SectionContainer>
            <div className={classes.wrapper}>
                {translate('homeContent')}

                <div>
                    Demo is available on <a className={classes.link}
                                            target={'_blank'}
                                            href="https://earnest-gaufre-52d1e6.netlify.app"
                                            rel="noreferrer">Netlify</a>
                </div>
                <div>
                    Source code is available on <a className={classes.link}
                                                   target={'_blank'}
                                                   href="https://github.com/hesamkaveh/Simple-Photo-Gallery"
                                                   rel="noreferrer">Github</a>
                </div>
                {/*<div>{translate('homeContent')}</div>*/}
            </div>
        </SectionContainer>
    );
}

export default HomePage;
