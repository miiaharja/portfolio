import React, { Component } from 'react';

import { withLocalize } from "react-localize-redux";
import globalTranslations from "../translations/texts.json";
import { Translate } from "react-localize-redux";
import LanguageToggle from '../components/LanguageToggle';


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(globalTranslations);

        this.state = {
            isChecked: false,
          };
    }

    toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
    }
     
    render() {
        return (
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" checked={this.state.isChecked} onChange={this.toggleChange}/>

                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="#section-about" className="navigation__link" onClick={this.toggleChange}><Translate id="nav__link-1"/></a></li>
                        <li className="navigation__item"><a href="#section-skills" className="navigation__link" onClick={this.toggleChange}><Translate id="nav__link-2"/></a></li>
                        <li className="navigation__item"><a href="#section-projects" className="navigation__link" onClick={this.toggleChange}><Translate id="nav__link-3"/></a></li>
                        <li className="navigation__item"><a href="#section-contact" className="navigation__link" onClick={this.toggleChange}><Translate id="nav__link-4"/></a></li>
                        <li><LanguageToggle /></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default withLocalize(Navigation);