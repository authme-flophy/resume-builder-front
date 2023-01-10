import React, { useEffect } from "react";
import "./Profile.scss";

function Profile({ axiosInstance }) {
  useEffect(() => {
    axiosInstance
      .get("/superme")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return <div>Profile</div>;
}

export default Profile;
