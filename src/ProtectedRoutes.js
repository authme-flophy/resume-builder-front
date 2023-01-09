import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [statusNumber, setStatusNumber] = useState();

  const axiosInstance = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });

  useEffect(() => {
    axiosInstance
      .get("/me")
      .then((res) => console.log(res))
      .catch((err) => setStatusNumber(err.response.status));
  }, []);

  if (
    localStorage.getItem("token") &&
    localStorage.getItem("user") &&
    statusNumber < 300 &&
    statusNumber > 199
  ) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
