import React from "react";
import "./WorkExperienceCard.scss";

function WorkExperienceCard({ experience }) {
  return (
    <div className="work_experience">
      <div className="experience_title">
        <span>{experience.title}</span> &nbsp; | &nbsp;{" "}
        <span>{experience.company_name}</span>
      </div>
      <i>{experience.start_year}</i> - <i>{experience.end_year}</i>
      <p>{experience.summary}</p>
    </div>
  );
}

export default WorkExperienceCard;
