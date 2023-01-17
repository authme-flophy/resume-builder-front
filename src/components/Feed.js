import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Feed.scss";
import UserCard from "./UserCard";

function Feed() {
  const [users, setUsers] = useState();

  const axiosInstance = axios.create({
    baseURL: "http://localhost:4000",
    headers: { Authorization: localStorage.getItem("token") },
  });

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <section class="dark">
        <div class="container py-4">
          {users && users.map((user) => <UserCard user={user} />)}
        </div>
      </section>
    </div>
  );
}

export default Feed;
