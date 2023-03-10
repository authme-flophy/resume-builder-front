import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResumeForm.scss";

function ResumeForm({ axiosInstance }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    email: "",
    image_url: "",
    linkedin: "",
    github: "",
    portfolio: "",
    description: "",
  });

  useEffect(() => {
    axiosInstance
      .get("/me")
      .then((res) => {
        setFormData({
          ...formData,
          first_name: res.data.user.first_name,
          second_name: res.data.user.second_name,
          email: res.data.user.email,
          image_url: res.data.user.image_url,
          linkedin: "",
          github: "",
          portfolio: "",
          description: "",
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/resumes", formData)
      .then((res) => {
        localStorage.setItem("resume_id", JSON.stringify(res.data.id));
        console.log(res.data);
      })
      .catch((err) => console.error(err));
    navigate("/education");
  };

  return (
    <div className="container-md text-center" id="resume_form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <h1>Personal Information</h1>
        </div>
        <div className="mb-3">
          <label for="first_name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            required
            value={formData.first_name}
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label for="second_name" className="form-label">
            Second Name
          </label>
          <input
            type="text"
            className="form-control"
            required
            id="second_name"
            value={formData.second_name}
            onChange={(e) =>
              setFormData({ ...formData, second_name: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            value={formData.email}
            aria-describedby="emailHelp"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label for="description" className="form-label">
            Tell people about yourself
          </label>
          <textarea
            class="form-control"
            id="description"
            rows="3"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
        </div>

        <div className="mb-3">
          <label for="linkedin" className="form-label">
            Linkedin
          </label>
          <input
            type="text"
            className="form-control"
            id="linkedin"
            onChange={(e) =>
              setFormData({ ...formData, linkedin: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label for="github" className="form-label">
            Github
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            onChange={(e) =>
              setFormData({ ...formData, github: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label for="portfolio" className="form-label">
            Portfolio
          </label>
          <input
            type="text"
            className="form-control"
            id="portfolio"
            onChange={(e) =>
              setFormData({ ...formData, portfolio: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" id="submit_button">
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResumeForm;
