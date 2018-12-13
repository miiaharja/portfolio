import React, { Component } from 'react';

import photo from "../img/about-cat.jpg";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "../translations/texts.json";
import { Translate } from "react-localize-redux";

class About extends Component {
    constructor(props) {
        super(props);
    
        this.props.addTranslation(globalTranslations);
      }
    render() {
        return (
            <div className="section-about u-margin-bottom-big" id="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        <Translate id="about__h2"/>
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small"><Translate id="about__h3"/></h3>
                        <p className="paragraph">
                            <Translate id="about__p1"/>
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small"></h3>
                        <p className="paragraph">
                        <Translate id="about__p2"/>
                        </p>

                        <a href="#popup" className="btn-text"><Translate id="about__button"/> &rarr;</a>

                    </div>
                    <div className="col-1-of-2">
                               <img src={photo} alt="Photo 1" className="photo--small u-margin-bottom-big" />
                    </div>
                </div>
            </div>
        );
    }
}

export default withLocalize(About);