import React, { Component } from 'react';
import { withLocalize } from "react-localize-redux";
import globalTranslations from "../translations/texts.json";
import { Translate } from "react-localize-redux";

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.props.addTranslation(globalTranslations);
    }

    render() {
        return (
        <div>
        <header className="header">

          <div className="header__text-box">
              <h1 className="heading-primary">
                  <span className="heading-primary--main">Portfolio</span>
                  <span className="heading-primary--sub">Miia Harja</span>
              </h1>
              <a href="#section-about" className="btn-header btn--animated u-margin-top-big"><Translate id="header__button"/></a>
          </div>

        </header>
        </div>

        );
    }
}

export default withLocalize(Header);