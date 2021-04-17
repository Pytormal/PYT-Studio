import {axiosWithAuth} from './axiosWithAuth'

const logout = () => {
  axiosWithAuth()
    .get("/auth/logout")
    .catch((err) => console.error("cannot log you out, try again"));
  localStorage.removeItem("token");
};

export default logout