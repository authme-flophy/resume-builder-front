import React from "react";
import "./EducationCard.scss";

function EducationCard({ education }) {
  return (
    <div>
      <div className="info_section">
        <span>{education.course_name}</span> | <span>{education.name}</span>
      </div>
      <i>{education.start_year}</i> - <i>{education.end_year}</i>
      <p>{education.summary}</p>
    </div>
  );
}

export default EducationCard;
