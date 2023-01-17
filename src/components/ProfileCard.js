import React from "react";
import "./ProfileCard.scss";

function ProfileCard({ user }) {
  return (
    <div className="profile_card">
      <div className="img_div">
        <img id="profile_img" src={user?.image_url} alt="profile img" />
      </div>
      <div className="info_div">
        <h2 id="fullnames">
          {user?.first_name} {user?.second_name}
        </h2>
        <h3 id="position">{user?.position?.name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tempor lectus laoreet
          facilisis aliquam quis nec sed ipsum. A tellus augue tempor tincidunt
          quam id non amet vel. Aenean sagittis nisl lacus commodo dolor varius.
          Ultrices volutpat fusce volutpat a phasellus.
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
