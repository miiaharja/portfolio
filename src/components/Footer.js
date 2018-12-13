import React, { Component } from 'react';

import { withLocalize } from "react-localize-redux";
import globalTranslations from "../translations/texts.json";
import { Translate } from "react-localize-redux";

class Footer extends Component {
    constructor(props) {
        super(props);
    
        this.props.addTranslation(globalTranslations);
    }
    render() {
        return (
            <div>
                <footer className="footer">
                    

                    <div className="row">
                        
                        <div className="col-1-of-2">
                            <div className="footer__navigation">
                                <ul className="footer__list">
                                    <li className="footer__item"><a href="#section-about" className="footer__link"><Translate id="nav__link-1"/></a></li>
                                    <li className="footer__item"><a href="#section-skills" className="footer__link"><Translate id="nav__link-2"/></a></li>
                                    <li className="footer__item"><a href="#section-projects" className="footer__link"><Translate id="nav__link-3"/></a></li>
                                    <li className="footer__item"><a href="#section-contact" className="footer__link"><Translate id="nav__link-4"/></a></li>
                                </ul>
                            </div>
                        </div>
                       
                        
                        <div className="col-1-of-2">
                        <a href="https://github.com/miiaharja" className="footer__icon-link" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/miiaharja/" className="footer__icon-link" target="_blank"><i class="fab fa-linkedin"></i></a>
                            <p className="footer__copyright">
                                Copyright &copy; Miia Harja 2018.
                            </p>
                            
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default withLocalize(Footer);