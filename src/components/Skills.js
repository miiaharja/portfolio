import React, { Component } from "react";
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

class Skills extends Component {
  render() {
    return (
      <section className="section-skills" id="section-skills">
        <div className="row">
          <div className="col-1-of-4">
            <div className="skills-box">
              <i className="fas fa-columns skills-box__icon" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                <Translate id="skills__header-1" />
              </h3>
              <p className="skills-box__text">
                <ul>
                  <li className="skills-box__li">HTML</li>
                  <li className="skills-box__li">CSS</li>
                  <li className="skills-box__li">SASS</li>
                  <li className="skills-box__li">React</li>
                  <li className="skills-box__li">Shopify</li>
                  <li className="skills-box__li">WordPress</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="skills-box">
              <i className="fas fa-code skills-box__icon" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                <Translate id="skills__header-2" />
              </h3>
              <p className="skills-box__text">
                <ul>
                  <li className="skills-box__li">JavaScript ES5, ES6</li>
                  <li className="skills-box__li">TypeScript</li>
                  <li className="skills-box__li">MySQL</li>
                  <li className="skills-box__li">MongoDB</li>
                  <li className="skills-box__li">NodeJS</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="skills-box">
              <i className="fas fa-desktop skills-box__icon" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                <Translate id="skills__header-3" />
              </h3>
              <p className="skills-box__text">
                <ul>
                  <li className="skills-box__li">Visual Studio</li>
                  <li className="skills-box__li">PhotoShop</li>
                  <li className="skills-box__li">InDesign</li>
                  <li className="skills-box__li">Illustrator</li>
                  <li className="skills-box__li">MS Office</li>
                  <li className="skills-box__li">Linux</li>
                  <li className="skills-box__li">UIPath</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="skills-box">
              <i className="fas fa-infinity skills-box__icon" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                <Translate id="skills__header-4" />
              </h3>
              <p className="skills-box__text">
                <ul>
                  <li className="skills-box__li">Angular</li>
                  <li className="skills-box__li">Vue.js</li>
                  <li className="skills-box__li" />
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLocalize(Skills);
