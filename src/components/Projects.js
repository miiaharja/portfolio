import React, { Component } from "react";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

class Projects extends Component {
  render() {
    return (
      <section className="section-projects" id="section-projects">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            <Translate id="projects__header-h2" />
          </h2>
        </div>

        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            <a
              className="btn-text"
              href="https://github.com/miiaharja"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span">
                    <Translate id="projects__card-3--header" />
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>
                      <Translate id="projects__card-3--type" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__cta">
                  <div className="card__projects-box">
                    <p className="card__projects-header">
                      <Translate id="projects__card-3__back--header" />
                    </p>
                    <p className="card__projects-text">
                      <Translate id="projects__card-3__back--text" />
                    </p>
                  </div>
                  <a
                    href="https://github.com/miiaharja/mern-frontend"
                    rel="noopener noreferrer"
                    className="btn btn--white u-margin-bottom-small"
                    target="_blank"
                  >
                    Github Front
                  </a>
                  <a
                    href="https://github.com/miiaharja/mern-backend"
                    rel="noopener noreferrer"
                    className="btn btn--white"
                    target="_blank"
                  >
                    Github Back
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--4">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span">
                    <Translate id="projects__card-4--header" />
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>ES6</li>
                    <li>
                      <Translate id="projects__card-4--type" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__cta">
                  <div className="card__projects-box">
                    <p className="card__projects-header">
                      <Translate id="projects__card-4__back--header" />
                    </p>
                    <p className="card__projects-text">
                      <Translate id="projects__card-4__back--text" />
                    </p>
                  </div>
                  <a
                    href="https://github.com/miiaharja/burger-builder"
                    rel="noopener noreferrer"
                    className="btn btn--white u-margin-bottom-small"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href="https://react-my-burger-c83bb.firebaseapp.com/"
                    rel="noopener noreferrer"
                    className="btn btn--white"
                    target="_blank"
                  >
                    <Translate id="projects__card-3__back--button" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--6">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span">
                    <Translate id="projects__card-6--header" />
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>
                      <Translate id="projects__card-6--type" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__cta">
                  <div className="card__projects-box">
                    <p className="card__projects-header">
                      <Translate id="projects__card-6__back--header" />
                    </p>
                    <p className="card__projects-text">
                      <Translate id="projects__card-6__back--text" />
                    </p>
                  </div>
                  <a
                    href="https://github.com/miiaharja/usermanagement"
                    rel="noopener noreferrer"
                    className="btn btn--white"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLocalize(Projects);
