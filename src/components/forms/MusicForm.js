import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import "../styles/formStyle.css";

import { useRouteMatch, Switch, Route, NavLink } from "react-router-dom";

/*3. Authenticated `user` can Create, Update and Delete a `plant` object. At a minimum, each `plant` must have the following properties: 
    - `id`: Integer
    - `musicSource`: String
    - `songName` : String
    - `h2oFrequency`: Type determined by implementation
    - `image`: (optional)
    
    Authenticated user can view a list of created plants.  
    A plant can be deleted or selected to present user with a detail view where user can then update any property of the selected plant. 
    */

export default function Form() {
  const { path, url } = useRouteMatch();

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [formState, setFormState] = useState({
    songName: "",
    musicSource: "",
    Download: "",
    Watch: "",
  });

  const [errors, setErrors] = useState({
    songName: "",
    musicSource: "",
    Download: "",
    Watch: "",
  });
  const [post] = useState();

  const formSchema = yup.object().shape({
    songName: yup.string().required("Must include Name."),
    musicSource: yup.string().required("Must include provided from."),
    Download: yup.string().required("Must include streaming source."),
    Watch: yup.string().required("Must include youtube source."),
  });

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState, formSchema]);

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      // .post("http://localhost:9500/api/songs", formState)
      .post("https://overlay-server-api.herokuapp.com/api/songs", setFormState)
      .then((res) => {
        // setPost(res.data); // get just the form data from the REST api
        console.log("music.js", res.data);
        // reset form if successful
        setFormState({
          songName: "",
          musicSource: "",
          Download: "",
          Watch: "",
        });
      })
      .catch((err) => console.log(err.response));
  };
  const validateChange = (e) => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };

    validateChange(e);
    setFormState(newFormData);
  };
  return (
    <>
      <Switch>
        <Route path={`${path}/form-submited`}>
          <div className="SubmitedText">
            <h4>Submited Form </h4>
          </div>
        </Route>

        <form className="form-container" onSubmit={formSubmit}>
          <label className="songName music-edit">
            songName
            <input
              type="string"
              name="songName"
              value={formState.songName}
              onChange={inputChange}
              placeHolder="Song Name"
            />
            {errors.songName.length > 0 ? (
              <p className="error">{errors.songName}</p>
            ) : null}
          </label>

          <label className="musicSource music-edit">
            Source
            <input
              type="string"
              name="musicSource"
              value={formState.musicSource}
              onChange={inputChange}
              placeHolder="song Source"
            />
            {errors.musicSource.length > 0 ? (
              <p className="error">{errors.musicSource}</p>
            ) : null}
          </label>

          <label className="Download music-edit">
            Download
            <input
              type="string"
              name="Download"
              value={formState.Download}
              onChange={inputChange}
              placeHolder="Download link"
            />
            {errors.Download.length > 0 ? (
              <p className="error">{errors.Download}</p>
            ) : null}
          </label>

          <label className="Watch music-edit">
            Watch
            <input
              type="string"
              name="Watch"
              value={formState.Watch}
              onChange={inputChange}
              placeHolder="Watch link"
            />
            {errors.Watch.length > 0 ? (
              <p className="error">{errors.Watch}</p>
            ) : null}
          </label>

          <pre>{JSON.stringify(post, null, 2)}</pre>

          <NavLink to={`${url}/form-submited`}>
            <button onClick={validateChange} disabled={buttonDisabled}>
              Submit
            </button>
          </NavLink>
        </form>
      </Switch>
    </>
  );
}
