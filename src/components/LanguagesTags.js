import React from "react";

function LanguagesTags({ language }) {
  return <li class="tag__item">{language.language_name}</li>;
}

export default LanguagesTags;
