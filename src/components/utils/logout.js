import {axiosWithAuth} from './axiosWithAuth'

const logout = () => {
  axiosWithAuth()
    .get("/auth/logout")
    .catch((err) => console.error("cannot log you out, try again"));
  localStorage.removeItem("token");
  alert('you are now logged out')
};

export default logout