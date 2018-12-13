import React, { Component } from 'react';
import './css/index.css';

import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "./translations/texts.json";

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Navigation from './components/Nav';
import Contact from './components/Contact';
import Popup from "./components/Popup";

class App extends Component {

  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "Finnish", code: "fin" }
      ],
      translation: globalTranslations,
      options: { 
        renderToStaticMarkup,
        renderInnerHtml: true,
        defaultLanguage: "fin" }
    });
  }
  render() {
    return (
        <>
          <Navigation />
          <Header />
          <About />
          <Skills />
          <Projects />
          <section className="divider-photo divider-photo-1"/>
          <Contact />
          <Footer />
          <Popup />
        </>
    );
  }
}

export default withLocalize(App);
