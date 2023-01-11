import React from "react";
import "./WorkExperienceCard.scss";

function WorkExperienceCard({ experience }) {
  return (
    <div>
      <h2>{experience.title}</h2>
      <h2>{experience.company_name}</h2>
      <i>{experience.start_year}</i>-<i>{experience.end_year}</i>
      <p>{experience.summary}</p>
    </div>
  );
}

export default WorkExperienceCard;
