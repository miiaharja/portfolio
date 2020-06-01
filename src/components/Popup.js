import React, { Component } from 'react';
import photo from '../img/mie1.jpg';

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

class Popup extends Component {

    render() {
        return (
            <div className="popup" id="popup">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src={photo} alt="Omakuva" className="popup__img"/>
                    </div>
                    <div className="popup__right">
                        <a href="#section-about" className="popup__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-small"><Translate id="popup__h2"/></h2>
                        <h3 className="heading-tertiary u-margin-bottom-small"><Translate id="popup__h3-1"/></h3>
                        <p className="popup__text">
                            <Translate id="popup__text-1"/>
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small"><Translate id="popup__h3-2"/></h3>
                        <p className="popup__text">
                            <Translate id="popup__text-2"/>
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small"><Translate id="popup__h3-3"/></h3>
                        <p className="popup__text">
                            <Translate id="popup__text-3"/>
                        </p>
                    </div>
                </div>
            </div>

        );
    }
}

export default withLocalize(Popup);