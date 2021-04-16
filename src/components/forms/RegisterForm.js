import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = yup.object().shape({
  user_name: yup
    .string()
    .min(4, "4 characters minimum for user_name")
    .required("user_name required"),
  userName: yup
    .string()
    .min(5, "5 characters minimum for your user name")
    .required("user name required"),
  password: yup
    .string()
    .min(5, "password needs to be more than 5 characters long"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  email: yup
    .string("@")
    .email("Valid Email needed")
    .required("must include email"),
  terms: yup.boolean().oneOf([true], "please validate you are human"),
});

export default function RegisterForm() {
  const [userState, setUserState] = useState({
    user_name: "",
    userName: "",
    password: "",
    phone: "",
    email: "",

    terms: false,
  });

  const [errState, setErrState] = useState({
    user_name: "",
    userName: "",
    password: "",
    phone: "",
    email: "",

    terms: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    formSchema.isValid(userState).then((valid) => {
      setButtonDisabled(valid);
    });
  }, [userState]);

  const validate = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then((valid) => {
        setErrState({
          ...errState,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrState({
          ...errState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUserState({ ...userState, [e.target.name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted for review");
    axios
      // .post("http://localhost:9500/api/auth/register", userState)
      .post("https://overlay-server-api.herokuapp.com/api/auth/register")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={formSubmit}>
      <ul>
        <label htmlFor="user_name">
         <h4>Your Name</h4>
          <div>
            <input
              id="user_name"
              type="user_name"
              name="user_name"
              placeholder="Name here"
              value={userState.user_name}
              onChange={inputChange}
            />
          </div>
          {errState.user_name.length > 6 ? (
            <p className="error">{errState.user_name}</p>
          ) : null}
        </label>

        <label htmlFor="userName">
          <h4>UserName</h4>
          <div>
            <input
              id="userName"
              type="userName"
              name="userName"
              placeholder="create your user name"
              value={userState.userName}
              onChange={inputChange}
            />
          </div>
          {errState.userName.length > 5 ? (
            <p className="error">{errState.userName}</p>
          ) : null}
        </label>

        <label htmlFor="password">
         <h4>Password</h4> 
          <div>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={userState.password}
              onChange={inputChange}
            />
          </div>
          {errState.password.length > 6 ? (
            <p className="error">{errState.password}</p>
          ) : null}
        </label>

        <label htmlFor="phone">
          <h4>phone</h4>
          <div>
            <input
              id="phone"
              type="phone"
              name="phone"
              placeholder="phone"
              value={userState.phone}
              onChange={inputChange}
            />
          </div>
          {errState.phone.length > 6 ? (
            <p className="error">{errState.phone}</p>
          ) : null}
        </label>

        <label htmlFor="email">
          <h4>Email</h4>
          <div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={userState.email}
              onChange={inputChange}
            />
          </div>
          {errState.email.length > 0 ? (
            <p className="error">{errState.email}</p>
          ) : null}
        </label>
        <label htmlFor="validate">
          <div>
            Validate Here
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={userState.terms}
              onChange={inputChange}
            />
          </div>

          {errState.terms.length > 1 ? (
            <p className="error">{errState.terms}</p>
          ) : null}
        </label>

        <button
          type="submit"
          id="submit"
          name="submit"
          disabled={!buttonDisabled}
        >
          Submit
        </button>
      </ul>
    </form>
  );
}
