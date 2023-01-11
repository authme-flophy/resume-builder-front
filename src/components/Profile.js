import React, { useEffect, useState } from "react";
import "./Profile.scss";
import ProfileCard from "./ProfileCard";
import LanguagesTags from "./LanguagesTags";
import WorkExperienceCard from "./WorkExperienceCard";
import EducationCard from "./EducationCard";

function Profile({ axiosInstance }) {
  const [user, setUser] = useState();
  const [languages, setLanguages] = useState();
  const [experiences, setExperiences] = useState();
  const [educations, setEducations] = useState();

  useEffect(() => {
    const fetchingUsername = JSON.parse(localStorage.getItem("user")).username;

    axiosInstance
      .get(`/${fetchingUsername}`)
      .then((res) => {
        setUser(res.data);
        setLanguages(res.data.programming_languages);
        setExperiences(res.data.job_experiences);
        setEducations(res.data.schools);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container-sm profile">
      <div>
        <ProfileCard user={user} />
      </div>
      <div>
        <a href="http://github.com">Github Link</a>
        <a href="http://linkedin.com">LinkedIn Link</a>
        <a href="http://google.com">Website Link</a>
      </div>
      <div>
        <h2>Languages</h2>
        {languages &&
          languages.map((language) => <LanguagesTags language={language} />)}
      </div>
      <div>
        {experiences &&
          experiences.map((experience) => (
            <WorkExperienceCard experience={experience} />
          ))}
      </div>
      <div>
        {educations &&
          educations.map((education) => (
            <EducationCard education={education} />
          ))}
      </div>
    </div>
  );
}

export default Profile;
