import React from "react";
import "./EducationCard.scss";

function EducationCard({ education }) {
  return (
    <div>
      <h2>{education.course_name}</h2>
      <h2>{education.name}</h2>
      <i>{education.start_year}</i>-<i>{education.end_year}</i>
      <p>{education.summary}</p>
    </div>
  );
}

export default EducationCard;
