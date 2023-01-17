import React, { useEffect, useState, useRef } from "react";
import "./Profile.scss";
import ProfileCard from "./ProfileCard";
import LanguagesTags from "./LanguagesTags";
import WorkExperienceCard from "./WorkExperienceCard";
import EducationCard from "./EducationCard";
import { useParams } from "react-router-dom";
import Pdf from "react-to-pdf";

function Profile({ axiosInstance }) {
  const [user, setUser] = useState();
  const [languages, setLanguages] = useState();
  const [experiences, setExperiences] = useState();
  const [educations, setEducations] = useState();
  const [loggedInUser] = useState(JSON.parse(localStorage.getItem("user")));

  const passedUsername = useParams();
  console.log(loggedInUser.id);

  const ref = useRef();

  const options = {
    orientation: "potrait",
    unit: "in",
    format: [8.3, 11.7],
  };

  useEffect(() => {
    axiosInstance
      .get(`/${passedUsername.profile}`)
      .then((res) => {
        setUser(res.data);
        setLanguages(res.data.programming_languages);
        setExperiences(res.data.job_experiences);
        setEducations(res.data.schools);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Pdf
        targetRef={ref}
        filename="code-example.pdf"
        options={options}
        x={0.5}
        y={0.5}
      >
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div className="container-sm profile" id="profile_page" ref={ref}>
        <div className="profile_section">
          <ProfileCard user={user} />
          {/* {user?.id === loggedInUser?.id ? (
            <button className="btn btn-primary">edit</button>
          ) : (
            ""
          )} */}
        </div>
        <div className="profile_links">
          <a className="profile_link" href="http://github.com">
            <i class="bi bi-github"></i>
          </a>
          <a className="profile_link" href="http://linkedin.com">
            <i class="bi bi-linkedin"></i>
          </a>
          <a className="profile_link" href="http://google.com">
            <i class="bi bi-globe"></i>
          </a>
        </div>
        <div className="languages_section">
          <div className="title_section">
            <i class="bi bi-code-slash header_icons"></i> &nbsp;
            <h1>Languages</h1>
            <div className="edit_button">
              {user?.id === loggedInUser?.id ? (
                <button className="btn btn-primary">
                  <i class="bi bi-pencil-fill"></i>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <ul className="languages">
            {languages &&
              languages.map((language) => (
                <LanguagesTags language={language} key={language.id} />
              ))}
          </ul>
        </div>
        <div className="experiences_section">
          <div className="title_section">
            <i class="bi bi-briefcase header_icons"></i> &nbsp;
            <h1>Work Experience</h1>
            <div className="edit_button">
              {user?.id === loggedInUser?.id ? (
                <button className="btn btn-primary">
                  <i class="bi bi-pencil-fill"></i>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          {experiences &&
            experiences.map((experience) => (
              <WorkExperienceCard experience={experience} key={experience.id} />
            ))}
        </div>
        <div className="schools_section">
          <div className="title_section">
            <i class="bi bi-book header_icons"></i> &nbsp;
            <h1>Education</h1>
            <div className="edit_button">
              {user?.id === loggedInUser?.id ? (
                <button className="btn btn-primary">
                  <i class="bi bi-pencil-fill"></i>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          {educations &&
            educations.map((education) => (
              <EducationCard education={education} key={education.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
