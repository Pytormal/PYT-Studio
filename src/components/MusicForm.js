import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import "./formStyle.css";

import {
  Route,
  Switch,
  NavLink,
  useParams,
  useRouteMatch,
} from "react-router-dom";

/*3. Authenticated `user` can Create, Update and Delete a `plant` object. At a minimum, each `plant` must have the following properties: 
    - `id`: Integer
    - `creditSource`: String
    - `creditSong` : String
    - `h2oFrequency`: Type determined by implementation
    - `image`: (optional)
    
    Authenticated user can view a list of created plants.  
    A plant can be deleted or selected to present user with a detail view where user can then update any property of the selected plant. 
    */

export default function Form() {
  const { path, url } = useRouteMatch();

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [formState, setFormState] = useState({
    creditSource: "",
    creditSong: "",
    creditStream: "",
    creditWatch: "",
  });

  const [errors, setErrors] = useState({
    creditSource: "",
    creditSong: "",
    creditStream: "",
    creditWatch: "",
  });
  const [post, setPost] = useState();

  const formSchema = yup.object().shape({
    creditSource: yup.string().required("Must include provided from."),
    creditSong: yup.string().required("Must include song."),
    creditStream: yup.string().required("Must include streaming source."),
    creditWatch: yup.string().required("Must include youtube source."),
  });

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/music", formState)
      .then((res) => {
        // setPost(res.data); // get just the form data from the REST api
        console.log("music.js", res.data);
        // reset form if successful
        // setFormState({
        // 	creditSource: '',
        // 	creditSong: '',
        // 	creditStream: '',
        // });
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
      {/* <Switch>
				<Route path={`${path}/form-submited`}>
					<div className='SubmitedText'>
						<h4>Submited Form </h4>
					</div>
				</Route> */}

      <form className="form-container" onSubmit={formSubmit}>
        <label className="creditSource music-edit">
          creditSource
          <input
            type="text"
            name="creditSource"
            value={formState.creditSource}
            onChange={inputChange}
            placeHolder="plant creditSource"
          />
          {errors.creditSource.length > 0 ? (
            <p className="error">{errors.creditSource}</p>
          ) : null}
        </label>

        <label className="creditSong music-edit">
          creditSong
          <input
            type="text"
            name="creditSong"
            value={formState.creditSong}
            onChange={inputChange}
            placeHolder="Plant creditSong"
          />
          {errors.creditSong.length > 0 ? (
            <p className="error">{errors.creditSong}</p>
          ) : null}
        </label>

        <label className="creditStream music-edit">
          creditStream
          <input
            type="text"
            name="creditStream"
            value={formState.creditStream}
            onChange={inputChange}
            placeHolder="Plant creditStream"
          />
          {errors.creditStream.length > 0 ? (
            <p className="error">{errors.creditStream}</p>
          ) : null}
        </label>

        <label className="creditWatch music-edit">
          creditWatch
          <input
            type="text"
            name="creditWatch"
            value={formState.creditWatch}
            onChange={inputChange}
            placeHolder="Plant creditWatch"
          />
          {errors.creditWatch.length > 0 ? (
            <p className="error">{errors.creditWatch}</p>
          ) : null}
        </label>

        <pre>{JSON.stringify(post, null, 2)}</pre>

        {/* <NavLink to={`${url}/form-submited`}> */}
        <button onClick={validateChange} disabled={buttonDisabled}>
          Submit
        </button>
        {/* </NavLink> */}
      </form>
      {/* </Switch> */}
    </>
  );
}
