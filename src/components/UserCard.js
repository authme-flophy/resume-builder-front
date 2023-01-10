import React, { useState } from "react";
import LanguagesTags from "./LanguagesTags";

function UserCard({ user }) {
  const [languages] = useState(user.programming_languages);

  return (
    <article class="postcard dark blue">
      <a class="postcard__img_link" href="#">
        <img class="postcard__img" src={user.image_url} alt="user avatar" />
      </a>
      <div class="postcard__text">
        <h1 class="postcard__title blue">
          <a href="#">{`${user.first_name} ${user.second_name}`}</a>
        </h1>
        <div class="postcard__subtitle small">
          <time datetime="2020-05-25 12:00:00">
            <i class="fas fa-calendar-alt mr-2"></i>
            {user.position?.name}
          </time>
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          fugiat asperiores inventore beatae accusamus odit minima enim, commodi
          quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti
          tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci
          illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim
          quidem excepturi, illum quos!
        </div>
        <ul class="postcard__tagbox">
          {languages &&
            languages.map((language) => <LanguagesTags language={language} />)}
        </ul>
      </div>
    </article>
  );
}

export default UserCard;
