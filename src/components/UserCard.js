import React, { useState } from "react";
import { Link } from "react-router-dom";
import LanguagesTags from "./LanguagesTags";

function UserCard({ user }) {
  const [languages] = useState(user.programming_languages);

  return (
    <article class="postcard dark blue">
      <Link to={`${user.username}`} class="postcard__img_link" href="#">
        <img class="postcard__img" src={user.image_url} alt="user avatar" />
      </Link>
      <div class="postcard__text">
        <h1 class="postcard__title blue">
          <Link
            to={`${user.username}`}
            href="#"
          >{`${user.first_name} ${user.second_name}`}</Link>
        </h1>
        <div class="postcard__subtitle small">
          <time datetime="2020-05-25 12:00:00">
            <i class="fas fa-calendar-alt mr-2"></i>
            {user.position?.name}
          </time>
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">{user.resumes[0]?.description}</div>
        <ul class="postcard__tagbox">
          {languages &&
            languages.map((language) => <LanguagesTags language={language} />)}
        </ul>
      </div>
    </article>
  );
}

export default UserCard;
