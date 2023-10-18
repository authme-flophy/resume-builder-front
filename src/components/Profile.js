import React, { useEffect, useState } from "react";
import "./Profile.scss";
import ProfileCard from "./ProfileCard";
import LanguagesTags from "./LanguagesTags";
import WorkExperienceCard from "./WorkExperienceCard";
import EducationCard from "./EducationCard";
import { Link, useLocation, useParams } from "react-router-dom";

function Profile({ axiosInstance }) {
  const [user, setUser] = useState();
  const [languages, setLanguages] = useState();
  const [experiences, setExperiences] = useState();
  const [educations, setEducations] = useState();
  const [description, setDescription] = useState();
  const [loggedInUser] = useState(JSON.parse(localStorage.getItem("user")));

  const passedUsername = useParams();
  console.log(loggedInUser.id);

  const location = useLocation();

  console.log(location);

  useEffect(() => {
    axiosInstance
      .get(`/${passedUsername.profile}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setDescription(res.data.resumes[0]?.description);
        console.log(res.data.resumes[0]);
        setLanguages(res.data.programming_languages);
        setExperiences(res.data.job_experiences);
        setEducations(res.data.schools);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container-sm profile" id="profile_page">
      <div className="profile_section">
        <ProfileCard user={user} description={description} />
        {/* {user?.id === loggedInUser?.id ? (
          <button className="btn btn-primary">edit</button>
        ) : (
          ""
        )} */}
      </div>
      <div className="profile_links">
        <a className="profile_link" href={user?.github}>
          <i class="bi bi-github"></i>
        </a>
        <a className="profile_link" href={user?.linkedin}>
          <i class="bi bi-linkedin"></i>
        </a>
        <a className="profile_link" href={user?.portfolio}>
          <i class="bi bi-globe"></i>
        </a>
      </div>
      <div className="languages_section">
        <div className="title_section">
          <i class="bi bi-code-slash header_icons"></i> &nbsp;
          <h1>Languages</h1>
          <div className="edit_button">
            {/* {user?.id === loggedInUser?.id ? (
              <button className="btn btn-primary">
                <i class="bi bi-pencil-fill"></i>
              </button>
            ) : (
              ""
            )} */}
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
                <Link
                  className="profile_page_links"
                  to="/experience"
                  state={{
                    number: 1,
                    resume_id: JSON.parse(localStorage.getItem("resume_id")),
                    username: user.username,
                  }}
                >
                  <i class="bi bi-plus"></i>
                </Link>
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
                <Link
                  className="profile_page_links"
                  to="/education"
                  state={{
                    number: 1,
                    resume_id: JSON.parse(localStorage.getItem("resume_id")),
                    username: user.username,
                  }}
                >
                  <i class="bi bi-plus"></i>
                </Link>
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
  );
}

export default Profile;
