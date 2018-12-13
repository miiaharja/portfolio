import React from "react";
import { withLocalize } from "react-localize-redux";


const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => (
  <div className="languagetoggle">
  <ul>
    {languages.map(language => (
      <li key={language.code}>
        <button onClick={() => setActiveLanguage(language.code)} className= "btn-language">
          {language.code}
        </button>
      </li>
    ))}
  </ul>
  </div>
);

export default withLocalize(LanguageToggle);